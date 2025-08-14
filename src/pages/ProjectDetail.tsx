import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// Vite magic: import all markdown files in /src/projects as raw strings.
const projectFiles = import.meta.glob('../projects/**/*.md', { as: 'raw', eager: true }) as Record<string, string>

type Project = {
  id: string
  title: string
  description?: string
  tags?: string[]
  content: string
  repository?: string
  demo?: string
}

function parseMeta(md: string): { title?: string, description?: string, tags?: string[], repository?: string, demo?: string } {
  // Very lightweight frontmatter-ish: use first heading as title, and any line starting with "Tags:"
  const lines = md.split('\n')
  let title = lines.find(l => l.startsWith('# '))?.replace('# ', '')
  let description = lines.find(l => l.trim() && !l.startsWith('# '))?.trim()
  let tagsLine = lines.find(l => l.toLowerCase().startsWith('tags:'))
  let tags = tagsLine ? tagsLine.split(':', 2)[1].split(',').map(s => s.trim()).filter(Boolean) : undefined
  
  // Look for repository and demo links
  let repository: string | undefined
  let demo: string | undefined
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].toLowerCase().trim()
    if (line.startsWith('## repository') || line.startsWith('## demo')) {
      // Look for the next non-empty line that might contain a URL
      for (let j = i + 1; j < lines.length; j++) {
        const nextLine = lines[j].trim()
        if (nextLine && !nextLine.startsWith('#')) {
          // Check if it looks like a URL
          if (nextLine.includes('http') || nextLine.includes('github.com') || nextLine.includes('gitlab.com')) {
            if (line.startsWith('## repository')) {
              repository = nextLine
            } else if (line.startsWith('## demo')) {
              demo = nextLine
            }
          }
          break
        }
      }
    }
  }
  
  return { title, description, tags, repository, demo }
}

const projects: Project[] = Object.entries(projectFiles).map(([path, content]) => {
  const id = path.split('/').pop()!.replace('.md', '')
  const meta = parseMeta(content)
  return ({
    id,
    title: meta.title ?? id,
    description: meta.description,
    tags: meta.tags,
    content,
    repository: meta.repository,
    demo: meta.demo
  })
})

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>()
  const navigate = useNavigate()
  
  const project = projects.find(p => p.id === projectId)

  if (!project) {
    return (
      <div className="text-center py-12 sm:py-16 animate-fade-in">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-muted/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-muted-foreground/50 rounded"></div>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 tokyo-gradient-text">Project not found</h1>
        <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 max-w-md mx-auto px-4 sm:px-0">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <Button 
          onClick={() => navigate('/projects')}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 sm:px-6 py-2 sm:py-3"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-4 sm:space-y-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/projects')}
          className="mb-4 sm:mb-6 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Button>
        
        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 sm:gap-6">
            <div className="flex-1 space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tokyo-gradient-text leading-tight">{project.title}</h1>
              {project.description && (
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                  {project.description}
                </p>
              )}
              
              {project.tags && (
                <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-secondary/50 text-secondary-foreground rounded-full text-sm border border-border/50 hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-all duration-200"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:ml-6">
              {project.repository && (
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                  className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-200"
                >
                  <a href={project.repository} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                  className="border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/50 transition-all duration-200"
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-slate max-w-none prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-foreground prose-pre:bg-secondary prose-pre:text-foreground prose-pre:border prose-pre:border-border/50 prose-pre:rounded-lg prose-pre:p-4 sm:prose-pre:p-6 prose-pre:shadow-lg prose-blockquote:border-l-primary prose-blockquote:bg-muted/30 prose-blockquote:py-2 prose-blockquote:px-3 sm:prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-a:text-primary prose-a:no-underline hover:prose-a:text-accent prose-a:transition-colors prose-a:duration-200 prose-hr:border-border/50 prose-hr:my-6 sm:prose-hr:my-8 prose-ul:space-y-2 prose-ol:space-y-2 prose-li:text-muted-foreground prose-table:border-border/50 prose-th:border-border/50 prose-td:border-border/50 prose-sm sm:prose-base">
        <Markdown remarkPlugins={[remarkGfm]}>
          {project.content}
        </Markdown>
      </div>
      
      {/* Footer */}
      <div className="border-t border-border/40 pt-6 sm:pt-8 mt-8 sm:mt-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-tokyo-blue rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm text-muted-foreground font-mono">Project completed</span>
          </div>
          <Button 
            variant="ghost" 
            onClick={() => navigate('/projects')}
            className="text-muted-foreground hover:text-foreground hover:bg-muted/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </div>
      </div>
    </div>
  )
}

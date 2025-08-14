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
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist.</p>
        <Button onClick={() => navigate('/projects')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/projects')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
          
          <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
          {project.description && (
            <p className="text-xl text-muted-foreground mb-4">{project.description}</p>
          )}
          
          {project.tags && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        <div className="flex gap-2">
          {project.repository && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.repository} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View Code
              </a>
            </Button>
          )}
          {project.demo && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-slate max-w-none prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-foreground prose-pre:bg-secondary prose-pre:text-foreground">
        <Markdown remarkPlugins={[remarkGfm]}>
          {project.content}
        </Markdown>
      </div>
    </div>
  )
}

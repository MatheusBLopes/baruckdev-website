import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

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

export default function Projects() {
  const navigate = useNavigate()

  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`)
  }

  return (
    <div className="space-y-8 animate-fade-in relative z-10">
      <div className="text-center space-y-6 pt-8 pb-4">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-3 h-3 bg-tokyo-blue rounded-full animate-pulse"></div>
          <h1 className="text-5xl font-bold tokyo-gradient-text leading-tight">My Projects</h1>
          <div className="w-3 h-3 bg-tokyo-purple rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
          A collection of my work and experiments, built with passion and modern technologies
        </p>
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-2 h-2 bg-tokyo-cyan rounded-full animate-pulse"></div>
          <span className="text-sm text-tokyo-cyan font-mono">Click on any project to explore</span>
        </div>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-muted/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 bg-muted-foreground/50 rounded"></div>
          </div>
          <p className="text-muted-foreground text-lg">No projects found</p>
          <p className="text-sm text-muted-foreground mt-2">
            Add <code className="bg-muted/50 px-2 py-1 rounded text-tokyo-cyan">.md</code> files in <code className="bg-muted/50 px-2 py-1 rounded text-tokyo-cyan">src/projects/</code>.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group cursor-pointer tokyo-border-glow hover:tokyo-glow transition-all duration-500 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative pb-4">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <div className="w-2 h-2 bg-tokyo-blue rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse"></div>
                </div>
                {project.description && (
                  <CardDescription className="line-clamp-3 text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                )}
              </CardHeader>
              {project.tags && (
                <CardContent className="pt-0 relative">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tag} 
                        className="text-xs bg-secondary/50 text-secondary-foreground border border-border/50 hover:bg-primary/20 hover:text-primary transition-all duration-200"
                        style={{ animationDelay: `${(index * 0.1) + (tagIndex * 0.05)}s` }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500"></div>
                </CardContent>
              )}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
      
      <div className="text-center py-8">
        <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
          <div className="w-1 h-1 bg-tokyo-pink rounded-full animate-pulse"></div>
          <span className="font-mono">More projects coming soon...</span>
          <div className="w-1 h-1 bg-tokyo-pink rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>
    </div>
  )
}

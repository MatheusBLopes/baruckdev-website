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
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-muted-foreground text-lg">A collection of my work and experiments</p>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Add <code>.md</code> files in <code>src/projects/</code>.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <Card 
              key={project.id} 
              className="cursor-pointer hover:shadow-lg transition-shadow duration-200 hover:scale-[1.02] transition-transform"
              onClick={() => handleProjectClick(project.id)}
            >
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                {project.description && (
                  <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                )}
              </CardHeader>
              {project.tags && (
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} className="text-xs bg-secondary text-secondary-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

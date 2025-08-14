import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-8">
      <aside className="flex flex-col items-center gap-4 lg:gap-6 animate-slide-in-left order-1">
        <div className="relative group">
          <Avatar className="h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
            <AvatarImage src="/me.jpg" alt="My photo" />
            <AvatarFallback className="bg-primary text-primary-foreground text-xl sm:text-2xl font-bold">MB</AvatarFallback>
          </Avatar>
          <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold tokyo-gradient-text">Matheus B. Lopes</h1>
          <p className="text-base sm:text-lg text-muted-foreground px-4 sm:px-0">Python Developer • Systems Analysis and Development</p>
        </div>
      </aside>

      <section className="space-y-6 lg:space-y-8 animate-slide-in-right order-2">
        <Card className="tokyo-border-glow hover:tokyo-glow transition-all duration-300 group">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl sm:text-2xl flex items-center gap-3">
              <span className="text-tokyo-blue">01.</span>
              About me
            </CardTitle>
            <CardDescription className="text-base sm:text-lg">Professional overview</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed text-sm sm:text-base">
              Python developer, graduated in Systems Analysis and Development, passionate about technology. 
              I have public speaking skills, ease of working in a team, willingness to learn and build something new.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <div className="w-1 h-1 bg-tokyo-cyan rounded-full"></div>
              <span className="text-sm text-tokyo-cyan font-mono">Always learning, always building</span>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
          <Card className="tokyo-border-glow hover:tokyo-glow-purple transition-all duration-300 group">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg sm:text-xl flex items-center gap-3">
                <span className="text-tokyo-purple">02.</span>
                Education
              </CardTitle>
              <CardDescription>Academic background</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 lg:space-y-6">
              <div className="space-y-3 p-3 sm:p-4 bg-muted/30 rounded-lg border border-border/50">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div className="font-medium text-foreground">PUC-PR</div>
                  <div className="text-sm text-tokyo-cyan font-mono">01/08/2019 - 23/11/2021</div>
                </div>
                <p className="text-sm text-muted-foreground">Graduated in Systems Analysis and Development</p>
                <div className="w-full bg-border/50 h-px"></div>
              </div>
      
              <div className="space-y-3 p-3 sm:p-4 bg-muted/30 rounded-lg border border-border/50">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div className="font-medium text-foreground">FIAP</div>
                  <div className="text-sm text-tokyo-cyan font-mono">19/10/2023 - 10/12/2024</div>
                </div>
                <p className="text-sm text-muted-foreground">Postgraduate in Software Architecture</p>
                <p className="text-xs text-tokyo-yellow font-mono bg-muted/50 p-2 rounded border border-border/30">
                  Studied Kubernetes, Clean Architecture, DDD, BDD, ACID, SAGA, Security, LGPD, Microservices, AWS, Serverless, GitHub Actions
                </p>
                <div className="w-full bg-border/50 h-px"></div>
              </div>

              <div className="space-y-3 p-3 sm:p-4 bg-muted/30 rounded-lg border border-border/50">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div className="font-medium text-foreground">AWS</div>
                  <div className="text-sm text-tokyo-cyan font-mono">May 2025</div>
                </div>
                <p className="text-sm text-muted-foreground">Certified Solutions Architect - Associate</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 bg-tokyo-green rounded-full"></div>
                  <span className="text-xs text-tokyo-green font-mono">Certified</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="tokyo-border-glow hover:tokyo-glow-pink transition-all duration-300 group">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg sm:text-xl flex items-center gap-3">
                <span className="text-tokyo-pink">03.</span>
                Experience
              </CardTitle>
              <CardDescription>Professional journey</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 lg:space-y-6">
              <div className="space-y-4">
                <div className="space-y-3 p-3 sm:p-4 bg-muted/30 rounded-lg border border-border/50">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div className="font-medium text-foreground">Itaú Bank</div>
                    <div className="text-sm text-tokyo-cyan font-mono">05/10/2022 - Now</div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    In my current role, I thrive in the fast-paced Investment Services community, utilizing a range of technologies such as Python, lambdas, Terraform, CloudFormation, AWS, Grafana, and SQL/NoSQL databases. I excel at building efficient and scalable solutions, leveraging lambdas to streamline processes. With expertise in infrastructure management using Terraform and CloudFormation, I architect secure and robust solutions using AWS cloud provider. I harness the power of Grafana for monitoring and utilize SQL/NoSQL databases for efficient data storage and retrieval. Additionally, I am meticulous in conducting unit tests to ensure software reliability. Overall, I contribute to the success of our organization by delivering exceptional results and maintaining high-quality standards.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['Python', 'AWS', 'Terraform', 'Grafana'].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="w-full bg-border/50 h-px"></div>
                </div>

                <div className="space-y-3 p-3 sm:p-4 bg-muted/30 rounded-lg border border-border/50">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div className="font-medium text-foreground">Olist</div>
                    <div className="text-sm text-tokyo-cyan font-mono">23/11/2020 - 23/05/2022</div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I worked with systems integration, more specifically marketplaces, where we build the system to integrate orders, products with stock and price and notifications for the seller. The technologies I worked with were Python, Django, Docker, Microservices, AWS, Unit Tests, GitHub/GitLab and Grafana.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['Python', 'Django', 'Docker', 'AWS', 'Microservices'].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded border border-accent/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

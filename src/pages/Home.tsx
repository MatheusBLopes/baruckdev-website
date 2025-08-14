import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="grid md:grid-cols-[280px_1fr] gap-8">
      <aside className="flex flex-col items-center gap-4">
        <Avatar className="h-32 w-32">
          <AvatarImage src="/me.jpg" alt="My photo" />
          <AvatarFallback>MB</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h1 className="text-3xl font-bold">Matheus B. Lopes</h1>
          <p className="text-muted-foreground">Python Developer • Systems Analysis and Development</p>
        </div>
      </aside>

      <section className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>About me</CardTitle>
            <CardDescription>Professional overview</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Python developer, graduated in Systems Analysis and Development, passionate about technology. 
              I have public speaking skills, ease of working in a team, willingness to learn and build something new.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
              <CardDescription>Academic background</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div className="font-medium">PUC-PR</div>
                  <div className="text-sm text-muted-foreground">01/08/2019 - 23/11/2021</div>
                </div>
                <p className="text-sm text-muted-foreground">Graduated in Systems Analysis and Development</p>
              </div>
      
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div className="font-medium">FIAP</div>
                  <div className="text-sm text-muted-foreground">19/10/2023 - 10/12/2024</div>
                </div>
                <p className="text-sm text-muted-foreground">Postgraduate in Software Architecture</p>
                <p className="text-xs text-muted-foreground">
                  Studied Kubernetes, Clean Architecture, DDD, BDD, ACID, SAGA, Security, LGPD, Microservices, AWS, Serverless, GitHub Actions
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div className="font-medium">AWS</div>
                  <div className="text-sm text-muted-foreground">May 2025</div>
                </div>
                <p className="text-sm text-muted-foreground">Certified Solutions Architect - Associate</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Experience</CardTitle>
              <CardDescription>Professional journey</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div className="font-medium">Itaú Bank</div>
                    <div className="text-sm text-muted-foreground">05/10/2022 - Now</div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    In my current role, I thrive in the fast-paced Investment Services community, utilizing a range of technologies such as Python, lambdas, Terraform, CloudFormation, AWS, Grafana, and SQL/NoSQL databases. I excel at building efficient and scalable solutions, leveraging lambdas to streamline processes. With expertise in infrastructure management using Terraform and CloudFormation, I architect secure and robust solutions using AWS cloud provider. I harness the power of Grafana for monitoring and utilize SQL/NoSQL databases for efficient data storage and retrieval. Additionally, I am meticulous in conducting unit tests to ensure software reliability. Overall, I contribute to the success of our organization by delivering exceptional results and maintaining high-quality standards.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div className="font-medium">Olist</div>
                    <div className="text-sm text-muted-foreground">23/11/2020 - 23/05/2022</div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I worked with systems integration, more specifically marketplaces, where we build the system to integrate orders, products with stock and price and notifications for the seller. The technologies I worked with were Python, Django, Docker, Microservices, AWS, Unit Tests, GitHub/GitLab and Grafana.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

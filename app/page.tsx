import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export default function Home() {
  const skills = {
    languages: [
      "Python",
      "C/C++/C#",
      "Java",
      "Rust",
      "TypeScript",
      "Go",
      "CUDA",
      "Solidity",
      "Bash",
    ],
    frameworks: [
      "React.js",
      ".NET",
      "Windows Form",
      "Arduino",
      "Electron",
      "PostgreSQL",
      "shadcn/ui",
      "Docker",
      "Kubernetes",
      "Flask",
      "Web3.js",
      "Ethereum",
    ],
    tools: [
      "Git",
      "VS Code",
      "Visual Studio",
      "AWS",
      "Azure",
      "Supabase",
      "GCP",
      "Linux",
      "Jupyter Notebook",
    ],
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      
      {/* Mobile header */}
      <div className="lg:hidden sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <Image
              src="/linkedin_pfp.jpg"
              alt="Kunal Shrivastav"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div>
              <h1 className="text-lg font-bold text-foreground">kunal shrivastav</h1>
              <div className="flex space-x-2 mt-1">
                <a
                  href="https://www.linkedin.com/in/kunal-shrivastav/"
                  target="_blank"
                  title="LinkedIn"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <i className="fab fa-linkedin text-sm"></i>
                </a>
                <a
                  href="https://github.com/poke-key"
                  target="_blank"
                  title="GitHub"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <i className="fab fa-github text-sm"></i>
                </a>
                <a
                  href="https://www.instagram.com/president_50kunal.shrivastav/"
                  target="_blank"
                  title="Instagram"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <i className="fab fa-instagram text-sm"></i>
                </a>
                <a
                  href="mailto:kunalshrivastav345@gmail.com"
                  title="Email"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <i className="fas fa-envelope text-sm"></i>
                </a>
              </div>
            </div>
          </div>
          <ThemeToggle />
        </div>
        
        {/* Mobile navigation */}
        <div className="px-4 pb-4">
          <nav className="flex space-x-4">
            <a href="/" className="px-3 py-2 rounded-md text-sm font-medium bg-accent text-accent-foreground">
              home
            </a>
            <a href="/projects" className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50">
              projects
            </a>
            <a href="/resume" className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50">
              resume
            </a>
          </nav>
        </div>
      </div>

      {/* Desktop theme toggle */}
      <div className="hidden lg:block fixed top-4 right-8 z-50">
        <ThemeToggle />
      </div>
      
      <main className="ml-0 lg:ml-64 p-4 lg:p-8">
        <div className="max-w-4xl space-y-8 lg:space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6 text-foreground">work history</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nubroad_logo.jpg-b45rJm0cEb4HtnQxER8i3AQvzNjXAR.jpeg"
                      alt="Nubroad Logo"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                    <div>
                      <CardTitle>Full Stack Software Engineer</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        Nubroad LLC • June 2023 – Present
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/ucr-logo-vertical.png"
                      alt="UC Riverside Logo"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                    <div>
                      <CardTitle>Grader</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        University of California, Riverside • Sep. 2024 – June 2025
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">CS009B – Data Oriented Python for Programmers II</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-foreground">tech stack</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">languages</h3>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/python-logo.svg" alt="Python Logo" width={32} height={32} className="rounded" />
                    <span className="text-xs font-medium text-foreground">Python</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/csharp-logo.svg" alt="C# Logo" width={32} height={32} className="rounded" />
                    <span className="text-xs font-medium text-foreground">C#</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/cpp-logo.svg" alt="C++ Logo" width={32} height={32} className="rounded" />
                    <span className="text-xs font-medium text-foreground">C++</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/c-logo.png" alt="C Logo" width={32} height={32} className="rounded" />
                    <span className="text-xs font-medium text-foreground">C</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/java-logo.svg" alt="Java Logo" width={26} height={26} className="rounded" />
                    <span className="text-xs font-medium text-foreground">Java</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/rust-logo.svg" alt="Rust Logo" width={32} height={32} className="rounded" />
                    <span className="text-xs font-medium text-foreground">Rust</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/typescript-logo.svg" alt="TypeScript Logo" width={32} height={32} className="rounded" />
                    <span className="text-xs font-medium text-foreground">TypeScript</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/cuda-logo.svg" alt="CUDA Logo" width={32} height={32} className="rounded" />
                    <span className="text-xs font-medium text-foreground">CUDA</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/solidity-logo.svg" alt="Solidity Logo" width={20} height={20} className="rounded" />
                    <span className="text-xs font-medium text-foreground">Solidity</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/go-logo.svg" alt="Go Logo" width={36} height={36} className="rounded" />
                    <span className="text-xs font-medium text-foreground">Go</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/bash-logo.svg" alt="Bash Logo" width={26} height={26} className="rounded" />
                    <span className="text-xs font-medium text-foreground">Bash</span>
                  </div>
                  {skills.languages
                    .filter((skill) => !["C/C++/C#", "Python", "Java", "Rust", "TypeScript", "CUDA", "Solidity", "Go", "Bash"].includes(skill))
                    .map((skill, index) => (
                      <Badge key={index + 1} variant="secondary" className="font-medium">
                        {skill}
                      </Badge>
                    ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">frameworks</h3>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/react-logo.svg" alt="React Logo" width={32} height={32} className="rounded" />
                    <span className="text-xs font-medium text-foreground">React.js</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/dotnet-logo.svg" alt=".NET Logo" width={32} height={32} className="rounded" />
                    <span className="text-xs font-medium text-foreground">.NET</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/windows-form-logo.svg" alt="Windows Form Logo" width={48} height={48} className="rounded" />
                    <span className="text-xs font-medium text-foreground">Windows Form</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/arduino-logo.svg" alt="Arduino Logo" width={48} height={48} className="rounded" />
                    <span className="text-xs font-medium text-foreground">Arduino</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/electron-logo.svg" alt="Electron Logo" width={32} height={32} className="rounded" />
                    <span className="text-xs font-medium text-foreground">Electron</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/postgresql-logo.svg" alt="PostgreSQL Logo" width={32} height={32} className="rounded" />
                    <span className="text-xs font-medium text-foreground">PostgreSQL</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/shadcn-ui-logo.svg" alt="shadcn/ui Logo" width={32} height={32} className="rounded" />
                    <span className="text-xs font-medium text-foreground">shadcn/ui</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/docker-logo.svg" alt="Docker Logo" width={48} height={48} className="rounded" />
                    <span className="text-xs font-medium text-foreground">Docker</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/kubernetes-logo.svg" alt="Kubernetes Logo" width={32} height={32} className="rounded" />
                    <span className="text-xs font-medium text-foreground">Kubernetes</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/Flask-Dark.svg" alt="Flask Logo" width={32} height={32} className="rounded" />
                    <span className="text-xs font-medium text-foreground">Flask</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/web3js-logo.svg" alt="Web3.js Logo" width={32} height={32} className="rounded" />
                    <span className="text-xs font-medium text-foreground">Web3.js</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/ethereum-logo.svg" alt="Ethereum Logo" width={32} height={32} className="rounded" />
                    <span className="text-xs font-medium text-foreground">Ethereum</span>
                  </div>
                  {skills.frameworks
                    .filter((skill) => !["React.js", ".NET", "Windows Form", "Arduino", "Electron", "PostgreSQL", "shadcn/ui", "Docker", "Kubernetes", "Flask", "Web3.js", "Ethereum"].includes(skill))
                    .map((skill, index) => (
                      <Badge key={index + 1} variant="secondary" className="font-medium">
                        {skill}
                      </Badge>
                    ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">developer tools</h3>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/git-logo.svg" alt="Git Logo" width={32} height={32} className="rounded" />
                    <span className="text-xs font-medium text-foreground">Git</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/vscode-logo.svg" alt="VS Code Logo" width={32} height={32} className="rounded" />
                    <span className="text-xs font-medium text-foreground">VS Code</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/visual-studio-logo.svg" alt="Visual Studio Logo" width={32} height={32} className="rounded" />
                    <span className="text-xs font-medium text-foreground">Visual Studio</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/aws-logo.svg" alt="AWS Logo" width={48} height={48} className="rounded" />
                    <span className="text-xs font-medium text-foreground">AWS</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/azure-logo.svg" alt="Azure Logo" width={32} height={32} className="rounded" />
                    <span className="text-xs font-medium text-foreground">Azure</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/supabase-logo.svg" alt="Supabase Logo" width={32} height={32} className="rounded" />
                    <span className="text-xs font-medium text-foreground">Supabase</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/gcp-logo.svg" alt="GCP Logo" width={48} height={48} className="rounded" />
                    <span className="text-xs font-medium text-foreground">GCP</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/linux-logo.svg" alt="Linux Logo" width={32} height={32} className="rounded" />
                    <span className="text-xs font-medium text-foreground">Linux</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    <Image src="/jupyter-logo.svg" alt="Jupyter Notebook Logo" width={32} height={32} className="rounded" />
                    <span className="text-xs font-medium text-foreground">Jupyter Notebook</span>
                  </div>
                  {skills.tools
                    .filter((skill) => !["Git", "VS Code", "Visual Studio", "AWS", "Azure", "Supabase", "GCP", "Linux", "Jupyter Notebook"].includes(skill))
                    .map((skill, index) => (
                      <Badge key={index + 1} variant="secondary" className="font-medium">
                        {skill}
                      </Badge>
                    ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

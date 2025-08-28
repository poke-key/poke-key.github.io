import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export default function ProjectsPage() {
  const projects = [
    {
      title: "tetris (c/c++)",
      description: "An embedded system that allows the user to play Tetris on two 8x8 LED Matrix's.",
      image: "/led-matrix-tetris-game-embedded-system.png",
      link: "https://github.com/poke-key/tetris-led",
    },
    {
      title: "computer-performance and games (c#)",
      description:
        "Windows Form application that displays computer hardware performance and runs other classic games like Tic Tac Toe and Sudoku using the Windows Metro Framework and Live Tiles UI.",
      image: "/windows-metro-ui-performance-monitoring-applicatio.png",
      link: "https://github.com/poke-key/Computer-Performance",
    },
    {
      title: "compiler (rust)",
      description:
        "Compiler implemented in Rust, utilizing enumeration for lexical tokenization and state machines for syntactic analysis and parsing. Incorporates advanced error handling mechanisms and optimizes abstract syntax tree (AST) generation for efficient code execution.",
      image: "/rust-compiler-abstract-syntax-tree-programming.png",
      link: "https://github.com/poke-key/Rust-Compiler",
    },
    {
      title: "vehicle-net (solidity/next.js)",
      description:
        "Open source decentralized vehicle marketplace with smart contracts for vehicle registration & data monetization, implementing HD wallet derivation in Rust for cryptographically signed condition reports and trustless automotive transactions. Vehicle-Net is interacted with on a full-stack Web3 application with Next.js frontend & Rust CLI, enabling vehicle owners to list GPS/diagnostic data products on-chain with streaming payments and buyers to verify authentic vehicle data through Ethereum blockchain verification.",
      image: "/ethereum_blockchain.png",
      link: "https://github.com/poke-key/vehicle-net",
    },
    {
      title: "CUDA Ray-Tracer (cuda, SDL)",
      description:
        "Built a real-time 3D ray tracer in CUDA C++ with GPU-accelerated ray-triangle intersections and parallel kernel execution. Developed an interactive renderer using SDL2 and TinyObjLoader with real-time model rotation and camera zoom. Implemented Möller-Trumbore ray casting, shadow rays, and Phong lighting with accurate normals and attenuation.",
      image: "/ray_tracer.png",
      link: "https://github.com/poke-key/CUDA-Accelerated-Ray-Tracer",
    },
    {
      title: "Congress-IQ (aws/typescript)",
      description:
        "Built a full-stack application using Shadcn UI, OAuth 2.0, and Convex database, for storing U.S Congressional bills using congress.gov RESTful API and HTM file bill storage. Integrated AWS Elasticsearch for semantic search with 90%+ search accuracy and utilized OpenRouter LLMs for bill summarization and Q&A allowing users to quickly understand, search and understand impacts of bills with AI-driven insights.",
      image: "/congress_iq.png",
      link: "https://github.com/poke-key/congressIQ",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      <div className="fixed top-4 right-4 z-50 lg:right-8">
        <ThemeToggle />
      </div>
      <main className="ml-0 lg:ml-64 p-8">
        <section className="max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-foreground">projects</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group block transition-transform hover:scale-105"
              >
                <Card className="h-full overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

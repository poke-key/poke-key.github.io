import { Sidebar } from "@/components/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Resume() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="fixed top-4 right-4 z-50 lg:right-8">
        <ThemeToggle />
      </div>
      <main className="ml-64 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <header className="text-center mb-8 border-b border-border pb-6">
              <h1 className="text-3xl font-bold text-foreground mb-2">Kunal Shrivastav</h1>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>669-225-8440 | kunalshrivastav345@gmail.com</p>
                <p>linkedin.com/in/kunal-shrivastav | github.com/poke-key | poke-key.github.io</p>
              </div>
            </header>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-3 border-b border-border pb-2">Objective</h2>
              <p className="text-muted-foreground">
                Seeking position in Software Engineering; U.S Citizen (Don't need H1-B sponsorship)
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-3 border-b border-border pb-2">
                Technical Skills
              </h2>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-foreground">Languages:</span>
                  <span className="text-muted-foreground ml-2">
                    Python, C/C++/C#, Assembly, JavaScript, HTML/CSS, Java, SQL, Verilog, Rust, TypeScript, Go, CUDA
                  </span>
                </div>
                <div>
                  <span className="font-medium text-foreground">Frameworks:</span>
                  <span className="text-muted-foreground ml-2">
                    React.js, Node.js, Express.js, Next.js, .NET, Windows Form, Qt, Arduino, Flask, Electron, PostgreSQL, Web3.js, Ethereum
                  </span>
                </div>
                <div>
                  <span className="font-medium text-foreground">Developer Tools:</span>
                  <span className="text-muted-foreground ml-2">
                    Git, VS Code, Visual Studio, Vim, AWS, Azure, Bash, Jupyter Notebook, MongoDB, Clerk, Convex,
                    Kubernetes
                  </span>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-3 border-b border-border pb-2">Job Experience</h2>

              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-foreground">Full Stack Software Engineer – Nubroad LLC</h3>
                  <span className="text-sm text-muted-foreground">June 2023 – Present</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Saratoga, CA</p>

                <div className="mb-4">
                  <h4 className="font-medium text-foreground mb-2">SIPChat</h4>
                  <p className="text-muted-foreground text-sm mb-2">
                    A tool to provide chatting capability to SMS over VOIP telephony. Incoming SMS messages were
                    delivered as email to SIPChat, and outgoing SMS replies were sent out as email via IMAP/Gmail Rest
                    API. SIPChat was developed in Electron for cross platform compatibility over Windows/MAC/Linux
                    desktops.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-4">
                    <li>
                      Added critical features including a spell checker, multi-language support, auto-start capability,
                      and cross-platform chat notification support, improving the overall user experience and
                      communication efficiency.
                    </li>
                    <li>
                      Refactored backend service code to fix errors in parsing email messages with attached files from
                      senders.
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-2">
                    <span className="font-medium">Tools:</span> TypeScript, React.js, SQLite, Electron, Go, Tailwind
                    CSS, Shadcn
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-foreground mb-2">Kubelinc</h4>
                  <p className="text-muted-foreground text-sm mb-2">
                    Blockchain based product life cycle management software.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground text-sm ml-4">
                    <li>Added "Login with Amazon" support to user account login.</li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-foreground">Grader - University of California, Riverside</h3>
                  <span className="text-sm text-muted-foreground">Sep. 2024 – June 2025</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Riverside, CA</p>
                <h4 className="font-medium text-foreground mb-2">CS009B – Data Oriented Python for Programmers II</h4>
                <ul className="list-disc list-inside text-muted-foreground text-sm ml-4">
                  <li>
                    Evaluated and graded 8 programming assignments and 2 exams per student for an undergraduate computer
                    science course, maintaining consistent grading standards and detailed feedback
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-3 border-b border-border pb-2">
                Undergrad Projects
              </h2>
              <p className="text-sm text-muted-foreground mb-4">(Reverse Chronological order)</p>

              <div className="space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-semibold text-foreground">Vehicle-Net</h3>
                    <span className="text-xs text-muted-foreground">|</span>
                    <span className="text-xs text-muted-foreground">
                      Solidity, Rust, Next.js, TypeScript, Foundry, Wagmi, Viem, Ethers.rs, TailwindCSS, Porto.sh, Web3,
                      Cryptography
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-4">
                    <li>
                      Built a open source decentralized vehicle marketplace with smart contracts for vehicle
                      registration & data monetization, implementing HD wallet derivation in Rust for cryptographically
                      signed condition reports and trustless automotive transactions.
                    </li>
                    <li>
                      Developed full-stack Web3 application with Next.js frontend & Rust CLI, enabling vehicle owners to
                      list GPS/diagnostic data products on-chain with streaming payments and buyers to verify authentic
                      vehicle data through Ethereum blockchain verification.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-semibold text-foreground">Congress-IQ</h3>
                    <span className="text-xs text-muted-foreground">|</span>
                    <span className="text-xs text-muted-foreground">
                      Next.js, TypeScript, Shadcn, Tailwind CSS, AWS, Docker, Grok
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-4">
                    <li>
                      Built a Next.js full-stack application using Shadcn UI, OAuth 2.0, and Convex database, for
                      storing U.S Congressional bills using congress.gov RESTful API and HTM file bill storage.
                    </li>
                    <li>
                      Integrated AWS Elasticsearch for semantic search with 90%+ search accuracy and utilized OpenRouter
                      LLMs for bill summarization and Q&A allowing users to quickly understand, search and understand
                      impacts of bills with AI-driven insights.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-semibold text-foreground">Encrypted Network Traffic Classifier</h3>
                    <span className="text-xs text-muted-foreground">|</span>
                    <span className="text-xs text-muted-foreground">
                      Python, Jupyter Notebook, Streamlit, Wireshark, TensorFlow
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-4">
                    <li>
                      Trained and cross-validated machine learning models in Jupyter Notebook using a Kaggle network
                      traffic dataset for encrypted flow-level classification, achieving 92% cross-validation and 83%
                      test accuracy.
                    </li>
                    <li>
                      Packaged and deployed the top-performing model as a Streamlit app for real-time traffic
                      prediction, enabling identification of streaming, gaming, browsing, and other encrypted
                      application traffic without payload inspection.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-semibold text-foreground">CUDA-Accelerated Ray Tracer</h3>
                    <span className="text-xs text-muted-foreground">|</span>
                    <span className="text-xs text-muted-foreground">CUDA, C++, SDL</span>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-4">
                    <li>
                      Worked in a group of 3 to engineer a parallel ray tracer in CUDA C++, featuring .obj file loading,
                      primary rays, reflections, shadows, and Blinn-Phong/Lambertian lighting via optimized GPU kernels.
                    </li>
                    <li>
                      Integrated SDL for real-time display and movable camera controls, and performed profiling to
                      optimize thread organization, memory access patterns, and numerical stability.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-semibold text-foreground">Linux Keyboard Filter Device Driver</h3>
                    <span className="text-xs text-muted-foreground">|</span>
                    <span className="text-xs text-muted-foreground">C, Linux Kernel Development, Ubuntu, Debian</span>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-4">
                    <li>
                      Developed a Linux kernel module for configurable key filtering and remapping using module
                      parameters, utilizing firmware level programming for IoT device input management, showcasing input
                      subsystem interaction and kernel API proficiency.
                    </li>
                    <li>
                      Implemented dynamic runtime configuration via the proc-filesystem, highlighting kernel-user-space
                      interaction, concurrency handling, and robust error management.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-3 border-b border-border pb-2">Education</h2>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-foreground">BS in Computer Science</h3>
                <span className="text-sm text-muted-foreground">Sept. 2022 – June 2025</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">University of California, Riverside</p>
              <p className="text-sm text-muted-foreground mb-3">CGPA: 3.7/4.0</p>
              <div>
                <span className="font-medium text-foreground">Courses:</span>
                <span className="text-muted-foreground ml-2 text-sm">
                  Data Structures & Algorithms, MIPS Assembly, Software Construction, Operating Systems, Embedded
                  Systems, Compiler Design, Optimization, Computer Networks, Intro to AI, Computer Security, Software
                  Engineering, GPU Programming
                </span>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3 border-b border-border pb-2">
                Awards and Certifications
              </h2>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-foreground">Foundational C#</h3>
                <span className="text-sm text-muted-foreground">Sep. 2023 – Oct. 2023</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Microsoft, Saratoga, CA</p>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-4">
                <li>
                  Hands-on experience in developing high-level console-based and executable applications in the .NET
                  framework
                </li>
                <li>
                  Attained knowledge about the components of debugging, exception handling, compilers, and applying them
                  to applications.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

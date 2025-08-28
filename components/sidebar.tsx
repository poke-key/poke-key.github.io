"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "home" },
    { href: "/projects", label: "projects" },
    { href: "/resume", label: "resume" },
  ]

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-background border-r border-border">
      <div className="flex h-full flex-col p-6">
        <header className="mb-8">
          <div className="mb-4">
            <Image
              src="/linkedin_pfp.jpg"
              alt="Kunal Shrivastav"
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
          </div>

          <h1 className="text-xl font-bold text-foreground mb-4">kunal shrivastav</h1>

          <div className="flex space-x-3">
            <a
              href="https://www.linkedin.com/in/kunal-shrivastav/"
              target="_blank"
              title="LinkedIn"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <i className="fab fa-linkedin text-lg"></i>
            </a>
            <a
              href="https://github.com/poke-key"
              target="_blank"
              title="GitHub"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <i className="fab fa-github text-lg"></i>
            </a>
            <a
              href="https://www.instagram.com/president_50kunal.shrivastav/"
              target="_blank"
              title="Instagram"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <i className="fab fa-instagram text-lg"></i>
            </a>
            <a
              href="mailto:kunalshrivastav345@gmail.com"
              title="Email"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <i className="fas fa-envelope text-lg"></i>
            </a>
          </div>
        </header>

        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>

      {/* Font Awesome for icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </aside>
  )
}

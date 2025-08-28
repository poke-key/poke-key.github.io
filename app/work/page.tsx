import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      <div className="fixed top-4 right-4 z-50 lg:right-8">
        <ThemeToggle />
      </div>
      <main className="ml-0 lg:ml-64 p-8">
        <section className="max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-foreground">work history</h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Full Stack Software Engineer</CardTitle>
                <CardDescription className="text-primary font-medium">Nubroad LLC</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Working on full-stack development projects, contributing to both frontend and backend systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}

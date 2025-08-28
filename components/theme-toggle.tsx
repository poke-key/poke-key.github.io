"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-300 dark:bg-navy-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-navy-900"
      style={{
        backgroundColor: isDark ? '#1e2a3a' : '#e5e7eb'
      }}
      aria-label="Toggle theme"
    >
      <span
        className={`inline-block h-6 w-6 transform rounded-full transition-transform duration-200 ${
          isDark ? "translate-x-7" : "translate-x-1"
        }`}
        style={{
          backgroundColor: isDark ? '#f8fafc' : '#1e2a3a'
        }}
      >
        <span className="flex h-full w-full items-center justify-center">
          {isDark ? <Moon className="h-3 w-3 text-slate-300" /> : <Sun className="h-3 w-3 text-yellow-500" />}
        </span>
      </span>
    </button>
  )
}

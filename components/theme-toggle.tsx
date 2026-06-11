"use client"

import * as React from "react"
import { flushSync } from "react-dom"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === "dark"

  const toggleTheme = async () => {
    const next = isDark ? "light" : "dark"

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // Fallback: no View Transitions support or reduced motion preference.
    if (
      !buttonRef.current ||
      typeof document === "undefined" ||
      !document.startViewTransition ||
      prefersReducedMotion
    ) {
      setTheme(next)
      return
    }

    // Origin of the circular reveal = center of the toggle button.
    const { top, left, width, height } = buttonRef.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    )

    const transition = document.startViewTransition(() => {
      flushSync(() => setTheme(next))
    })

    await transition.ready

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 600,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        pseudoElement: "::view-transition-new(root)",
      },
    )
  }

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={`relative inline-flex h-10 w-[72px] items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        isDark
          ? 'bg-gray-800 focus:ring-blue-500'
          : 'bg-gray-200 focus:ring-gray-300'
      }`}
      aria-label="Toggle theme"
    >
      {/* Background icons - only show when not covered by thumb */}
      <span className={`absolute left-2 transition-opacity duration-300 ${isDark ? 'opacity-30' : 'opacity-0'}`}>
        <Sun className="h-4 w-4 text-orange-400" />
      </span>

      <span className={`absolute right-2 transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-30'}`}>
        <Moon className="h-4 w-4 text-blue-400" />
      </span>

      {/* Moving thumb with active icon */}
      <span
        className={`relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full shadow-md transform transition-transform duration-300 ${
          isDark ? "translate-x-8 bg-gray-700" : "translate-x-1 bg-white"
        }`}
      >
        {isDark ? (
          <Moon className="h-4 w-4 text-blue-400" />
        ) : (
          <Sun className="h-4 w-4 text-orange-400" />
        )}
      </span>
    </button>
  )
}

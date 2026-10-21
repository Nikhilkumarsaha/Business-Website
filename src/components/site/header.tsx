import { useEffect, useState } from "react"
import { ArrowRight, Menu, Phone, X } from "lucide-react"

import { business, nav } from "@/data/site"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/site/logo"

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors",
        solid ? "border-b border-border bg-white/95 shadow-sm backdrop-blur" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-5">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${business.phoneTel}`}
            aria-label={`Call ${business.phoneDisplay}`}
            className="grid size-10 place-items-center rounded-full border border-border bg-white text-foreground transition hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Phone className="size-4" />
          </a>
          <Button asChild className="hidden rounded-full sm:inline-flex">
            <a href="#contact">
              Get a quote
              <ArrowRight />
            </a>
          </Button>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-border bg-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-border bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-border py-3 text-base font-semibold"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-4 rounded-full">
              <a href="#contact" onClick={() => setOpen(false)}>
                Get a quote
                <ArrowRight />
              </a>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

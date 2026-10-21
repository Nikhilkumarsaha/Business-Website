import { ArrowRight, MapPin, Mountain } from "lucide-react"

import { business } from "@/data/site"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="top" className="relative bg-white lg:min-h-[100svh]">
      <div className="pt-[4.5rem] lg:p-0">
        <img
          src="/images/hero.jpg"
          alt="Crusher plant, conveyors and aggregate stockpiles at Baba Biswanath"
          width={1600}
          height={900}
          fetchPriority="high"
          decoding="async"
          className="aspect-video w-full object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:size-full"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.88)_28%,rgba(255,255,255,0.4)_54%,rgba(255,255,255,0.05)_74%)] lg:block" />
      <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-28 bg-gradient-to-b from-white/80 to-transparent lg:block" />

      <Badge
        variant="secondary"
        className="absolute right-10 bottom-28 z-10 hidden px-3 py-1.5 text-[13px] lg:inline-flex"
      >
        <MapPin className="size-3.5 text-primary" />
        {business.place}
      </Badge>

      <div className="pointer-events-none absolute top-1/2 right-[8%] z-10 hidden -translate-y-1/2 xl:block">
        <div className="grid size-40 place-items-center rounded-full bg-white/92 text-center shadow-[0_0_0_12px_rgba(255,255,255,0.28)]">
          <div className="px-5">
            <Mountain className="mx-auto size-7 text-primary" />
            <p className="mt-2 text-sm leading-tight font-extrabold">
              Local Materials
              <br />
              Stronger Structures
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-center px-5 py-10 lg:min-h-[100svh] lg:py-28">
        <p className="text-xs font-semibold tracking-[0.2em] text-neutral-600 uppercase">
          Badasiajang, Odisha · Est. {business.established}
        </p>
        <h1 className="mt-4 max-w-[12ch] text-[2.65rem] leading-[0.95] font-extrabold tracking-[-0.035em] text-balance sm:text-6xl lg:text-7xl">
          Stronger Foundations Build Brighter Tomorrows.
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-700 sm:text-lg">
          Wholesale stone aggregates and dust for residential and commercial projects.
          On-site delivery available.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-full">
            <a href="#contact">
              Get a quote
              <ArrowRight />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full bg-white/90">
            <a href="#materials">Explore materials</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

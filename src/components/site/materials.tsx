import { ArrowRight, Boxes, ShieldCheck, Truck } from "lucide-react"

import { materials, trustPoints } from "@/data/site"

const trustIcons = {
  truck: Truck,
  boxes: Boxes,
  shield: ShieldCheck,
} as const

export function Materials() {
  return (
    <section
      id="materials"
      className="relative z-10 bg-white lg:-mt-10 lg:rounded-t-[2.75rem] lg:shadow-[0_-18px_50px_rgba(7,17,29,0.06)]"
    >
      <div className="border-b border-border">
        <ul className="mx-auto grid max-w-6xl gap-4 px-5 py-6 sm:grid-cols-3 sm:py-7">
          {trustPoints.map((point) => {
            const Icon = trustIcons[point.icon]
            return (
              <li key={point.title} className="flex items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent text-primary">
                  <Icon className="size-5" />
                </span>
                <span className="text-sm font-semibold">{point.title}</span>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid items-end gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              Our materials
            </p>
            <h2 className="mt-3 max-w-[14ch] text-4xl leading-[1.02] font-extrabold tracking-tight text-balance sm:text-5xl">
              The right material for every build.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground lg:justify-self-end">
            Quality stone aggregates and dust for residential and commercial construction
            projects. Tell us the grade and quantity you need and we&apos;ll arrange delivery.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {materials.map((material) => (
            <article key={material.number} className="flex flex-col">
              <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
                <img
                  src={material.image}
                  alt={material.alt}
                  width={960}
                  height={960}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 240px, (min-width: 640px) 45vw, 100vw"
                  className="size-full object-cover transition duration-500 hover:scale-[1.04]"
                />
              </div>
              <p className="mt-5 text-4xl font-semibold tracking-tight text-neutral-300">
                {material.number}
              </p>
              <h3 className="mt-1 text-xl font-bold tracking-tight">{material.name}</h3>
              <p className="mt-1 text-sm font-medium text-foreground/70">{material.size}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {material.description}
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary"
              >
                Get a quote
                <ArrowRight className="size-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

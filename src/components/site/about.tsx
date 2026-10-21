import { Mountain } from "lucide-react"

import { business, facts } from "@/data/site"

export function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            About Baba Biswanath
          </p>
          <h2 className="mt-3 max-w-[14ch] text-4xl leading-[1.02] font-extrabold tracking-tight text-balance sm:text-5xl">
            Built on trust. Backed by experience.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            {business.name} is a wholesale trader of stone aggregates and dust, based in{" "}
            {business.place}. Established in {business.established}, we supply material for
            residential builds and large-scale commercial projects, with on-site delivery
            available.
          </p>
          <dl className="mt-10 grid gap-x-6 gap-y-7 border-t border-border pt-8 sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-lg leading-snug font-extrabold tracking-tight break-words">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="relative">
          <div className="overflow-hidden rounded-[1.75rem] bg-muted">
            <img
              src="/images/about.jpg"
              alt="Aggregate stockpiles and conveyor at the Baba Biswanath crusher yard"
              width={1400}
              height={1050}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] size-full object-cover"
            />
          </div>
          <figcaption className="absolute right-4 bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white/95 p-4 shadow-lg sm:right-5 sm:bottom-5 sm:left-auto sm:max-w-[16rem]">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent text-primary">
              <Mountain className="size-5" />
            </span>
            <span className="text-sm leading-snug font-bold">
              Same ground. Stronger possibilities.
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

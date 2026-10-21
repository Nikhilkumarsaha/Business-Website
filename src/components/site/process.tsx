import { Layers, MapPin, Truck } from "lucide-react"

import { steps } from "@/data/site"

const stepIcons = {
  layers: Layers,
  pin: MapPin,
  truck: Truck,
} as const

export function Process() {
  return (
    <section id="delivery" className="bg-[#07111d] text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-white/60 uppercase">
              Our process
            </p>
            <h2 className="mt-3 max-w-[12ch] text-4xl leading-[1.02] font-extrabold tracking-tight text-balance sm:text-5xl">
              From our yard to your site.
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-white/75">
              A simple and reliable process for hassle-free material supply.
            </p>
          </div>
          <img
            src="/images/process-delivery.jpg"
            alt="Tipper truck unloading stone at a delivery site"
            width={1600}
            height={900}
            loading="lazy"
            decoding="async"
            className="aspect-video w-full rounded-2xl object-cover"
          />
        </div>
        <ol className="mt-14 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
          {steps.map((step) => {
            const Icon = stepIcons[step.icon]
            return (
              <li key={step.number}>
                <div className="flex items-center gap-3">
                  <span className="text-5xl leading-none font-semibold text-white/25">
                    {step.number}
                  </span>
                  <span className="grid size-10 place-items-center rounded-full border border-white/20">
                    <Icon className="size-4" />
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{step.description}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

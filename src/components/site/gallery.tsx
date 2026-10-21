import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { gallery } from "@/data/site"
import { cn } from "@/lib/utils"

export function Gallery() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [edges, setEdges] = useState({ atStart: true, atEnd: false })

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    const update = () => {
      setEdges({
        atStart: el.scrollLeft <= 4,
        atEnd: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
      })
    }

    update()
    el.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      el.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  function scrollByPage(direction: 1 | -1) {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: direction * Math.max(el.clientWidth * 0.8, 240), behavior: "smooth" })
  }

  return (
    <section id="gallery" className="bg-[#f7f8fa]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              Gallery
            </p>
            <h2 className="mt-3 max-w-[16ch] text-4xl leading-[1.02] font-extrabold tracking-tight text-balance sm:text-5xl">
              A closer look at our yard and materials.
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous photos"
              disabled={edges.atStart}
              onClick={() => scrollByPage(-1)}
              className={cn(
                "grid size-11 place-items-center rounded-full border border-border bg-white transition hover:bg-secondary disabled:opacity-40",
              )}
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next photos"
              disabled={edges.atEnd}
              onClick={() => scrollByPage(1)}
              className="grid size-11 place-items-center rounded-full border border-border bg-white transition hover:bg-secondary disabled:opacity-40"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {gallery.map((photo) => (
            <figure
              key={photo.src}
              data-gallery-card
              className="w-[82%] shrink-0 snap-start sm:w-[48%] lg:w-[32%] xl:w-[24%]"
            >
              <div className="overflow-hidden rounded-2xl bg-muted">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={720}
                  height={540}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] size-full object-cover"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

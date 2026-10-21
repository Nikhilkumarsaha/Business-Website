import { cn } from "@/lib/utils"
import { business } from "@/data/site"

export function Logo({
  tone = "color",
  className,
}: {
  tone?: "color" | "white"
  className?: string
}) {
  const src = tone === "white" ? "/images/logo-white.png" : "/images/logo.png"

  return (
    <a href="#top" className={cn("flex items-center gap-2.5", className)}>
      <img src={src} alt="" className="h-11 w-auto sm:h-12" />
      <span className="leading-none">
        <span
          className={cn(
            "block text-[15px] font-extrabold tracking-tight sm:text-base",
            tone === "white" ? "text-white" : "text-foreground",
          )}
        >
          {business.shortName}
        </span>
        <span
          className={cn(
            "mt-1 block text-[10px] font-semibold tracking-[0.16em]",
            tone === "white" ? "text-white/70" : "text-muted-foreground",
          )}
        >
          STONE CRUSHER
        </span>
      </span>
    </a>
  )
}

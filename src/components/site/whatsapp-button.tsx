import { whatsAppHref } from "@/data/site"
import { WhatsAppIcon } from "@/components/site/icons"

export function WhatsAppButton() {
  return (
    <a
      href={whatsAppHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-4 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:bg-[#1ebe5b] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-white/70"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  )
}

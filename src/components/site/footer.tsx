import { ArrowUpRight } from "lucide-react"

import { business, nav, socials } from "@/data/site"
import { FacebookIcon, GitHubIcon, InstagramIcon, LinkedInIcon, XIcon } from "@/components/site/icons"
import { Logo } from "@/components/site/logo"

const socialIcons = {
  Facebook: FacebookIcon,
  X: XIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
} as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#07111d] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="white" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Wholesale stone aggregates and dust from {business.place}. On-site delivery available.
          </p>
          <div className="mt-5 flex gap-2">
            {socials.map((social) => {
              const Icon = socialIcons[social.label]
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="grid size-10 place-items-center rounded-full border border-white/15 text-white transition hover:bg-white/10"
                >
                  <Icon className="size-4" />
                </a>
              )
            })}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-[0.16em] text-white/50 uppercase">Company</h2>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm font-medium text-white/85 hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-[0.16em] text-white/50 uppercase">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            <li>
              <a className="hover:text-white" href={`mailto:${business.email}`}>
                {business.email}
              </a>
            </li>
            <li>
              <a className="hover:text-white" href={`tel:${business.phoneTel}`}>
                {business.phoneDisplay}
              </a>
            </li>
            <li>{business.place}</li>
            <li className="text-white/60">{business.coordinates}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-[0.16em] text-white/50 uppercase">Location</h2>
          <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
            <iframe
              title="Map of Baba Biswanath Stone Crusher in Badasiajang, Odisha"
              src={business.mapEmbed}
              className="h-40 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a
            href={business.mapLink}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-white/85 hover:text-white"
          >
            Open in Maps
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 pb-24 text-sm text-white/55 md:pb-5">
          © {year} {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

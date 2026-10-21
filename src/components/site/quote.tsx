import { useState, type FormEvent } from "react"
import { Mail, Phone } from "lucide-react"

import { business, whatsAppHref } from "@/data/site"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { WhatsAppIcon } from "@/components/site/icons"

type FormStatus = "idle" | "submitting" | "success" | "error"

export function Quote() {
  const [status, setStatus] = useState<FormStatus>("idle")

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return

    setStatus("submitting")
    try {
      const response = await fetch(business.web3formsUrl, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      })
      const data = (await response.json()) as { success?: boolean }
      if (!response.ok || !data.success) {
        throw new Error("Request failed")
      }
      form.reset()
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="relative isolate overflow-hidden text-white">
      <img
        src="/images/hero.jpg"
        alt=""
        width={1600}
        height={900}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[#07111d]/88" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-white/60 uppercase">
            Get a quote
          </p>
          <h2 className="mt-3 max-w-[14ch] text-4xl leading-[1.02] font-extrabold tracking-tight text-balance sm:text-5xl">
            Let&apos;s build something stronger.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/75">
            Share your requirements and we&apos;ll get back to you with rates and delivery
            options.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <a
              href={`tel:${business.phoneTel}`}
              className="flex items-center gap-3 font-semibold hover:text-white/80"
            >
              <Phone className="size-4" />
              {business.phoneDisplay}
            </a>
            <a
              href={`mailto:${business.email}`}
              className="flex items-center gap-3 font-semibold hover:text-white/80"
            >
              <Mail className="size-4" />
              {business.email}
            </a>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-white text-[#07111d] hover:bg-white/90">
              <a href={`tel:${business.phoneTel}`}>
                <Phone />
                Call
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10"
            >
              <a href={whatsAppHref} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="size-4" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <Card className="border-white/10 bg-white text-foreground shadow-2xl">
          <CardContent className="p-6 sm:p-8">
            {status === "success" ? (
              <div role="status" className="py-10 text-center">
                <h3 className="text-2xl font-extrabold tracking-tight">Message sent.</h3>
                <p className="mt-3 text-muted-foreground">
                  Thank you. We&apos;ll get back to you with a quote.
                </p>
                <Button type="button" className="mt-6 rounded-full" onClick={() => setStatus("idle")}>
                  Send another
                </Button>
              </div>
            ) : (
              <form action={business.web3formsUrl} method="POST" onSubmit={onSubmit} noValidate={false}>
                <input type="hidden" name="access_key" value={business.web3formsKey} />
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="quote-name">Full name</Label>
                    <Input
                      id="quote-name"
                      name="full_name"
                      placeholder="Full name"
                      autoComplete="name"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="quote-email">Email</Label>
                    <Input
                      id="quote-email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      autoComplete="email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="quote-phone">Phone number</Label>
                    <Input
                      id="quote-phone"
                      name="phone_number"
                      type="tel"
                      inputMode="tel"
                      placeholder="Phone number"
                      autoComplete="tel"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="quote-subject">Subject</Label>
                    <Input id="quote-subject" name="subject" placeholder="Subject" />
                  </div>
                </div>
                <div className="mt-4 grid gap-2">
                  <Label htmlFor="quote-message">Your message</Label>
                  <Textarea
                    id="quote-message"
                    name="message"
                    placeholder="Material, quantity and delivery location"
                  />
                </div>
                {status === "error" ? (
                  <p role="alert" className="mt-4 text-sm font-medium text-destructive">
                    We couldn&apos;t send that just now. Please call or WhatsApp us and we&apos;ll
                    take the details.
                  </p>
                ) : null}
                <Button
                  type="submit"
                  size="lg"
                  className="mt-5 w-full rounded-full"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending…" : "Send message"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

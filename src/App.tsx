import { About } from "@/components/site/about"
import { Footer } from "@/components/site/footer"
import { Gallery } from "@/components/site/gallery"
import { Header } from "@/components/site/header"
import { Hero } from "@/components/site/hero"
import { Materials } from "@/components/site/materials"
import { Process } from "@/components/site/process"
import { Quote } from "@/components/site/quote"
import { WhatsAppButton } from "@/components/site/whatsapp-button"

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Materials />
        <Process />
        <About />
        <Gallery />
        <Quote />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

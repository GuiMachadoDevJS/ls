import { SiteHeader } from '@/components/landing/site-header'
import { Hero } from '@/components/landing/hero'
import { Areas } from '@/components/landing/areas'
import { About } from '@/components/landing/about'
import { Portfolio } from '@/components/landing/portfolio'
import { SiteFooter } from '@/components/landing/site-footer'
import { WhatsAppFloat } from '@/components/landing/whatsapp-float'
import { ScrollToTop } from '@/components/landing/scroll-to-top'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-hidden bg-navy text-white">
        <Hero />
        <Areas />
        <About />
        <Portfolio />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
      <ScrollToTop />
    </>
  )
}

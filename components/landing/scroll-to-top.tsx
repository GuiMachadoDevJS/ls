'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 280)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Voltar ao topo da página"
      className={cn(
        'fixed bottom-22 right-5 z-40 flex size-12 items-center justify-center rounded-full border-2 border-gold bg-[#0c1b2e]/95 text-gold shadow-xl shadow-black/60 backdrop-blur transition-all duration-300 hover:border-gold hover:bg-gold hover:text-navy active:scale-90 active:bg-gold active:text-navy sm:bottom-28 sm:right-8 sm:size-13 lg:hidden',
        visible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-4 opacity-0 pointer-events-none',
      )}
    >
      <ArrowUp className="size-6" strokeWidth={2.5} />
    </button>
  )
}


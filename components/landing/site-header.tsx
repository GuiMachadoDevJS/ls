'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, WHATSAPP_URL } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('inicio')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const link of NAV_LINKS) {
      const el = document.getElementById(link.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <div className="mx-auto max-w-7xl rounded-xl border border-white/20 bg-[#142030]/80 shadow-2xl shadow-black/50 backdrop-blur-md">
        <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6">
          <a href="#inicio" className="group flex items-center gap-3" aria-label="LS Manutenção - Início">
            <span className="relative size-12 overflow-hidden rounded-full ring-1 ring-gold/50 shadow-[0_0_18px_rgba(212,175,55,0.35)]">
              <Image
                src="/logo.png"
                alt=""
                width={96}
                height={96}
                className="size-full scale-[1.35] object-cover"
                priority
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-brand text-gold text-lg font-bold tracking-[0.22em] sm:text-xl">
                MANUTENÇÃO
              </span>
              <span className="mt-1.5 flex items-center gap-2 text-[0.6rem] font-medium uppercase tracking-[0.35em] text-slate-300">
                <span className="h-px w-4 bg-gold/70" aria-hidden="true" />
                Industrial
              </span>
            </span>
          </a>

          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-3">
              {NAV_LINKS.map((link, i) => (
                <li key={link.id} className="flex items-center gap-3">
                  {i > 0 && (
                    <span className="text-gold/60" aria-hidden="true">
                      {'•'}
                    </span>
                  )}
                  <a
                    href={`#${link.id}`}
                    aria-current={active === link.id ? 'page' : undefined}
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-gold-light',
                      active === link.id ? 'text-gold' : 'text-slate-200',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hidden rounded-full px-5 py-2.5 text-sm font-bold text-navy shadow-lg shadow-gold/30 transition hover:shadow-gold/50 hover:brightness-110 sm:inline-flex"
            >
              Solicitar Orçamento
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              className="inline-flex size-10 items-center justify-center rounded-lg border border-gold/40 text-gold lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav
            id="mobile-nav"
            aria-label="Navegação móvel"
            className="animate-in fade-in slide-in-from-top-2 border-t border-white/10 px-4 pb-4 lg:hidden"
          >
            <ul className="flex flex-col pt-2">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block rounded-lg px-3 py-3 font-medium transition-colors hover:bg-white/5',
                      active === link.id ? 'text-gold' : 'text-slate-200',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold mt-3 flex justify-center rounded-full px-5 py-3 text-sm font-bold text-navy shadow-lg shadow-gold/30 sm:hidden"
            >
              Solicitar Orçamento
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}

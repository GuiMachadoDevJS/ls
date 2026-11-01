import Image from 'next/image'
import { Clock, MapPin, Phone } from 'lucide-react'
import { NAV_LINKS, WHATSAPP_DISPLAY, WHATSAPP_URL } from '@/lib/site'
import { WhatsAppIcon } from './whatsapp-icon'

export function SiteFooter() {
  return (
    <footer id="contato" className="relative bg-[#050c16]">
      <div className="bg-gold h-[3px]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-gold/60 bg-gradient-to-br from-[#142030] to-navy p-8 shadow-2xl shadow-black/60 sm:p-12">
          <div
            className="absolute -right-20 -top-20 size-64 rotate-45 border-2 border-gold/30"
            aria-hidden="true"
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl">
                Sua máquina parou? <span className="text-gold">A gente resolve.</span>
              </h2>
              <p className="mt-4 max-w-xl text-slate-300">
                Atendimento emergencial 24/7 e planos de manutenção preventiva para indústrias de
                todos os portes. Fale direto com o técnico responsável.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 font-bold text-navy shadow-xl shadow-gold/30 transition hover:-translate-y-0.5 hover:shadow-gold/50"
              >
                <WhatsAppIcon className="size-6" />
                {WHATSAPP_DISPLAY}
              </a>
              <p className="text-center text-sm text-slate-400 lg:text-right">
                Resposta rápida pelo WhatsApp
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-4">
              <span className="relative size-16 shrink-0 overflow-hidden rounded-full ring-1 ring-gold/50 shadow-[0_0_24px_rgba(212,175,55,0.35)]">
                <Image
                  src="/logo.png"
                  alt="Logo LS Manutenção"
                  width={128}
                  height={128}
                  className="size-full scale-[1.35] object-cover"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-brand text-gold text-xl font-bold tracking-[0.22em] sm:text-2xl">
                  LS MANUTENÇÃO
                </span>
                <span className="mt-2 flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-slate-300">
                  <span className="h-px w-5 bg-gold/70" aria-hidden="true" />
                  Industrial
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Manutenção industrial pesada com 30 anos de experiência em mecânica, elétrica,
              hidráulica, pneumática e soldas especiais.
            </p>
          </div>

          <nav aria-label="Rodapé">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">
              Navegação
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="text-sm text-slate-300 transition hover:text-gold-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-gold" aria-hidden="true" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light">
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="size-4 text-gold" aria-hidden="true" />
                Emergências 24 horas, 7 dias por semana
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-4 text-gold" aria-hidden="true" />
                São Paulo e região
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-slate-500 sm:px-8">
          {`© ${new Date().getFullYear()} LS Manutenção. Todos os direitos reservados.`}
        </p>
      </div>
    </footer>
  )
}

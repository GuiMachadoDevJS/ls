import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site'
import { WhatsAppIcon } from './whatsapp-icon'

const SPARKS = [
  { top: '14%', left: '12%', delay: '0s', size: 'size-1.5' },
  { top: '22%', left: '86%', delay: '0.6s', size: 'size-2' },
  { top: '38%', left: '6%', delay: '1.1s', size: 'size-1' },
  { top: '8%', left: '62%', delay: '1.6s', size: 'size-1' },
  { top: '48%', left: '93%', delay: '0.3s', size: 'size-1.5' },
  { top: '30%', left: '24%', delay: '1.9s', size: 'size-1' },
  { top: '18%', left: '74%', delay: '0.9s', size: 'size-1' },
]

function HeroEmblem({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div className={`relative aspect-square ${className ?? ''}`}>
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-[4%] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.28)_0%,rgba(212,175,55,0.06)_45%,transparent_70%)] blur-2xl" />
        <div className="animate-orbit absolute inset-[2%] rounded-full border border-dashed border-gold/40" />
        <div className="animate-orbit-reverse absolute inset-[9%] rounded-full border border-gold/25">
          <span
            className={`absolute left-1/2 -translate-x-1/2 rounded-full bg-gold-light shadow-[0_0_14px_4px_rgba(245,215,127,0.7)] ${compact ? '-top-1 size-2' : '-top-1.5 size-3'}`}
          />
          <span
            className={`absolute left-1/2 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_10px_3px_rgba(212,175,55,0.6)] ${compact ? '-bottom-0.5 size-1.5' : '-bottom-1 size-2'}`}
          />
        </div>
        <div className="absolute inset-[16%] rounded-full border border-white/10" />

        {SPARKS.map((s, i) => (
          <span
            key={i}
            className={`animate-spark absolute rounded-full bg-gold-light shadow-[0_0_10px_3px_rgba(245,215,127,0.8)] ${s.size}`}
            style={{ top: s.top, left: s.left, animationDelay: s.delay }}
          />
        ))}
      </div>

      <div className="animate-in fade-in zoom-in-90 absolute inset-[18%] overflow-hidden rounded-full shadow-[0_0_60px_rgba(212,175,55,0.35),0_30px_60px_rgba(0,0,0,0.6)] ring-2 ring-gold/70 duration-1000">
        <Image
          src="/perfil.png"
          alt="Responsável técnico da LS Manutenção com camisa polo da empresa"
          width={765}
          height={1024}
          priority
          sizes="(min-width: 1024px) 380px, 80vw"
          className="size-full object-cover object-[50%_12%]"
        />
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-gradient-to-b from-navy to-navy-2 pt-28 lg:pt-32"
    >
      <Image
        src="/bg-industrial.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover opacity-50"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy-2 to-transparent" />

      <div className="mx-auto grid max-w-7xl items-end gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-6">
        <div className="animate-in fade-in slide-in-from-bottom-6 pb-4 duration-1000 lg:pb-28">
          <h1 className="font-display text-[2rem] font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl xl:text-6xl">
            <span className="block">30 anos de experiência</span>
            <span className="text-gold block py-1">em manutenção industrial</span>
            <span className="block">de alto desempenho</span>
          </h1>

          {/* Foto no mobile: bem visível, centralizada e maior */}
          <div className="my-6 flex justify-center lg:hidden">
            <HeroEmblem className="w-56 sm:w-64" />
          </div>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
            Soluções completas e preventivas em mecânica, elétrica, hidráulica, pneumática e soldas
            especiais para manter sua operação em movimento.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-navy shadow-xl shadow-gold/30 transition hover:-translate-y-0.5 hover:shadow-gold/50"
            >
              <WhatsAppIcon className="size-5" />
              Fale Conosco via WhatsApp
            </a>
            <a
              href="#especialidades"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-gold/60 bg-navy/60 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:border-gold hover:bg-white/5"
            >
              Conhecer Serviços
              <ArrowRight className="size-4 text-gold transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <HeroEmblem className="mx-auto mb-16 hidden w-full max-w-lg self-center lg:block" />
      </div>
    </section>
  )
}

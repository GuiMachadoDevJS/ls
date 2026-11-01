import Image from 'next/image'
import { Cog, Gauge, Zap, type LucideIcon } from 'lucide-react'

type Area = {
  title: string
  icon: LucideIcon
  images: { src: string; alt: string }[]
  tags: string[]
}

const AREAS: Area[] = [
  {
    title: 'Mecânica e Ajustagem',
    icon: Cog,
    images: [
      { src: '/mecanica.png', alt: 'Ajuste de peça em torno mecânico' },
      { src: '/solda.png', alt: 'Solda em estrutura metálica com faíscas' },
    ],
    tags: [
      'Operação em Máquinas Operatrizes',
      'Alinhamento de Máquinas',
      'Soldas em Geral',
      'Manutenção Preventiva e Corretiva',
    ],
  },
  {
    title: 'Sistemas Hidráulicos & Pneumáticos',
    icon: Gauge,
    images: [
      { src: '/hidraulica.png', alt: 'Central hidráulica industrial com manômetros' },
      { src: '/cilindro.png', alt: 'Cilindros hidráulicos e pneumáticos' },
    ],
    tags: [
      'Bombas e Comandos Hidráulicos',
      'Válvulas e Cilindros',
      'Redes Pneumáticas',
      'Diagnóstico de Pressão',
    ],
  },
  {
    title: 'Instalações Elétricas',
    icon: Zap,
    images: [
      { src: '/eletrica.png', alt: 'Painel elétrico de comando aberto' },
      { src: '/motor.png', alt: 'Motor elétrico industrial em manutenção' },
    ],
    tags: [
      'Painéis de Comando',
      'Contatores e Disjuntores',
      'Motores Industriais',
      'Correção de Falhas',
    ],
  },
]

function MetalBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="bg-gold shrink-0 rounded-full p-[3px] shadow-lg shadow-black/60">
      <div className="bg-silver flex size-14 items-center justify-center rounded-full shadow-[inset_0_-4px_8px_rgba(0,0,0,0.45),inset_0_3px_6px_rgba(255,255,255,0.7)]">
        <Icon className="size-7 text-[#1c2026] drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]" strokeWidth={2.25} />
      </div>
    </div>
  )
}

function AreaCard({ area }: { area: Area }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-gold/60 bg-[#22272f]/70 p-5 shadow-xl shadow-black/40 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-2xl hover:shadow-gold/15 sm:p-6">
      <div className="flex items-center gap-4">
        <MetalBadge icon={area.icon} />
        <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
          Especialidade
        </p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {area.images.map((img) => (
          <div
            key={img.src}
            className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 180px, 45vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      <ul className="mt-5 flex flex-wrap gap-2">
        {area.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <h3 className="border-t border-gold/30 pt-5 font-display text-xl font-bold uppercase tracking-wide text-white">
          {area.title}
        </h3>
      </div>
    </article>
  )
}

function StatsBar() {
  return (
    <div className="mt-12 grid gap-6 rounded-xl border border-gold/60 bg-[#1c2128]/90 p-6 shadow-xl shadow-black/40 sm:grid-cols-3 sm:gap-0">
      <div className="flex items-center justify-center gap-3 sm:border-r sm:border-white/20">
        <span className="text-gold font-display text-5xl font-bold">30+</span>
        <span className="text-sm font-semibold uppercase tracking-wide text-slate-200">
          Anos de
          <br />
          Atuação
        </span>
      </div>
      <div className="flex items-center justify-center gap-3 border-t border-white/10 pt-6 sm:border-r sm:border-t-0 sm:border-white/20 sm:pt-0">
        <span className="text-gold font-display text-5xl font-bold">+150</span>
        <span className="text-sm font-semibold uppercase tracking-wide text-slate-200">
          Máquinas
          <br />
          Atendidas
        </span>
      </div>
      <div className="flex items-center justify-center border-t border-white/10 pt-6 text-center sm:border-t-0 sm:pt-0">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-200">
          Disponibilidade{' '}
          <span className="text-gold font-display text-3xl font-bold">24/7</span>
          <br />
          para Emergências
        </p>
      </div>
    </div>
  )
}

export function Areas() {
  return (
    <section id="especialidades" className="relative isolate py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 -skew-y-1 border-y-[3px] border-gold shadow-[0_0_30px_rgba(212,175,55,0.2)]">
        <div className="bg-brushed-steel absolute inset-y-1.5 inset-x-0 border-y border-gold/50" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            O que fazemos
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            Áreas de <span className="text-gold">Atuação</span>
          </h2>
          <div className="bg-gold mx-auto mt-5 h-1 w-20 rounded-full" aria-hidden="true" />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((area) => (
            <AreaCard key={area.title} area={area} />
          ))}
        </div>

        <StatsBar />
      </div>
    </section>
  )
}

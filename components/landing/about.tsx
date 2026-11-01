import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

const SKILLS = [
  'Mecânica Industrial',
  'Elétrica Industrial',
  'Hidráulica',
  'Pneumática',
  'Ajustagem Mecânica',
  'Operação em Máquinas Operatrizes',
  'Todos os Tipos de Solda',
  'Alinhamento de Máquinas',
  'Manutenção Corretiva',
  'Manutenção Preventiva',
  'Caldeiraria Industrial',
  'Serralheria Industrial',
]

export function About() {
  return (
    <section id="sobre" className="relative bg-navy-2 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto w-full max-w-md">
          <div
            className="absolute -inset-3 rounded-2xl border border-gold/40"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-gold/70 shadow-2xl shadow-black/60">
            <Image
              src="/desmontagem.png"
              alt="Redutor industrial desmontado sobre a bancada de manutenção"
              fill
              sizes="(min-width: 1024px) 448px, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-2 rounded-xl border border-gold/60 bg-[#142030]/95 px-5 py-4 shadow-xl backdrop-blur sm:-right-8">
            <p className="text-gold font-display text-4xl font-bold leading-none">30</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-300">
              Anos de oficina
              <br />e chão de fábrica
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Sobre</p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl">
            Uma trajetória construída <span className="text-gold">na prática</span>
          </h2>
          <blockquote className="mt-6 border-l-2 border-gold pl-5 text-pretty text-lg leading-relaxed text-slate-300">
            {'"'}Trabalho como mecânico na área de manutenção há 30 anos, com diversos tipos de
            máquinas, atuando com mecânica, elétrica, hidráulica, pneumática, ajustagem mecânica,
            operação em máquinas operatrizes, todos os tipos de solda e alinhamento de máquinas,
            fazendo manutenção corretiva e preventiva.{'"'}
          </blockquote>

          <h3 className="mt-10 font-display text-lg font-semibold uppercase tracking-wider text-white">
            Competências
          </h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {SKILLS.map((skill) => (
              <li
                key={skill}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-gold/50 hover:bg-white/[0.06]"
              >
                <CheckCircle2 className="size-5 shrink-0 text-gold" aria-hidden="true" />
                <span className="text-sm font-medium text-slate-100">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

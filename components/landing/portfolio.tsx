import Image from 'next/image'

const WORKS = [
  { src: '/eletrica.png', title: 'Painel de Comando', category: 'Elétrica', span: 'sm:col-span-2 sm:row-span-2' },
  { src: '/hidraulica.png', title: 'Unidade Hidráulica', category: 'Hidráulica', span: '' },
  { src: '/desmontagem.png', title: 'Desmontagem de Redutor', category: 'Mecânica', span: '' },
  { src: '/solda.png', title: 'Solda Estrutural', category: 'Soldas Especiais', span: '' },
  { src: '/alinhamento.png', title: 'Alinhamento a Laser', category: 'Alinhamento', span: '' },
  { src: '/motor.png', title: 'Revisão de Motor', category: 'Elétrica', span: 'sm:col-span-2' },
  { src: '/mecanica.png', title: 'Ajustagem em Torno', category: 'Usinagem', span: '' },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-navy py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Portfólio</p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
              Trabalhos <span className="text-gold">em campo</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-400">
            Registros reais de manutenções executadas em painéis elétricos, unidades hidráulicas e
            conjuntos mecânicos.
          </p>
        </div>

        <ul className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WORKS.map((work) => (
            <li
              key={work.title}
              className={`group relative overflow-hidden rounded-xl border border-white/10 transition hover:border-gold/70 ${work.span}`}
            >
              <Image
                src={work.src}
                alt={work.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                  {work.category}
                </p>
                <p className="mt-1 font-display text-lg font-bold uppercase text-white">{work.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

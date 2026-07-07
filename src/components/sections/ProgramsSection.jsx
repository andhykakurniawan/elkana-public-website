import { GraduationCap } from 'lucide-react'
import { programs } from '../../content'

export function ProgramsSection() {
  return (
    <section className="section-pad bg-[#fffcf4]">
      <div className="container-wide">
        <div className="max-w-3xl">
          <p className="eyebrow">Akademik</p>
          <h2 className="mt-4 text-3xl font-black text-elkana-ink sm:text-4xl">
            Jenjang belajar yang nyambung dari awal sampai siap melangkah.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program) => (
            <article key={program.level} className="rounded-lg border border-elkana-gold/30 bg-white p-6 transition hover:-translate-y-1 hover:shadow-soft">
              <GraduationCap className="text-elkana-pine" size={30} />
              <p className="mt-6 text-sm font-black uppercase tracking-[0.14em] text-elkana-sky">{program.level}</p>
              <h3 className="mt-3 text-xl font-black text-elkana-ink">{program.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{program.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

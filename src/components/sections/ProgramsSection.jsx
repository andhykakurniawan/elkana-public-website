import { GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { educationUnits } from '../../content'

export function ProgramsSection() {
  return (
    <section className="section-pad bg-[#f8f1e3]">
      <div className="container-wide">
        <div className="max-w-3xl">
          <p className="eyebrow">Unit Pendidikan</p>
          <h2 className="mt-4 text-3xl font-black text-elkana-ink sm:text-4xl">
            TK, SD, dan SMP dengan pendekatan yang disesuaikan setiap tahap usia.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {educationUnits.map((unit) => (
            <article key={unit.id} className="group rounded-lg border border-elkana-gold/25 bg-[#fbf7ee] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="flex items-center justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-md bg-elkana-mist text-elkana-pine transition group-hover:bg-elkana-gold group-hover:text-elkana-ink">
                  <GraduationCap size={28} />
                </div>
                <span className="rounded-full border border-elkana-gold/35 px-3 py-1 text-xs font-black text-elkana-pine">
                  {unit.level}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-black text-elkana-ink">{unit.name}</h3>
              <p className="mt-3 text-sm font-black text-elkana-pine">{unit.title}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{unit.text}</p>
              <Link to={unit.route} className="mt-6 inline-flex items-center font-black text-elkana-pine">
                Lihat {unit.level}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

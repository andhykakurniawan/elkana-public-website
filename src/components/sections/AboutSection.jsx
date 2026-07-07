import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profileIntro, values } from '../../content'

export function AboutSection({ compact = false }) {
  return (
    <section className="section-pad bg-elkana-mist">
      <div className="container-wide grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow">{profileIntro.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-elkana-ink sm:text-4xl">
            {profileIntro.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-700">{profileIntro.description}</p>
          {compact && (
            <Link to="/tentang" className="mt-7 inline-flex items-center gap-2 font-black text-elkana-pine">
              Baca selengkapnya <ArrowRight size={17} />
            </Link>
          )}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((value, index) => (
            <div key={value} className="rounded-lg bg-white p-5 shadow-sm">
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-md bg-elkana-pine text-white">
                {index + 1}
              </div>
              <p className="font-black text-elkana-ink">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

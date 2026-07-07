import { ArrowRight, CalendarDays } from 'lucide-react'
import { Link } from 'react-router-dom'
import { news } from '../../content'

export function NewsSection() {
  return (
    <section className="section-pad bg-elkana-mist">
      <div className="container-wide">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Berita</p>
            <h2 className="mt-4 text-3xl font-black text-elkana-ink sm:text-4xl">Kabar terbaru sekolah.</h2>
          </div>
          <Link to="/berita" className="inline-flex items-center gap-2 font-black text-elkana-pine">
            Semua berita <ArrowRight size={17} />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {news.map((item) => (
            <article key={item.title} className="rounded-lg border border-elkana-gold/30 bg-white p-6 shadow-sm">
              <span className="rounded-md bg-elkana-mist px-3 py-1 text-xs font-black text-elkana-ink">{item.category}</span>
              <h3 className="mt-5 text-xl font-black text-elkana-ink">{item.title}</h3>
              <p className="mt-2 flex items-center gap-2 text-sm font-bold text-slate-500">
                <CalendarDays size={16} /> {item.date}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

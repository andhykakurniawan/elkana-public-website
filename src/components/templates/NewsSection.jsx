import { ArrowRight, CalendarDays } from 'lucide-react'
import { Link } from 'react-router-dom'
import { news } from '../../content'

export function NewsSection({ items = news, showAllLink = true, title = 'Kabar terbaru sekolah.' }) {
  return (
    <section className="section-pad bg-elkana-mist">
      <div className="container-wide">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Berita</p>
            <h2 className="mt-4 text-3xl font-black text-elkana-ink sm:text-4xl">{title}</h2>
          </div>
          {showAllLink && (
            <Link to="/berita" className="inline-flex items-center gap-2 font-black text-elkana-pine">
              Semua berita <ArrowRight size={17} />
            </Link>
          )}
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="rounded-lg border border-elkana-gold/25 bg-[#fbf7ee] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <span className="rounded-full bg-elkana-ink px-3 py-1 text-xs font-black text-elkana-gold">{item.category || 'Berita'}</span>
              <h3 className="mt-5 text-xl font-black text-elkana-ink">{item.title}</h3>
              <p className="mt-2 flex items-center gap-2 text-sm font-bold text-slate-500">
                <CalendarDays size={16} /> {item.date}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.excerpt || item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

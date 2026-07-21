import { ArrowRight, CalendarDays } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Shell } from '../../components/layout/Shell'
import { Seo } from '../../components/ui/Seo'
import { usePublicHomeContent, usePublicNewsContent } from '../../hooks/usePublicContent'

export function NewsPage() {
  const { data: homeContent } = usePublicHomeContent()
  const { data: news } = usePublicNewsContent()
  const { educationUnits, gallery } = homeContent

  return (
    <Shell>
      <Seo title="Berita" description="Berita dan agenda terbaru YPK Elkana." />
      <main className="bg-[#fbf9ff]">
        <section className="relative overflow-hidden bg-white">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-bl from-purple-100 via-violet-50 to-transparent" />
          <div className="container-wide relative px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
            <p className="mb-3 text-sm font-black uppercase tracking-wide text-amber-500">Berita & Kegiatan</p>
            <h1 className="max-w-3xl text-4xl font-black leading-tight text-purple-950 md:text-5xl lg:text-6xl">
              Update kegiatan yayasan dan unit pendidikan Elkana.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Ikuti kabar terbaru dari YPK Elkana, TK, SD, dan SMP Kristen Elkana.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {educationUnits.map((unit) => (
                <Link key={unit.id} to={unit.newsRoute} className="rounded-xl border border-purple-100 bg-white px-5 py-3 text-sm font-black text-purple-800 shadow-sm hover:bg-purple-50">
                  Berita {unit.level}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="container-wide px-5 py-10 sm:px-8 lg:px-12">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {news.map((item, index) => (
              <article key={item.title} className="overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <img src={item.image || gallery[index % gallery.length]?.src || '/images/hero/yayasan-hero.png'} alt={item.title} className="h-52 w-full object-cover" />
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-xl bg-purple-600 px-3 py-2 text-center text-sm font-black text-white">{item.category || 'Berita'}</span>
                    <span className="inline-flex items-center gap-2 text-xs font-bold text-slate-500"><CalendarDays size={15} />{item.date}</span>
                  </div>
                  <h2 className="text-xl font-black leading-snug text-purple-950">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.excerpt || item.summary}</p>
                  <Link to={item.unit && item.unit !== 'yayasan' ? `/berita/${item.unit}` : '/berita'} className="mt-5 inline-flex items-center gap-2 text-sm font-black text-purple-700">
                    Selengkapnya <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Shell>
  )
}

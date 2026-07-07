import { ArrowRight, BookOpen, Building2, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Shell } from '../components/layout/Shell'
import { NewsSection } from '../components/sections/NewsSection'
import { Seo } from '../components/ui/Seo'
import { news } from '../content'

const variantStyles = {
  soft: {
    hero: 'lg:grid-cols-[0.9fr_1.1fr]',
    panel: 'bg-[#fbf7ee]',
    accent: 'bg-elkana-mist',
  },
  classic: {
    hero: 'lg:grid-cols-[1.05fr_0.95fr]',
    panel: 'bg-white',
    accent: 'bg-[#f8f1e3]',
  },
  bold: {
    hero: 'lg:grid-cols-[1.15fr_0.85fr]',
    panel: 'bg-elkana-ink text-white',
    accent: 'bg-elkana-ink text-white',
  },
}

export function UnitPage({ unit }) {
  const styles = variantStyles[unit.variant] || variantStyles.classic
  const unitNews = news.filter((item) => item.unit === unit.id)

  return (
    <Shell>
      <Seo title={unit.name} description={unit.intro} />

      <section className="relative overflow-hidden bg-elkana-ink text-white">
        <img src={unit.heroImage} alt={unit.name} className="absolute inset-0 h-full w-full object-cover opacity-38" />
        <div className="absolute inset-0 bg-gradient-to-r from-elkana-ink via-elkana-ink/82 to-elkana-ink/38" />
        <div className={`container-wide relative grid gap-10 px-5 py-20 sm:px-8 lg:px-12 lg:py-28 ${styles.hero}`}>
          <div>
            <p className="inline-flex rounded-full border border-elkana-gold/35 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-elkana-gold">
              Unit Pendidikan
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">{unit.name}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">{unit.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/ppdb" className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-elkana-gold px-6 py-3 font-black text-elkana-ink">
                Daftar PPDB <ArrowRight size={18} />
              </Link>
              <Link to={unit.newsRoute} className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-3 font-black text-white">
                Berita {unit.level}
              </Link>
            </div>
          </div>

          <div className={`rounded-lg border border-elkana-gold/25 p-6 shadow-soft ${styles.panel}`}>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-elkana-gold">Fokus Pembelajaran</p>
            <h2 className="mt-3 text-2xl font-black">{unit.title}</h2>
            <p className={`mt-4 leading-7 ${unit.variant === 'bold' ? 'text-white/72' : 'text-slate-600'}`}>{unit.text}</p>
            <div className="mt-6 grid gap-3">
              {unit.highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-elkana-gold" size={19} />
                  <span className="text-sm font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#f8f1e3]">
        <div className="container-wide grid gap-6 lg:grid-cols-2">
          <UnitListCard icon={<BookOpen />} title={`Program ${unit.level}`} items={unit.programs} />
          <UnitListCard icon={<Building2 />} title={`Fasilitas ${unit.level}`} items={unit.facilities} />
        </div>
      </section>

      <NewsSection
        items={unitNews.length ? unitNews : news.filter((item) => item.unit === 'yayasan')}
        showAllLink={false}
        title={`Kabar terbaru ${unit.name}.`}
      />
    </Shell>
  )
}

function UnitListCard({ icon, title, items }) {
  return (
    <div className="rounded-lg border border-elkana-gold/25 bg-[#fbf7ee] p-6 shadow-sm">
      <div className="grid h-12 w-12 place-items-center rounded-md bg-elkana-ink text-elkana-gold">{icon}</div>
      <h2 className="mt-5 text-2xl font-black text-elkana-ink">{title}</h2>
      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <div key={item} className="rounded-md border border-elkana-gold/20 bg-white/60 px-4 py-3 text-sm font-bold text-slate-700">
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

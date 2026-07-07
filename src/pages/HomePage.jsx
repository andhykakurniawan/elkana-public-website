import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Shell } from '../components/layout/Shell'
import { AboutSection } from '../components/sections/AboutSection'
import { NewsSection } from '../components/sections/NewsSection'
import { ProgramsSection } from '../components/sections/ProgramsSection'
import { Seo } from '../components/ui/Seo'
import { homeHero, stats } from '../content'

export function HomePage() {
  return (
    <Shell>
      <Seo description="Profil resmi YPK Elkana: informasi sekolah, program akademik, PPDB, berita, galeri, dan kontak." />
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
        <img src={homeHero.image} alt="Siswa belajar di ruang kelas" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-elkana-ink/90 via-elkana-ink/62 to-elkana-ink/15" />
        <div className="container-wide relative flex min-h-[calc(100vh-5rem)] items-center px-5 pb-20 pt-14 sm:px-8 lg:px-12">
          <div className="max-w-3xl text-white">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-elkana-gold">{homeHero.eyebrow}</p>
            <h1 className="mt-5 text-4xl font-black leading-[1.05] sm:text-6xl lg:text-7xl">{homeHero.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/86 sm:text-xl">{homeHero.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-elkana-gold px-6 py-3 font-black text-elkana-ink" to={homeHero.primaryAction.path}>
                {homeHero.primaryAction.label} <ArrowRight size={18} />
              </Link>
              <Link className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-white/50 px-6 py-3 font-black text-white backdrop-blur hover:bg-white/10" to={homeHero.secondaryAction.path}>
                {homeHero.secondaryAction.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#fffcf4]">
        <div className="container-wide grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-lg border border-elkana-gold/30 bg-white p-6 shadow-sm">
              <p className="text-4xl font-black text-elkana-pine">{item.value}</p>
              <p className="mt-2 text-sm font-bold text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <AboutSection compact />
      <ProgramsSection />
      <NewsSection />
    </Shell>
  )
}

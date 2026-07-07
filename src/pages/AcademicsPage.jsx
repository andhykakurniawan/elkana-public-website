import { BookOpen } from 'lucide-react'
import { Shell } from '../components/layout/Shell'
import { ProgramsSection } from '../components/sections/ProgramsSection'
import { InfoBlock } from '../components/ui/InfoBlock'
import { PageHero } from '../components/ui/PageHero'
import { Seo } from '../components/ui/Seo'

const academicHighlights = ['Pembelajaran proyek', 'Pembinaan rohani', 'Ekstrakurikuler']

export function AcademicsPage() {
  return (
    <Shell>
      <Seo title="Akademik" description="Program akademik dan jenjang pendidikan YPK Elkana." />
      <PageHero title="Program Akademik" text="Kurikulum dirancang untuk kuat di dasar, adaptif di metode, dan relevan untuk masa depan." icon={<BookOpen />} />
      <ProgramsSection />
      <section className="section-pad bg-elkana-mist">
        <div className="container-wide grid gap-6 md:grid-cols-3">
          {academicHighlights.map((title) => (
            <InfoBlock key={title} title={title} text="Setiap aktivitas punya arah: membentuk kebiasaan belajar, kemampuan komunikasi, daya juang, dan kepedulian." />
          ))}
        </div>
      </section>
    </Shell>
  )
}

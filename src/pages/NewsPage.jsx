import { CalendarDays } from 'lucide-react'
import { Shell } from '../components/layout/Shell'
import { NewsSection } from '../components/sections/NewsSection'
import { PageHero } from '../components/ui/PageHero'
import { Seo } from '../components/ui/Seo'

export function NewsPage() {
  return (
    <Shell>
      <Seo title="Berita" description="Berita dan agenda terbaru YPK Elkana." />
      <PageHero title="Berita & Agenda" text="Ruang update untuk kegiatan akademik, kesiswaan, komunitas, dan pelayanan sekolah." icon={<CalendarDays />} />
      <NewsSection />
    </Shell>
  )
}

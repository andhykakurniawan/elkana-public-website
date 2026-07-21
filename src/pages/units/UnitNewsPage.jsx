import { CalendarDays } from 'lucide-react'
import { Shell } from '../../components/layout/Shell'
import { NewsSection } from '../../components/templates/NewsSection'
import { PageHero } from '../../components/ui/PageHero'
import { Seo } from '../../components/ui/Seo'
import { usePublicUnitNewsContent } from '../../hooks/usePublicContent'

export function UnitNewsPage({ unit }) {
  const { data: unitNews } = usePublicUnitNewsContent(unit.id)

  return (
    <Shell>
      <Seo title={`Berita ${unit.level}`} description={`Berita dan kegiatan ${unit.name}.`} />
      <PageHero title={`Berita ${unit.name}`} text={`Ruang update khusus kegiatan dan agenda ${unit.name}.`} icon={<CalendarDays />} />
      <NewsSection items={unitNews} showAllLink={false} title={`Kabar ${unit.level} Elkana.`} />
    </Shell>
  )
}

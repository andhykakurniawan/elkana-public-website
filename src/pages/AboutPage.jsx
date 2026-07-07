import { Sparkles } from 'lucide-react'
import { Shell } from '../components/layout/Shell'
import { AboutSection } from '../components/sections/AboutSection'
import { TeachersSection } from '../components/sections/TeachersSection'
import { InfoBlock } from '../components/ui/InfoBlock'
import { PageHero } from '../components/ui/PageHero'
import { Seo } from '../components/ui/Seo'
import { visionMission } from '../content'

export function AboutPage() {
  return (
    <Shell>
      <Seo title="Tentang" description="Visi, misi, nilai, dan profil Yayasan Pendidikan Kristen Elkana." />
      <PageHero title="Tentang YPK Elkana" text="Sekolah sebagai rumah bertumbuh: tertib, hangat, dan berani menyiapkan anak untuk dunia yang terus berubah." icon={<Sparkles />} />
      <AboutSection />
      <section className="section-pad bg-[#fffcf4]">
        <div className="container-wide grid gap-8 lg:grid-cols-2">
          <InfoBlock title="Visi" text={visionMission.vision} />
          <InfoBlock title="Misi" text={visionMission.mission} />
        </div>
      </section>
      <TeachersSection />
    </Shell>
  )
}

import { Sparkles } from 'lucide-react'
import { Shell } from '../components/layout/Shell'
import { PageHero } from '../components/ui/PageHero'
import { Seo } from '../components/ui/Seo'
import { gallery } from '../content'

export function GalleryPage() {
  return (
    <Shell>
      <Seo title="Galeri" description="Galeri kegiatan dan lingkungan belajar YPK Elkana." />
      <PageHero title="Galeri Sekolah" text="Potret kegiatan belajar, kolaborasi, eksplorasi, dan kehidupan kampus." icon={<Sparkles />} />
      <section className="section-pad bg-[#f8f1e3]">
        <div className="container-wide grid gap-5 sm:grid-cols-2">
          {gallery.map((item) => (
            <figure key={item.title} className="overflow-hidden rounded-lg border border-elkana-gold/30 bg-white shadow-sm">
              <img src={item.src} alt={item.title} className="h-72 w-full object-cover" />
              <figcaption className="p-5 font-black text-elkana-ink">{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </Shell>
  )
}

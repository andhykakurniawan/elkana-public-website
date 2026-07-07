import { Music2 } from 'lucide-react'
import { anthem } from '../../content'

const playerUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
  anthem.soundCloudUrl,
)}&color=%23d4af37&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true`

export function AnthemSection() {
  return (
    <section className="section-pad bg-elkana-ink text-white">
      <div className="container-wide grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <div className="grid h-12 w-12 place-items-center rounded-md bg-elkana-gold text-elkana-ink">
            <Music2 size={24} />
          </div>
          <p className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-elkana-gold">Lagu Sekolah</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">{anthem.title}</h2>
          <p className="mt-4 leading-8 text-white/75">{anthem.description}</p>
        </div>

        <div className="overflow-hidden rounded-lg border border-elkana-gold/30 bg-white p-2 shadow-glow">
          <iframe
            title={anthem.title}
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={playerUrl}
          />
        </div>
      </div>
    </section>
  )
}

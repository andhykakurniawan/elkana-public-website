import { Music2 } from 'lucide-react'
import { anthem } from '../../content'

const playerUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
  anthem.soundCloudUrl,
)}&color=%23d4af37&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true`

export function AnthemSection() {
  return (
    <section className="px-5 py-8 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-2xl bg-gradient-to-r from-purple-950 via-purple-900 to-violet-800 p-6 text-white shadow-xl shadow-purple-200 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-8">
        <div>
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-amber-400 text-purple-950 shadow-lg shadow-amber-500/20">
            <Music2 size={24} />
          </div>
          <p className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-amber-300">Lagu Sekolah</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">{anthem.title}</h2>
          <p className="mt-4 leading-8 text-purple-50">{anthem.description}</p>
        </div>

        <div className="overflow-hidden rounded-xl border border-amber-300/30 bg-white p-2 shadow-2xl shadow-purple-950/30">
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

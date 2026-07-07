import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Cta() {
  return (
    <section className="section-pad bg-elkana-pine text-white">
      <div className="container-wide flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-elkana-gold">Siap berkunjung?</p>
          <h2 className="mt-3 text-3xl font-black">Jadwalkan konsultasi PPDB.</h2>
        </div>
        <Link to="/kontak" className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-black text-elkana-pine">
          Hubungi Sekolah <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  )
}

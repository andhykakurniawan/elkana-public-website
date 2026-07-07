import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Shell } from '../components/layout/Shell'
import { Seo } from '../components/ui/Seo'

export function NotFoundPage() {
  return (
    <Shell>
      <Seo title="Halaman Tidak Ditemukan" />
      <section className="section-pad bg-[#f8f1e3]">
        <div className="container-wide text-center">
          <h1 className="text-4xl font-black text-elkana-ink">404</h1>
          <p className="mt-3 text-slate-600">Halaman tidak ditemukan.</p>
          <Link to="/" className="mt-6 inline-flex items-center gap-2 font-black text-elkana-pine">
            Kembali ke beranda <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </Shell>
  )
}

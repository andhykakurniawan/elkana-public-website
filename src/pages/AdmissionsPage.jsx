import { Users } from 'lucide-react'
import { Shell } from '../components/layout/Shell'
import { Cta } from '../components/ui/Cta'
import { PageHero } from '../components/ui/PageHero'
import { Seo } from '../components/ui/Seo'
import { admissionsSteps } from '../content'

export function AdmissionsPage() {
  return (
    <Shell>
      <Seo title="PPDB" description="Informasi penerimaan peserta didik baru YPK Elkana." />
      <PageHero title="PPDB YPK Elkana" text="Proses pendaftaran dibuat jelas, ramah keluarga, dan transparan dari konsultasi sampai orientasi." icon={<Users />} />
      <section className="section-pad bg-[#fffcf4]">
        <div className="container-wide grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Alur Pendaftaran</p>
            <h2 className="mt-4 text-3xl font-black text-elkana-ink">Empat langkah, no drama.</h2>
            <p className="mt-5 leading-8 text-slate-700">Tim sekolah akan membantu keluarga memilih jenjang, menyiapkan dokumen, dan memahami kesiapan belajar calon siswa.</p>
          </div>
          <div className="grid gap-4">
            {admissionsSteps.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-lg border border-elkana-gold/30 bg-white p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-elkana-pine font-black text-white">{index + 1}</span>
                <p className="font-bold leading-7 text-elkana-ink">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </Shell>
  )
}

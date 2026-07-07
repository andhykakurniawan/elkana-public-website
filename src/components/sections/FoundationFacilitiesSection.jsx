import { Building2, Library, ShieldCheck } from 'lucide-react'

const facilities = [
  {
    title: 'Lingkungan Belajar',
    text: 'Ruang kelas, area aktivitas, dan lingkungan sekolah yang mendukung kegiatan TK, SD, dan SMP.',
    icon: Building2,
  },
  {
    title: 'Literasi & Kegiatan',
    text: 'Ruang baca, kegiatan proyek, dan aktivitas pendukung untuk menguatkan kebiasaan belajar siswa.',
    icon: Library,
  },
  {
    title: 'Pendampingan Karakter',
    text: 'Pembinaan rohani, kedisiplinan positif, konseling, dan budaya sekolah yang aman.',
    icon: ShieldCheck,
  },
]

export function FoundationFacilitiesSection() {
  return (
    <section className="section-pad bg-[#f8f1e3]">
      <div className="container-wide">
        <div className="max-w-3xl">
          <p className="eyebrow">Fasilitas</p>
          <h2 className="mt-4 text-3xl font-black text-elkana-ink sm:text-4xl">
            Fasilitas yayasan yang mendukung proses belajar lintas unit.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {facilities.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="rounded-lg border border-elkana-gold/25 bg-[#fbf7ee] p-6 shadow-sm">
                <div className="grid h-12 w-12 place-items-center rounded-md bg-elkana-ink text-elkana-gold">
                  <Icon size={25} />
                </div>
                <h3 className="mt-5 text-xl font-black text-elkana-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

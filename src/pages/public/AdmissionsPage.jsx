import { ArrowRight, CheckCircle2, ClipboardList, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Shell } from '../../components/layout/Shell'
import { Seo } from '../../components/ui/Seo'
import { admissionsSteps, educationUnits, school } from '../../content'

export function AdmissionsPage() {
  return (
    <Shell>
      <Seo title="PPDB" description="Informasi penerimaan peserta didik baru YPK Elkana." />
      <main className="bg-[#fbf9ff]">
        <section className="relative overflow-hidden bg-gradient-to-r from-purple-950 via-purple-800 to-violet-800 text-white">
          <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-white/10" />
          <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/10" />
          <div className="container-wide relative grid gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:px-12 lg:py-20">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-wide text-amber-300">Penerimaan Peserta Didik Baru</p>
              <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-5xl lg:text-6xl">PPDB YPK Elkana Tahun Ajaran 2026/2027</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-purple-50">Daftarkan putra-putri Anda ke TK, SD, atau SMP Kristen Elkana melalui alur pendaftaran yang jelas dan ramah keluarga.</p>
              <div className="mt-7 flex flex-wrap gap-4 text-sm font-bold text-purple-50">
                <span className="inline-flex items-center gap-2"><CheckCircle2 className="text-amber-300" size={18} />TK, SD, SMP</span>
                <span className="inline-flex items-center gap-2"><CheckCircle2 className="text-amber-300" size={18} />Konsultasi program</span>
                <span className="inline-flex items-center gap-2"><CheckCircle2 className="text-amber-300" size={18} />Tempat terbatas</span>
              </div>
            </div>
            <div className="rounded-[2rem] bg-white p-6 text-purple-950 shadow-xl">
              <ClipboardList className="text-amber-500" size={56} />
              <h2 className="mt-5 text-2xl font-black">Mulai Pendaftaran</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">Hubungi tim administrasi untuk jadwal kunjungan sekolah dan konsultasi jenjang.</p>
              <Link to="/kontak" className="mt-6 inline-flex items-center gap-3 rounded-xl bg-amber-400 px-6 py-3 text-sm font-black text-purple-950">
                Hubungi Sekolah <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        <section className="container-wide grid gap-6 px-5 py-10 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-amber-500">Alur Pendaftaran</p>
            <h2 className="mt-3 text-3xl font-black text-purple-950">Empat langkah sederhana.</h2>
            <p className="mt-4 leading-7 text-slate-600">Pihak sekolah akan membantu keluarga memilih unit pendidikan dan memahami kesiapan belajar calon siswa.</p>
          </div>
          <div className="grid gap-4">
            {admissionsSteps.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-purple-700 font-black text-white">{index + 1}</span>
                <p className="font-bold leading-7 text-purple-950">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container-wide px-5 pb-12 sm:px-8 lg:px-12">
          <h2 className="mb-5 text-2xl font-black text-purple-900">Pilih Unit Pendidikan</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {educationUnits.map((unit) => (
              <article key={unit.id} className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm">
                <Users className="text-purple-700" size={34} />
                <h3 className="mt-4 text-xl font-black text-purple-950">{unit.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{unit.intro}</p>
                <Link to={unit.route} className="mt-5 inline-flex items-center gap-2 text-sm font-black text-purple-700">Lihat Unit <ArrowRight size={15} /></Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Shell>
  )
}

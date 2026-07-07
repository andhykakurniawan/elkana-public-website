import { ArrowRight, Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Shell } from '../../components/layout/Shell'
import { Seo } from '../../components/ui/Seo'
import { school } from '../../content'

const contacts = [
  { title: 'Alamat', text: school.address, icon: MapPin },
  { title: 'Telepon', text: school.phone, icon: Phone },
  { title: 'Email', text: school.email, icon: Mail },
  { title: 'Jam Layanan', text: school.hours, icon: Clock },
]

export function ContactPage() {
  return (
    <Shell>
      <Seo title="Kontak" description="Alamat, kontak, dan jam layanan YPK Elkana." />
      <main className="bg-[#fbf9ff]">
        <section className="relative overflow-hidden bg-white">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-bl from-purple-100 via-violet-50 to-transparent" />
          <div className="container-wide relative px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
            <p className="mb-3 text-sm font-black uppercase tracking-wide text-amber-500">Kontak Kami</p>
            <h1 className="max-w-3xl text-4xl font-black leading-tight text-purple-950 md:text-5xl lg:text-6xl">Mari terhubung dengan YPK Elkana.</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">Butuh informasi sekolah, kunjungan kampus, atau konsultasi PPDB? Tim kami siap membantu.</p>
          </div>
        </section>

        <section className="container-wide grid gap-6 px-5 py-10 sm:px-8 lg:grid-cols-4 lg:px-12">
          {contacts.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                  <Icon size={24} />
                </div>
                <h2 className="mt-4 text-lg font-black text-purple-950">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            )
          })}
        </section>

        <section className="container-wide grid gap-8 px-5 pb-12 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div className="rounded-[2rem] bg-gradient-to-br from-purple-950 via-purple-800 to-violet-800 p-7 text-white shadow-xl shadow-purple-200">
            <MessageCircle className="text-amber-300" size={44} />
            <h2 className="mt-5 text-3xl font-black">Konsultasi PPDB</h2>
            <p className="mt-4 leading-7 text-purple-50">Tanyakan informasi unit TK, SD, SMP, jadwal kunjungan, dan proses pendaftaran.</p>
            <a href={`tel:${school.phone}`} className="mt-7 inline-flex items-center gap-3 rounded-xl bg-amber-400 px-6 py-3 text-sm font-black text-purple-950">
              Hubungi Sekarang <ArrowRight size={17} />
            </a>
          </div>

          <form className="rounded-[2rem] border border-purple-100 bg-white p-7 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nama" />
              <Field label="Email" type="email" />
              <Field label="Nomor WhatsApp" />
              <Field label="Jenjang diminati" />
            </div>
            <label className="mt-4 block">
              <span className="text-sm font-black text-purple-950">Pesan</span>
              <textarea className="mt-2 min-h-32 w-full rounded-xl border border-purple-100 px-4 py-3 outline-none transition focus:border-purple-500" />
            </label>
            <button type="button" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-purple-800 px-6 py-3 text-sm font-black text-white shadow-lg shadow-purple-200">
              Kirim Pesan <ArrowRight size={17} />
            </button>
          </form>
        </section>
      </main>
    </Shell>
  )
}

function Field({ label, type = 'text' }) {
  return (
    <label className="block">
      <span className="text-sm font-black text-purple-950">{label}</span>
      <input type={type} className="mt-2 w-full rounded-xl border border-purple-100 px-4 py-3 outline-none transition focus:border-purple-500" />
    </label>
  )
}

import {
  ArrowRight,
  Baby,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Cross,
  Heart,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Music,
  Palette,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../../components/ui/Seo'
import { gallery, news, school, unitsById } from '../../content'

const tk = unitsById.tk

const features = [
  {
    title: 'Belajar Sambil Bermain',
    desc: 'Aktivitas menyenangkan untuk membangun rasa ingin tahu.',
    icon: Palette,
    color: 'text-amber-500',
  },
  {
    title: 'Pembentukan Karakter Kristiani',
    desc: 'Menanamkan nilai iman, kasih, jujur, disiplin, dan tanggung jawab.',
    icon: Heart,
    color: 'text-pink-500',
  },
  {
    title: 'Guru Penyayang',
    desc: 'Guru profesional yang sabar, mengasihi, dan memahami anak.',
    icon: Users,
    color: 'text-purple-600',
  },
  {
    title: 'Lingkungan Aman & Nyaman',
    desc: 'Fasilitas bersih, aman, dan mendukung tumbuh kembang.',
    icon: ShieldCheck,
    color: 'text-violet-600',
  },
]

const programs = [
  {
    title: 'Bermain Kreatif',
    desc: 'Mengembangkan imajinasi dan kreativitas melalui seni, balok, dan permainan tematik.',
    icon: Palette,
    bg: 'from-amber-100 to-orange-50',
  },
  {
    title: 'Literasi Awal',
    desc: 'Mengenal huruf, suara, dan cerita untuk menumbuhkan kecintaan membaca.',
    icon: BookOpen,
    bg: 'from-purple-100 to-violet-50',
  },
  {
    title: 'Motorik & Seni',
    desc: 'Mengasah motorik halus dan kasar serta mengekspresikan diri melalui seni dan musik.',
    icon: Music,
    bg: 'from-rose-100 to-pink-50',
  },
  {
    title: 'Pembiasaan Mandiri',
    desc: 'Melatih anak untuk mandiri, disiplin, dan bertanggung jawab dalam kehidupan sehari-hari.',
    icon: Baby,
    bg: 'from-emerald-100 to-green-50',
  },
]

const activities = [
  { title: 'Kreasi & Seni', image: gallery[0]?.src, icon: Palette },
  { title: 'Musik & Gerak', image: gallery[1]?.src, icon: Music },
  { title: 'Bercerita', image: gallery[2]?.src, icon: BookOpen },
  { title: 'Bermain Outdoor', image: gallery[3]?.src, icon: Sun },
  { title: 'Ibadah & Doa', image: tk.heroImage, icon: Cross },
]

const tkNews = news.filter((item) => item.unit === 'tk')
const fallbackNews = tkNews.length ? tkNews : news.slice(0, 4)

export function TKHomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbf8ff] text-slate-800">
      <Seo title={tk.name} description={tk.intro} />
      <Navbar />
      <Hero />
      <FeatureStrip />
      <Programs />
      <ActivitiesAndTestimonial />
      <NewsSection />
      <PPDBBanner />
      <Footer />
    </main>
  )
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-purple-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo-elkana.png" alt={tk.name} className="h-12 w-12 object-contain" />
          <div>
            <h1 className="font-heading text-2xl font-black tracking-tight text-purple-900">{tk.name}</h1>
            <p className="-mt-1 text-xs font-medium text-slate-500">Yayasan Pendidikan Kristen Elkana</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 text-sm font-bold text-slate-700 lg:flex">
          <a href="#beranda" className="text-purple-800 underline decoration-purple-700 decoration-2 underline-offset-[14px]">Beranda</a>
          <a href="#profil" className="flex items-center gap-1 hover:text-purple-700">Profil <ChevronDown size={15} /></a>
          <a href="#program" className="hover:text-purple-700">Program</a>
          <a href="#kegiatan" className="hover:text-purple-700">Kegiatan</a>
          <a href="#galeri" className="hover:text-purple-700">Galeri</a>
          <a href="#ppdb" className="hover:text-purple-700">PPDB</a>
          <a href="#kontak" className="hover:text-purple-700">Kontak</a>
        </nav>

        <Link to="/ppdb" className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-purple-800 to-violet-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-purple-300/40 transition hover:scale-[1.02] lg:inline-flex">
          <Users size={18} />
          Daftar PPDB
        </Link>

        <button className="rounded-xl border border-purple-100 p-2 text-purple-800 lg:hidden" aria-label="Buka navigasi">
          <Menu />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="beranda" className="relative min-h-[610px] overflow-hidden bg-white">
      <img src={tk.heroImage} alt="Anak-anak TK Kristen Elkana belajar sambil bermain" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/5" />
      <div className="absolute inset-y-0 left-0 w-1/2 bg-white/35 blur-3xl" />
      <Decorations />

      <div className="relative mx-auto flex min-h-[610px] max-w-7xl items-center px-5 py-12 lg:px-8">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-xl bg-purple-700 px-5 py-2 text-xl font-black text-white shadow-lg shadow-purple-200">
            TK
          </div>

          <h2 className="text-4xl font-black leading-tight text-[#31203f] md:text-5xl lg:text-[3.35rem]">
            Tumbuh Gembira, <span className="text-purple-600">Belajar Bermakna,</span> Berkarakter Kristiani
          </h2>

          <p className="mt-5 max-w-xl text-base font-medium leading-7 text-slate-600">
            Di TK Kristen Elkana, setiap anak dikasihi, dihargai, dan dibimbing untuk bertumbuh sesuai dengan rencana Tuhan melalui pembelajaran yang menyenangkan dan penuh makna.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#profil" className="inline-flex items-center gap-3 rounded-xl bg-purple-800 px-7 py-3 text-sm font-black text-white shadow-xl shadow-purple-300/40 transition hover:-translate-y-0.5">
              Kenal Lebih Dekat <ArrowRight size={18} />
            </a>
            <Link to="/ppdb" className="inline-flex items-center gap-3 rounded-xl border-2 border-purple-600 bg-white px-7 py-3 text-sm font-black text-purple-800 transition hover:bg-purple-50">
              Daftar Sekarang <Users size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function Decorations() {
  return (
    <>
      <Star className="absolute left-14 top-20 text-amber-400" size={18} />
      <Sparkles className="absolute left-28 top-32 text-pink-400" size={26} />
      <Sparkles className="absolute right-36 top-28 text-purple-300" size={24} />
      <div className="absolute left-10 top-56 h-36 w-36 rounded-full bg-purple-100 blur-3xl" />
      <div className="absolute right-10 top-40 h-44 w-44 rounded-full bg-yellow-100 blur-3xl" />
      <div className="absolute left-[40%] top-14 text-4xl">✦</div>
      <div className="absolute left-[6%] top-[42%] text-5xl text-amber-300">✧</div>
    </>
  )
}

function ChurchIllustration() {
  return (
    <div className="relative h-28 w-28">
      <div className="absolute left-10 top-0 h-7 w-2 rounded bg-purple-700" />
      <div className="absolute left-7 top-5 h-2 w-8 rounded bg-purple-700" />
      <div className="absolute left-5 top-9 h-16 w-20 rounded-t-3xl border-4 border-purple-300 bg-yellow-100" />
      <div className="absolute left-11 top-[68px] h-9 w-8 rounded-t-full bg-purple-600" />
      <div className="absolute left-12 top-12 h-5 w-5 rounded-full bg-blue-100" />
    </div>
  )
}

function FeatureStrip() {
  return (
    <section id="profil" className="relative z-20 -mt-10 px-5 lg:px-8">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-xl shadow-purple-100/70 md:grid-cols-2 lg:grid-cols-4">
        {features.map((item, index) => {
          const Icon = item.icon
          return (
            <div key={item.title} className={`flex items-center gap-4 px-6 py-5 ${index !== features.length - 1 ? 'lg:border-r lg:border-purple-100' : ''}`}>
              <Icon className={item.color} size={42} />
              <div>
                <h3 className="text-sm font-black text-purple-900">{item.title}</h3>
                <p className="mt-1 text-xs font-medium leading-5 text-slate-600">{item.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function Programs() {
  return (
    <section id="program" className="relative mx-auto max-w-7xl px-5 py-10 lg:px-8">
      <div className="absolute left-4 top-20 text-4xl text-amber-300">★</div>
      <div className="absolute right-5 top-12 text-4xl text-pink-200">✿</div>

      <div className="grid gap-7 lg:grid-cols-[0.85fr_2fr]">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Star className="fill-amber-400 text-amber-400" size={20} />
            <p className="text-sm font-black text-purple-800">Program Utama</p>
          </div>
          <h2 className="text-3xl font-black leading-tight text-purple-950 md:text-4xl">Belajar, Bermain,<br />Bertumbuh Bersama</h2>
          <p className="mt-4 max-w-sm text-sm font-medium leading-7 text-slate-600">
            Program pembelajaran yang dirancang untuk mengembangkan seluruh aspek perkembangan anak usia dini.
          </p>
          <a href="#kegiatan" className="mt-6 inline-flex items-center gap-3 rounded-xl border-2 border-purple-600 bg-white px-6 py-3 text-sm font-black text-purple-800 transition hover:bg-purple-50">
            Lihat Semua Program <ArrowRight size={17} />
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {programs.map((program) => {
            const Icon = program.icon
            return (
              <article key={program.title} className="group rounded-3xl border border-purple-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100">
                <div className={`flex h-40 items-center justify-center rounded-[2rem] bg-gradient-to-br ${program.bg}`}>
                  <Icon className="text-purple-700" size={72} />
                </div>
                <div className="px-2 pb-2 pt-4 text-center">
                  <h3 className="text-lg font-black text-purple-900">{program.title}</h3>
                  <p className="mt-2 text-xs font-medium leading-5 text-slate-600">{program.desc}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ActivitiesAndTestimonial() {
  return (
    <section id="kegiatan" className="mx-auto grid max-w-7xl gap-7 px-5 pb-6 lg:grid-cols-[1.55fr_0.85fr] lg:px-8">
      <div>
        <div className="mb-4 flex items-center gap-2">
          <Heart className="fill-pink-400 text-pink-400" size={22} />
          <h2 className="text-2xl font-black text-purple-900">Kegiatan Seru Kami</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {activities.map((activity) => {
            const Icon = activity.icon
            return (
              <article key={activity.title} className="overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <img src={activity.image} alt={activity.title} className="h-28 w-full object-cover" />
                <div className="flex items-center justify-center gap-2 px-3 py-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-100 text-purple-700">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-xs font-black text-purple-900">{activity.title}</h3>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <div className="relative rounded-[2rem] bg-gradient-to-br from-purple-100 to-white p-6 shadow-sm">
        <div className="absolute -right-4 -top-4 rounded-full bg-white p-4 shadow-lg">
          <Heart className="fill-pink-400 text-pink-400" size={20} />
        </div>
        <h2 className="mb-5 text-xl font-black text-purple-900">Testimoni Orang Tua</h2>
        <div className="flex items-start gap-4">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full border-4 border-white bg-purple-200 text-xl font-black text-purple-800 shadow-md">M</div>
          <div>
            <p className="text-sm font-medium leading-6 text-slate-700">
              "Anak kami jadi lebih mandiri, percaya diri, dan yang paling kami syukuri, ia semakin mengenal Tuhan dan mengasihi sesama."
            </p>
            <p className="mt-4 text-sm font-black text-purple-950">Ibu Maria, Orang Tua Siswa</p>
          </div>
        </div>
        <div className="mt-5 flex justify-center gap-2">
          <span className="h-2 w-7 rounded-full bg-purple-700" />
          <span className="h-2 w-2 rounded-full bg-purple-300" />
          <span className="h-2 w-2 rounded-full bg-purple-300" />
        </div>
      </div>
    </section>
  )
}

function NewsSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-6 lg:px-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-black text-purple-900">Berita & Agenda Terbaru</h2>
        <Link to="/berita/tk" className="hidden items-center gap-2 text-sm font-black text-purple-700 sm:flex">Lihat Semua <ArrowRight size={16} /></Link>
      </div>
      <div className="grid gap-4 lg:grid-cols-4">
        {fallbackNews.map((item, index) => (
          <article key={item.title} className="grid grid-cols-[100px_1fr] overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <img src={gallery[index % gallery.length].src} alt={item.title} className="h-full min-h-[110px] w-full object-cover" />
            <div className="p-4">
              <div className="mb-2 flex items-center gap-3">
                <div className="rounded-xl bg-purple-600 px-3 py-2 text-center text-white">
                  <p className="text-xl font-black leading-none">{String(index + 10).padStart(2, '0')}</p>
                  <p className="text-xs font-bold">Mei</p>
                </div>
                <CalendarDays className="text-purple-300" size={22} />
              </div>
              <h3 className="line-clamp-2 text-sm font-black leading-5 text-purple-950">{item.title}</h3>
              <p className="mt-1 line-clamp-2 text-xs font-medium leading-5 text-slate-600">{item.excerpt}</p>
              <Link to="/berita/tk" className="mt-2 inline-flex items-center gap-1 text-xs font-black text-purple-700">Selengkapnya <ArrowRight size={13} /></Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function PPDBBanner() {
  return (
    <section id="ppdb" className="mx-auto max-w-7xl px-5 pb-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-purple-800 via-violet-600 to-purple-700 px-6 py-7 text-white shadow-xl shadow-purple-200 lg:px-10">
        <div className="absolute inset-0 opacity-30">
          <Star className="absolute left-36 top-8 text-yellow-300" />
          <Sparkles className="absolute bottom-7 left-72 text-white" />
          <Sparkles className="absolute right-44 top-16 text-white" />
        </div>
        <div className="relative grid items-center gap-6 lg:grid-cols-[1.2fr_1fr_0.7fr]">
          <div>
            <h2 className="text-3xl font-black leading-tight">PPDB 2026/2027</h2>
            <p className="text-lg font-bold text-purple-50">Pendaftaran Peserta Didik Baru Telah Dibuka!</p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm font-bold text-purple-50">
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="text-yellow-300" size={18} />Usia 3-6 Tahun</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="text-yellow-300" size={18} />Kurikulum Bermakna</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="text-yellow-300" size={18} />Tempat Terbatas</span>
            </div>
          </div>
          <Link to="/ppdb" className="inline-flex items-center justify-center gap-3 rounded-xl bg-amber-400 px-7 py-4 text-sm font-black text-purple-950 shadow-lg transition hover:scale-[1.02]">
            Daftar Sekarang <ArrowRight size={18} />
          </Link>
          <p className="text-sm font-bold text-purple-50">Informasi lebih lanjut:<br /><span className="inline-flex items-center gap-2 text-white">{school.phone}<MessageCircle className="text-green-300" size={18} /></span></p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="kontak" className="relative overflow-hidden bg-gradient-to-r from-purple-950 via-purple-900 to-violet-800 text-white">
      <div className="absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-white/10" />
      <div className="absolute -right-16 bottom-0 h-40 w-40 rounded-full bg-white/10" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-10 lg:grid-cols-[1.2fr_1.25fr_1fr_1fr_1.1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src="/images/logo-elkana.png" alt={tk.name} className="h-12 w-12 object-contain" />
            <div>
              <h2 className="text-2xl font-black">{tk.name}</h2>
              <p className="text-xs text-purple-100">Yayasan Pendidikan Kristen Elkana</p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-purple-100">Melayani dengan kasih untuk membentuk generasi beriman, cerdas, gembira, dan berkarakter.</p>
        </div>
        <FooterContact />
        <div>
          <h3 className="mb-4 font-black">Tautan Cepat</h3>
          <div className="space-y-2 text-sm text-purple-100">
            <a className="block" href="#profil">Profil</a>
            <a className="block" href="#program">Program</a>
            <a className="block" href="#kegiatan">Kegiatan</a>
            <Link className="block" to="/berita/tk">Berita TK</Link>
            <Link className="block" to="/ppdb">PPDB</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-black">Ikuti Kami</h3>
          <div className="flex gap-3">
            {[MessageCircle, Mail, Phone].map((Icon, index) => (
              <span key={index} className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-purple-900 transition hover:scale-110">
                <Icon size={20} />
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-black">Jam Operasional</h3>
          <div className="space-y-2 text-sm text-purple-100">
            <p className="flex justify-between gap-6"><span>Senin - Jumat</span><span>07.00 - 15.00</span></p>
            <p className="flex justify-between gap-6"><span>Sabtu</span><span>07.00 - 12.00</span></p>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 bg-purple-950/60 py-4 text-center text-sm text-purple-100">
        (c) 2026 Yayasan Pendidikan Kristen Elkana. All rights reserved.
      </div>
    </footer>
  )
}

function FooterContact() {
  return (
    <div>
      <h3 className="mb-4 font-black">Kontak Kami</h3>
      <div className="space-y-3 text-sm text-purple-100">
        <p className="flex gap-3"><MapPin size={18} className="shrink-0" />{school.address}</p>
        <p className="flex gap-3"><Phone size={18} />{school.phone}</p>
        <p className="flex gap-3"><Mail size={18} />tk.elkana@ypkelkana.sch.id</p>
      </div>
    </div>
  )
}

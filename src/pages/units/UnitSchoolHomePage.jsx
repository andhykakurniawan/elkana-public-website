import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Cross,
  FlaskConical,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Monitor,
  Music,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../../components/ui/Seo'
import { gallery, school, unitsById } from '../../content'

const configs = {
  sd: {
    unit: unitsById.sd,
    label: 'SD KRISTEN ELKANA',
    email: 'sd.elkana@ypkelkana.sch.id',
    title: (
      <>
        Belajar Aktif,
        <br />
        <span className="text-purple-600">Tumbuh Kreatif,</span>
        <br />
        Berkarakter Kristiani
      </>
    ),
    desc:
      'Kami membekali setiap siswa dengan ilmu, iman, dan karakter untuk menjadi pribadi yang cerdas, peduli, dan berintegritas bagi Tuhan, sesama, dan bangsa.',
    nav: ['Beranda', 'Profil', 'Program', 'Kegiatan', 'Galeri', 'PPDB', 'Kontak'],
    stats: [
      ['Pembelajaran Aktif', 'Metode belajar yang menyenangkan untuk membangun pemahaman mendalam.', BookOpen, 'text-blue-500', 'bg-blue-100'],
      ['Karakter Kristiani', 'Menumbuhkan iman, kasih, jujur, disiplin, dan tanggung jawab sejak dini.', Heart, 'text-amber-500', 'bg-amber-100'],
      ['Guru Peduli', 'Guru profesional yang mendampingi dengan kasih dan perhatian sepenuh hati.', Users, 'text-purple-600', 'bg-purple-100'],
      ['Lingkungan Nyaman', 'Fasilitas lengkap dan lingkungan yang aman, bersih, dan mendukung pertumbuhan anak.', ShieldCheck, 'text-green-600', 'bg-green-100'],
    ],
    mainTitle: 'Program Unggulan',
    mainCards: [
      ['Pembelajaran Berkualitas', 'Kurikulum dikembangkan untuk mengoptimalkan potensi akademik dan karakter.', BookOpen, 'text-purple-700', 'from-purple-100 to-white'],
      ['Literasi & Numerasi', 'Membentuk siswa gemar membaca, berpikir logis, dan percaya diri.', Monitor, 'text-blue-600', 'from-blue-100 to-white'],
      ['STEAM Project', 'Proyek sains dan teknologi untuk mengasah kreativitas dan pemecahan masalah.', FlaskConical, 'text-orange-500', 'from-orange-100 to-white'],
      ['Discipleship Class', 'Pembelajaran Alkitab yang relevan untuk membentuk iman dan karakter.', Cross, 'text-pink-500', 'from-pink-100 to-white'],
    ],
    sideTitle: 'Mengapa Pilih SD Kristen Elkana?',
    sideList: [
      'Pendidikan holistik: akademik, iman, karakter, dan keterampilan.',
      'Lingkungan belajar positif yang aman dan mendukung.',
      'Fasilitas modern dan lengkap untuk pembelajaran aktif.',
      'Pelayanan pastoral dan pembinaan rohani berkelanjutan.',
      'Komunitas orang tua yang terlibat dan suportif.',
    ],
    activityTitle: 'Kegiatan Seru Kami',
    activities: ['Eksperimen Sains', 'Literasi', 'Olahraga', 'Ibadah & Firman Tuhan', 'Proyek Kreatif'],
    extras: [['Pramuka', BadgeCheck], ['Basket & Futsal', Trophy], ['Musik', Music], ['English Club', BookOpen], ['Sains Club', FlaskConical]],
    newsTitle: 'Prestasi & Berita Terbaru',
    news: ['Juara 1 Lomba Math Challenge Tingkat Kota', 'Tim Robotik SD Elkana Raih Juara 2 Tingkat Provinsi', 'Perayaan Paskah Bersama SD Kristen Elkana'],
    testimonial: 'Kami bersyukur anak kami bertumbuh dalam iman, berprestasi di sekolah, dan menjadi anak yang mandiri serta berkarakter baik. Terima kasih SD Kristen Elkana!',
    ppdbYear: 'Tahun Ajaran 2025/2026',
    ppdbFeatures: ['Kuota Terbatas', 'Kurikulum Berkualitas', 'Guru Profesional'],
  },
  smp: {
    unit: unitsById.smp,
    label: 'SMP KRISTEN ELKANA',
    email: 'smp.elkana@ypkelkana.sch.id',
    title: (
      <>
        Mempersiapkan Generasi
        <br />
        Berintegritas, Berprestasi,
        <br />
        dan <span className="text-amber-500">Siap Berdampak</span>
      </>
    ),
    desc:
      'Kami membentuk pribadi yang beriman, berilmu, berkarakter, dan memiliki kepemimpinan untuk memberikan dampak positif bagi bangsa dan dunia.',
    nav: ['Beranda', 'Profil', 'Akademik', 'Kesiswaan', 'Prestasi', 'Galeri', 'PPDB', 'Kontak'],
    stats: [
      ['Akademik Unggul', 'Pembelajaran terarah untuk membangun kompetensi dan daya saing.', GraduationCap, 'text-purple-700', 'bg-purple-100'],
      ['Karakter & Kepemimpinan', 'Pembinaan karakter, tanggung jawab, dan jiwa kepemimpinan.', Award, 'text-amber-500', 'bg-amber-100'],
      ['Prestasi Membanggakan', 'Mendorong siswa berani berkembang dan berprestasi.', Trophy, 'text-orange-500', 'bg-orange-100'],
      ['Lingkungan Belajar Nyaman & Aman', 'Lingkungan belajar kondusif untuk tumbuh optimal.', ShieldCheck, 'text-purple-700', 'bg-purple-100'],
    ],
    mainTitle: 'Fokus Pembelajaran',
    mainCards: [
      ['Pembelajaran Berkualitas', 'Kurikulum nasional yang diperkaya nilai Kristiani dan proyek.', GraduationCap, 'text-purple-700', 'from-purple-100 to-white'],
      ['Pengembangan Diri', 'Pembinaan karakter, rohani, dan kepemimpinan siswa.', Award, 'text-purple-700', 'from-purple-100 to-white'],
      ['Digital & Literasi', 'Pemanfaatan teknologi dan literasi digital masa depan.', Monitor, 'text-purple-700', 'from-purple-100 to-white'],
      ['Pembinaan Spiritual', 'Pengajaran Alkitab, ibadah, pelayanan, dan pembinaan rohani.', Cross, 'text-purple-700', 'from-purple-100 to-white'],
    ],
    sideTitle: 'Prestasi Siswa',
    achievements: [['132+', 'Prestasi Diraih', Trophy], ['28', 'Kejuaraan Kota & Provinsi', Award], ['12', 'Kompetisi Akademik & Non-Akademik', Star]],
    activityTitle: 'Kehidupan Sekolah',
    activities: ['Pembinaan Rohani', 'Proyek & Kolaborasi', 'Kepemimpinan Siswa', 'Kegiatan Sosial'],
    extras: [['Basket', Trophy], ['Paduan Suara', Music], ['Sains Club', FlaskConical], ['Multimedia', Monitor], ['Pramuka', BadgeCheck]],
    newsTitle: 'Berita & Agenda Terbaru',
    news: ['Retreat Siswa Kelas 8', 'SMP Elkana Juara 1 Lomba Karya Ilmiah Remaja', 'Pentas Seni & Budaya'],
    testimonial: 'SMP Kristen Elkana membantu anak kami bertumbuh bukan hanya secara akademik, tetapi juga dalam karakter dan iman.',
    ppdbYear: 'Tahun Ajaran 2026/2027',
    ppdbFeatures: ['Kuota Terbatas', 'Program Unggulan', 'Lingkungan Kondusif', 'Pembinaan Karakter'],
  },
}

export function UnitSchoolHomePage({ type }) {
  const config = configs[type]

  return (
    <main className="min-h-screen bg-[#fbf9ff] text-slate-800">
      <Seo title={config.unit.name} description={config.unit.intro} />
      <Navbar config={config} />
      <Hero config={config} />
      <StatsStrip stats={config.stats} />
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-8 lg:grid-cols-[1.35fr_0.85fr] lg:px-8">
        <MainCards config={config} />
        {type === 'sd' ? <ReasonCard config={config} /> : <AchievementCard config={config} />}
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <Activities config={config} />
        <Extras config={config} />
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <News config={config} />
        <Testimonial config={config} />
      </section>
      <PPDBBanner config={config} />
      <Footer config={config} />
    </main>
  )
}

function Navbar({ config }) {
  return (
    <header className="sticky top-0 z-50 border-b border-purple-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo-elkana.png" alt={config.unit.name} className="h-12 w-12 object-contain" />
          <div>
            <h1 className="font-heading text-2xl font-black tracking-tight text-purple-900">{config.unit.name}</h1>
            <p className="-mt-1 text-xs font-medium text-slate-500">Yayasan Pendidikan Kristen Elkana</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-bold text-slate-700 lg:flex">
          {config.nav.map((item, index) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={index === 0 ? 'text-purple-800 underline decoration-purple-700 decoration-2 underline-offset-[14px]' : 'flex items-center gap-1 hover:text-purple-700'}>
              {item}
              {['Profil', 'Akademik', 'Kesiswaan'].includes(item) && <ChevronDown size={15} />}
            </a>
          ))}
        </nav>
        <Link to="/ppdb" className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-purple-800 to-violet-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-purple-300/40 transition hover:scale-[1.02] lg:inline-flex">
          <Users size={18} /> Daftar PPDB
        </Link>
        <button className="rounded-xl border border-purple-100 p-2 text-purple-800 lg:hidden" aria-label="Buka navigasi">
          <Menu />
        </button>
      </div>
    </header>
  )
}

function Hero({ config }) {
  return (
    <section id="beranda" className="relative overflow-hidden bg-white">
      <HeroDecor />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="relative z-10">
          <p className="mb-3 text-sm font-black uppercase tracking-wider text-amber-500">{config.label}</p>
          <h2 className="max-w-2xl text-4xl font-black leading-tight text-[#2e1d42] md:text-5xl lg:text-6xl">{config.title}</h2>
          <p className="mt-5 max-w-xl text-base font-medium leading-7 text-slate-600">{config.desc}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#profil" className="inline-flex items-center gap-3 rounded-xl bg-purple-800 px-7 py-3 text-sm font-black text-white shadow-xl shadow-purple-300/40">Kenal Lebih Dekat <ArrowRight size={18} /></a>
            <Link to="/ppdb" className="inline-flex items-center gap-3 rounded-xl border-2 border-purple-600 bg-white px-7 py-3 text-sm font-black text-purple-800">Daftar PPDB <Users size={18} /></Link>
          </div>
        </div>
        <div className="relative z-10">
          <div className="absolute inset-x-8 bottom-4 h-44 rounded-full bg-purple-200/70 blur-3xl" />
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-purple-100 via-white to-violet-100 p-3 shadow-2xl shadow-purple-100">
            <img src={config.unit.heroImage} alt={config.unit.name} className="h-[380px] w-full rounded-[2.4rem] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-purple-700/10" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-20 w-1/2 rounded-tr-[100%] bg-purple-100/70" />
      <div className="absolute bottom-0 right-0 h-24 w-1/2 rounded-tl-[100%] bg-violet-100/80" />
    </section>
  )
}

function HeroDecor() {
  return (
    <>
      <Sparkles className="absolute left-12 top-28 text-purple-200" size={28} />
      <BookOpen className="absolute left-20 top-40 text-purple-200" size={32} />
      <Star className="absolute left-[38%] top-24 text-amber-400" size={24} />
      <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-purple-100/70 blur-3xl" />
      <div className="absolute right-0 top-20 h-56 w-56 rounded-full bg-violet-100 blur-3xl" />
    </>
  )
}

function StatsStrip({ stats }) {
  return (
    <section id="profil" className="relative z-20 -mt-3 px-5 lg:px-8">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-xl shadow-purple-100/70 md:grid-cols-2 lg:grid-cols-4">
        {stats.map(([title, desc, Icon, color, bg], index) => (
          <div key={title} className={`flex items-center gap-4 px-6 py-5 ${index !== stats.length - 1 ? 'lg:border-r lg:border-purple-100' : ''}`}>
            <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${bg}`}>
              <Icon className={color} size={34} />
            </div>
            <div>
              <h3 className="text-sm font-black text-purple-900">{title}</h3>
              <p className="mt-1 text-xs font-medium leading-5 text-slate-600">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function MainCards({ config }) {
  return (
    <div id="program">
      <div className="mb-4 flex items-center gap-2">
        <Star className="fill-amber-400 text-amber-400" size={22} />
        <h2 className="text-2xl font-black text-purple-900">{config.mainTitle}</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {config.mainCards.map(([title, desc, Icon, color, bg]) => (
          <article key={title} className={`rounded-2xl border border-purple-100 bg-gradient-to-br ${bg} p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl`}>
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
              <Icon className={color} size={30} />
            </div>
            <h3 className="text-base font-black text-purple-900">{title}</h3>
            <p className="mt-2 text-xs font-medium leading-5 text-slate-600">{desc}</p>
            <a className="mt-4 inline-flex items-center gap-2 text-xs font-black text-purple-700">Selengkapnya <ArrowRight size={14} /></a>
          </article>
        ))}
      </div>
    </div>
  )
}

function ReasonCard({ config }) {
  return (
    <div className="rounded-3xl border border-purple-100 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-black text-purple-900">{config.sideTitle}</h2>
      <ul className="space-y-3">
        {config.sideList.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm font-medium text-slate-700">
            <CheckCircle2 className="mt-0.5 shrink-0 text-purple-700" size={18} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex justify-end text-purple-200"><Cross size={90} /></div>
    </div>
  )
}

function AchievementCard({ config }) {
  return (
    <div className="rounded-3xl border border-purple-100 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-black text-purple-900">{config.sideTitle}</h2>
      <div className="grid grid-cols-3 gap-3 border-b border-purple-100 pb-5">
        {config.achievements.map(([value, label, Icon]) => (
          <div key={label} className="text-center">
            <Icon className="mx-auto text-purple-700" size={32} />
            <p className="mt-2 text-3xl font-black text-purple-900">{value}</p>
            <p className="mt-1 text-xs font-medium leading-4 text-slate-600">{label}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 space-y-3">
        {config.news.map((item, index) => (
          <article key={item} className="flex gap-3">
            <img src={gallery[index % gallery.length].src} alt={item} className="h-16 w-24 rounded-xl object-cover" />
            <div><h3 className="line-clamp-2 text-sm font-black leading-5 text-purple-950">{item}</h3><p className="mt-1 text-xs font-medium text-slate-500">2026</p></div>
          </article>
        ))}
      </div>
    </div>
  )
}

function Activities({ config }) {
  return (
    <div id="kegiatan">
      <h2 className="mb-4 text-2xl font-black text-purple-900">{config.activityTitle}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {config.activities.map((title, index) => (
          <article key={title} className="overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <img src={gallery[index % gallery.length].src} alt={title} className="h-28 w-full object-cover" />
            <div className="flex items-center justify-center gap-2 px-3 py-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-100 text-purple-700"><Sparkles size={18} /></div>
              <h3 className="text-xs font-black text-purple-900">{title}</h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function Extras({ config }) {
  return (
    <div className="rounded-3xl border border-purple-100 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-black text-purple-900">{config.extras ? 'Ekstrakurikuler' : ''}</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {config.extras.map(([name, Icon]) => (
          <div key={name} className="rounded-2xl border border-purple-100 bg-gradient-to-br from-white to-purple-50 p-4 text-center">
            <Icon className="mx-auto text-purple-700" size={36} />
            <p className="mt-3 text-xs font-black text-purple-900">{name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function News({ config }) {
  return (
    <div className="rounded-3xl border border-purple-100 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-2xl font-black text-purple-900">{config.newsTitle}</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {config.news.map((item, index) => (
          <article key={item} className="rounded-2xl border border-purple-100 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center gap-3">
              <div className="rounded-xl bg-purple-700 px-3 py-2 text-center text-white"><p className="text-2xl font-black leading-none">{String(index + 10).padStart(2, '0')}</p><p className="text-xs font-bold">Mei</p></div>
              <CalendarDays className="text-purple-300" size={24} />
            </div>
            <h3 className="line-clamp-2 text-sm font-black leading-5 text-purple-950">{item}</h3>
            <a className="mt-3 inline-flex items-center gap-1 text-xs font-black text-purple-700">Selengkapnya <ArrowRight size={13} /></a>
          </article>
        ))}
      </div>
    </div>
  )
}

function Testimonial({ config }) {
  return (
    <div className="relative rounded-3xl border border-purple-100 bg-gradient-to-br from-purple-50 to-white p-6 shadow-sm">
      <h2 className="mb-5 text-2xl font-black text-purple-900">Testimoni</h2>
      <div className="flex items-start gap-4">
        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full border-4 border-white bg-purple-100 font-black text-purple-800 shadow-md">O</div>
        <div><p className="text-sm font-medium leading-6 text-slate-700">"{config.testimonial}"</p><p className="mt-4 text-sm font-black text-purple-950">Orang Tua Siswa</p></div>
      </div>
    </div>
  )
}

function PPDBBanner({ config }) {
  return (
    <section id="ppdb" className="mx-auto max-w-7xl px-5 pb-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-purple-900 via-purple-700 to-violet-700 px-6 py-7 text-white shadow-xl shadow-purple-200 lg:px-10">
        <div className="relative grid items-center gap-6 lg:grid-cols-[1.15fr_1.1fr_0.45fr]">
          <h2 className="text-2xl font-black leading-tight md:text-3xl">Penerimaan Peserta Didik Baru (PPDB)<br />{config.ppdbYear}</h2>
          <div className="flex flex-wrap gap-3">{config.ppdbFeatures.map((item) => <span key={item} className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-bold"><Star className="fill-amber-300 text-amber-300" size={17} />{item}</span>)}</div>
          <Link to="/ppdb" className="inline-flex items-center justify-center gap-3 rounded-xl bg-amber-400 px-7 py-4 text-sm font-black text-purple-950 shadow-lg">Daftar Sekarang <ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
  )
}

function Footer({ config }) {
  return (
    <footer id="kontak" className="relative overflow-hidden bg-gradient-to-r from-purple-950 via-purple-900 to-violet-800 text-white">
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-10 lg:grid-cols-[1.2fr_1.25fr_1fr_1fr_1.1fr] lg:px-8">
        <div><div className="flex items-center gap-3"><img src="/images/logo-elkana.png" alt={config.unit.name} className="h-12 w-12 object-contain" /><div><h2 className="text-2xl font-black">{config.unit.name}</h2><p className="text-xs text-purple-100">Yayasan Pendidikan Kristen Elkana</p></div></div><p className="mt-4 max-w-xs text-sm leading-6 text-purple-100">{config.unit.intro}</p></div>
        <div><h3 className="mb-4 font-black">Kontak Kami</h3><div className="space-y-3 text-sm text-purple-100"><p className="flex gap-3"><MapPin size={18} className="shrink-0" />{school.address}</p><p className="flex gap-3"><Phone size={18} />{school.phone}</p><p className="flex gap-3"><Mail size={18} />{config.email}</p></div></div>
        <div><h3 className="mb-4 font-black">Tautan Cepat</h3><div className="space-y-2 text-sm text-purple-100">{config.nav.slice(1).map((item) => <a key={item} className="block">{item}</a>)}</div></div>
        <div><h3 className="mb-4 font-black">Ikuti Kami</h3><div className="flex gap-3">{[MessageCircle, Mail, Phone].map((Icon, index) => <span key={index} className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-purple-900"><Icon size={20} /></span>)}</div></div>
        <div><h3 className="mb-4 font-black">Jam Operasional</h3><p className="text-sm text-purple-100">{school.hours}</p></div>
      </div>
      <div className="border-t border-white/10 bg-purple-950/60 py-4 text-center text-sm text-purple-100">(c) 2026 Yayasan Pendidikan Kristen Elkana. All rights reserved.</div>
    </footer>
  )
}

import {
  ArrowRight,
  BookOpen,
  Camera,
  CheckCircle2,
  ChevronDown,
  Church,
  ClipboardList,
  Cross,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Play,
  School,
  Share2,
  Users,
} from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Seo } from '../components/ui/Seo'
import { educationUnits, gallery, homeHero, news, school } from '../content'

const unitConfig = {
  tk: {
    color: 'from-amber-100 to-white',
    accent: 'text-amber-500',
    border: 'border-amber-200',
    icon: Users,
  },
  sd: {
    color: 'from-purple-100 to-white',
    accent: 'text-purple-700',
    border: 'border-purple-200',
    icon: BookOpen,
  },
  smp: {
    color: 'from-violet-100 to-white',
    accent: 'text-violet-700',
    border: 'border-violet-200',
    icon: GraduationCap,
  },
}

const coreValues = [
  { title: 'Iman', icon: Cross, desc: 'Berakar pada firman Tuhan dan hidup dalam kasih Kristus.' },
  { title: 'Ilmu', icon: BookOpen, desc: 'Mengembangkan pengetahuan dan keterampilan untuk kehidupan.' },
  { title: 'Karakter', icon: Heart, desc: 'Membentuk pribadi yang berintegritas, disiplin, dan peduli sesama.' },
]

const advantages = [
  'Pendidikan berbasis nilai-nilai Kristiani',
  'Kurikulum berkualitas dan relevan',
  'Tenaga pendidik profesional dan berdedikasi',
  'Lingkungan belajar aman, nyaman, dan kondusif',
  'Pengembangan karakter dan kepemimpinan',
]

export function HomePage() {
  return (
    <main className="min-h-screen bg-[#fbf9ff] text-slate-800">
      <Seo description="Profil resmi YPK Elkana: yayasan, unit TK, SD, SMP, berita, PPDB, dan kontak." />
      <Navbar />
      <Hero />
      <EducationUnits />
      <ValuesAndNews />
      <GalleryAndTestimonial />
      <PPDBBanner />
      <HomeFooter />
    </main>
  )
}

function Navbar() {
  const [isUnitOpen, setIsUnitOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-purple-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-xl border border-amber-200 bg-gradient-to-br from-amber-100 to-white text-lg font-black text-purple-900 shadow-sm">
            E
          </div>
          <div>
            <h1 className="font-heading text-2xl font-black leading-none tracking-tight text-purple-900">YPK ELKANA</h1>
            <p className="mt-1 text-xs font-medium text-slate-500">Yayasan Pendidikan Kristen</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 lg:flex">
          <NavLink to="/" className={({ isActive }) => isActive ? activeNavClass : idleNavClass}>Beranda</NavLink>
          <NavLink to="/tentang" className={idleNavClass}>Tentang</NavLink>
          <div
            className="relative"
            onMouseEnter={() => setIsUnitOpen(true)}
            onMouseLeave={() => setIsUnitOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 py-3 hover:text-purple-700"
              onClick={() => setIsUnitOpen((value) => !value)}
            >
              Unit Pendidikan <ChevronDown size={16} />
            </button>
            {isUnitOpen && (
              <div className="absolute left-0 top-full w-64 pt-2">
                <div className="rounded-xl border border-purple-100 bg-white p-2 shadow-xl">
                  {educationUnits.map((unit) => (
                    <Link
                      key={unit.id}
                      to={unit.route}
                      className="block rounded-lg px-4 py-3 text-sm font-black text-purple-950 hover:bg-purple-50"
                      onClick={() => setIsUnitOpen(false)}
                    >
                      {unit.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <NavLink to="/berita" className={idleNavClass}>Berita</NavLink>
          <NavLink to="/ppdb" className={idleNavClass}>PPDB</NavLink>
          <NavLink to="/kontak" className={idleNavClass}>Kontak</NavLink>
        </nav>

        <Link to="/ppdb" className="hidden items-center gap-2 rounded-lg bg-gradient-to-r from-purple-800 to-violet-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-purple-300/40 transition hover:scale-[1.02] lg:inline-flex">
          <Users size={18} /> Daftar PPDB
        </Link>

        <button className="rounded-xl border border-purple-100 p-2 text-purple-800 lg:hidden" aria-label="Buka navigasi">
          <Menu />
        </button>
      </div>
    </header>
  )
}

const activeNavClass = 'text-purple-800 underline decoration-purple-600 decoration-2 underline-offset-[14px]'
const idleNavClass = 'hover:text-purple-700'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-bl from-purple-100 via-violet-50 to-transparent" />
      <div className="absolute right-0 top-0 hidden h-full w-[45%] opacity-80 lg:block">
        <img src={homeHero.image} alt="Gerbang YPK Elkana" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-purple-700/20" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-16">
        <div className="z-10">
          <p className="mb-3 text-sm font-black uppercase tracking-wide text-amber-500">{school.fullName}</p>
          <h2 className="max-w-xl text-4xl font-black leading-tight text-purple-950 md:text-5xl lg:text-6xl">
            Membangun Generasi <span className="text-purple-600">Beriman, Berilmu,</span> dan Berkarakter
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            YPK Elkana berkomitmen menyelenggarakan pendidikan Kristen yang berkualitas, mengintegrasikan iman, ilmu, dan karakter untuk mempersiapkan generasi yang siap menghadapi masa depan dengan kasih, integritas, dan tanggung jawab.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link to="/tentang" className="inline-flex items-center gap-3 rounded-lg bg-purple-800 px-7 py-3 text-sm font-bold text-white shadow-xl shadow-purple-300/40">
              Kenali Yayasan <ArrowRight size={18} />
            </Link>
            <Link to="/ppdb" className="inline-flex items-center gap-3 rounded-lg border-2 border-purple-700 bg-white px-7 py-3 text-sm font-bold text-purple-800">
              Daftar PPDB <Users size={18} />
            </Link>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-1 overflow-hidden rounded-xl border border-purple-100 bg-white shadow-lg shadow-purple-100/70 sm:grid-cols-3">
            <MiniStat icon={School} value="3" label="Unit Pendidikan" />
            <MiniStat icon={Cross} label="Berlandaskan Nilai Kristiani" />
            <MiniStat icon={Heart} label="Melayani dengan Kasih & Integritas" />
          </div>
        </div>

        <div className="relative z-10 min-h-[360px]">
          <div className="absolute left-4 top-6 hidden h-40 w-40 rounded-full bg-purple-200/60 blur-3xl lg:block" />
          <div className="absolute right-10 top-8 hidden grid-cols-6 gap-2 opacity-50 lg:grid">
            {Array.from({ length: 36 }).map((_, index) => (
              <span key={index} className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            ))}
          </div>

          <div className="relative ml-auto flex max-w-2xl items-end justify-center pt-8">
            <div className="absolute left-4 top-28 rounded-xl bg-amber-400 px-5 py-2 text-lg font-black text-white shadow-lg">TK</div>
            <div className="absolute left-[44%] top-8 rounded-xl bg-purple-600 px-5 py-2 text-lg font-black text-white shadow-lg">SD</div>
            <div className="absolute right-3 top-44 rounded-xl bg-violet-700 px-5 py-2 text-lg font-black text-white shadow-lg">SMP</div>
            <div className="h-[380px] w-[380px] overflow-hidden rounded-full bg-gradient-to-br from-purple-300 to-purple-100 shadow-2xl shadow-purple-300/40 md:h-[450px] md:w-[450px]">
              <img src={gallery[1]?.src || homeHero.image} alt="Siswa YPK Elkana" className="h-full w-full object-cover object-center opacity-95" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 h-24 w-2/3 rounded-tl-[100%] bg-purple-100/50" />
    </section>
  )
}

function MiniStat({ icon: Icon, value, label }) {
  return (
    <div className="flex items-center gap-3 border-b border-purple-100 px-5 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
      <Icon className="shrink-0 text-purple-700" size={26} />
      <div>
        {value && <p className="text-sm font-black text-purple-950">{value}</p>}
        <p className="text-xs font-bold leading-snug text-slate-600">{label}</p>
      </div>
    </div>
  )
}

function EducationUnits() {
  return (
    <section id="unit" className="relative z-20 mx-auto max-w-7xl px-5 py-8 lg:px-8">
      <h2 className="mb-5 text-2xl font-black text-purple-900">Unit Pendidikan Kami</h2>
      <div className="grid gap-5 lg:grid-cols-3">
        {educationUnits.map((unit) => {
          const config = unitConfig[unit.id]
          const Icon = config.icon
          return (
            <article key={unit.id} className={`rounded-2xl border ${config.border} bg-gradient-to-br ${config.color} p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl`}>
              <div className="flex gap-5">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white shadow-inner">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
                    <Icon className={config.accent} size={34} />
                  </div>
                </div>
                <div>
                  <h3 className={`text-xl font-black ${config.accent}`}>{unit.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{unit.intro}</p>
                  <Link to={unit.route} className={`mt-4 inline-flex items-center gap-2 text-sm font-black ${config.accent}`}>
                    Lihat Selengkapnya <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function ValuesAndNews() {
  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-5 py-6 lg:grid-cols-[1.15fr_1fr_0.9fr] lg:px-8">
      <div>
        <h2 className="mb-5 text-2xl font-black text-purple-900">Nilai Inti Kami</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {coreValues.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={item.title} className={`text-center ${index !== 2 ? 'sm:border-r sm:border-purple-100' : ''}`}>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-purple-100 bg-purple-50 shadow-sm">
                  <Icon className="text-purple-700" size={32} />
                </div>
                <h3 className="mt-3 text-lg font-black text-purple-900">{item.title}</h3>
                <p className="mx-auto mt-1 max-w-[180px] text-xs leading-5 text-slate-600">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-white p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-black text-purple-900">Keunggulan Yayasan</h2>
        <ul className="space-y-3">
          {advantages.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
              <CheckCircle2 className="mt-0.5 shrink-0 text-purple-700" size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Church className="ml-auto mt-1 text-purple-200" size={86} />
      </div>

      <div id="berita">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-black text-purple-900">Berita & Kegiatan Terbaru</h2>
          <Link to="/berita" className="hidden items-center gap-1 text-xs font-black text-purple-700 sm:flex">Lihat Semua <ArrowRight size={14} /></Link>
        </div>
        <div className="space-y-3">
          {news.slice(0, 3).map((item, index) => (
            <article key={item.title} className="flex gap-3">
              <img src={gallery[index % gallery.length].src} alt={item.title} className="h-20 w-28 rounded-xl object-cover" />
              <div>
                <h3 className="line-clamp-2 text-sm font-black leading-5 text-purple-950">{item.title}</h3>
                <p className="mt-1 text-xs font-medium text-slate-500">{item.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function GalleryAndTestimonial() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 rounded-2xl bg-white px-5 py-6 shadow-sm lg:grid-cols-[1.25fr_1fr] lg:px-8">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-black text-purple-900">Galeri Kegiatan</h2>
          <Link to="/galeri" className="flex items-center gap-1 text-xs font-black text-purple-700">Lihat Semua <ArrowRight size={14} /></Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {gallery.map((item) => (
            <img key={item.title} src={item.src} alt={item.title} className="h-28 w-full rounded-xl object-cover shadow-sm" />
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-black text-purple-900">Testimoni</h2>
        <div className="relative rounded-2xl border border-purple-100 bg-white p-6 shadow-sm">
          <p className="text-sm leading-6 text-slate-700">YPK Elkana bukan hanya mengajarkan ilmu, tetapi juga membentuk karakter dan iman anak kami. Kami bersyukur menjadi bagian dari keluarga besar YPK Elkana.</p>
          <div className="mt-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-100 font-black text-purple-800">A</div>
            <div>
              <h3 className="text-sm font-black text-purple-950">Keluarga Bapak Andi</h3>
              <p className="text-xs text-slate-500">Orang Tua Siswa SD Kristen Elkana</p>
            </div>
          </div>
          <div className="mt-5 flex justify-center gap-2">
            <span className="h-2 w-7 rounded-full bg-purple-700" />
            <span className="h-2 w-2 rounded-full bg-purple-200" />
            <span className="h-2 w-2 rounded-full bg-purple-200" />
          </div>
        </div>
      </div>
    </section>
  )
}

function PPDBBanner() {
  return (
    <section id="ppdb" className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-900 via-purple-700 to-violet-700 p-6 text-white shadow-xl shadow-purple-200 lg:p-8">
        <div className="absolute -left-8 -top-8 h-36 w-36 rounded-full bg-white/10" />
        <div className="absolute -right-10 bottom-0 h-44 w-44 rounded-full bg-white/10" />
        <div className="relative grid items-center gap-6 lg:grid-cols-[0.25fr_1fr_0.95fr_0.35fr]">
          <div className="hidden lg:flex"><div className="rotate-[-8deg] rounded-2xl bg-white p-4 shadow-xl"><ClipboardList className="text-amber-500" size={68} /></div></div>
          <h2 className="text-2xl font-black leading-tight md:text-3xl">Penerimaan Peserta Didik Baru (PPDB)<br />Tahun Ajaran 2026/2027</h2>
          <p className="text-sm leading-6 text-purple-50">Bergabunglah bersama kami dan wujudkan masa depan terbaik bagi putra-putri Anda.</p>
          <Link to="/ppdb" className="inline-flex items-center justify-center gap-3 rounded-xl bg-amber-400 px-6 py-3 text-sm font-black text-purple-950 shadow-lg transition hover:scale-[1.02]">Daftar Sekarang <ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
  )
}

function HomeFooter() {
  return (
    <footer id="kontak" className="bg-gradient-to-r from-purple-950 via-purple-900 to-violet-800 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 lg:grid-cols-[1.25fr_1.2fr_1fr_1fr_1.1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3"><div className="grid h-12 w-12 place-items-center rounded-xl bg-white font-black text-purple-900">E</div><div><h2 className="text-2xl font-black">YPK ELKANA</h2><p className="text-xs text-purple-100">Yayasan Pendidikan Kristen</p></div></div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-purple-100">Melayani pendidikan dari hati, membentuk generasi beriman, berilmu, dan berkarakter.</p>
        </div>
        <div><h3 className="mb-4 font-black">Kontak Kami</h3><div className="space-y-3 text-sm text-purple-100"><p className="flex gap-3"><MapPin size={18} className="shrink-0" />{school.address}</p><p className="flex gap-3"><Phone size={18} />{school.phone}</p><p className="flex gap-3"><Mail size={18} />{school.email}</p></div></div>
        <div><h3 className="mb-4 font-black">Tautan Cepat</h3><div className="space-y-2 text-sm text-purple-100"><Link className="block" to="/tentang">Tentang YPK Elkana</Link><Link className="block" to="/unit/tk">Unit Pendidikan</Link><Link className="block" to="/berita">Berita & Kegiatan</Link><Link className="block" to="/ppdb">PPDB</Link><Link className="block" to="/kontak">Kontak</Link></div></div>
        <div><h3 className="mb-4 font-black">Ikuti Kami</h3><div className="flex gap-3">{[Share2, Camera, Play, MessageCircle].map((Icon, index) => (<span key={index} className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-purple-900"><Icon size={20} /></span>))}</div></div>
        <div><h3 className="mb-4 font-black">Jam Operasional</h3><div className="space-y-2 text-sm text-purple-100"><p>{school.hours}</p></div></div>
      </div>
      <div className="border-t border-white/10 bg-purple-950/60 py-4 text-center text-sm text-purple-100">(c) 2026 {school.fullName}. All rights reserved.</div>
    </footer>
  )
}


import { BookOpen, CheckCircle2, Cross, Heart, Sparkles, Users } from 'lucide-react'
import { Shell } from '../components/layout/Shell'
import { Seo } from '../components/ui/Seo'
import { educationUnits, profileIntro, teachers, values, visionMission } from '../content'

const icons = [Cross, BookOpen, Heart]

export function AboutPage() {
  return (
    <Shell>
      <Seo title="Tentang" description="Visi, misi, nilai, dan profil Yayasan Pendidikan Kristen Elkana." />
      <main className="bg-[#fbf9ff]">
        <section className="relative overflow-hidden bg-white">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-bl from-purple-100 via-violet-50 to-transparent" />
          <div className="container-wide relative grid gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:py-20">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-wide text-amber-500">Tentang Yayasan</p>
              <h1 className="max-w-3xl text-4xl font-black leading-tight text-purple-950 md:text-5xl lg:text-6xl">
                Membangun pendidikan Kristen yang berakar pada iman dan karakter.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">{profileIntro.description}</p>
            </div>
            <div className="rounded-[2rem] border border-purple-100 bg-gradient-to-br from-purple-50 to-white p-6 shadow-xl shadow-purple-100/70">
              <Sparkles className="text-purple-700" size={42} />
              <h2 className="mt-5 text-2xl font-black text-purple-950">{profileIntro.title}</h2>
              <div className="mt-6 grid gap-3">
                {educationUnits.map((unit) => (
                  <div key={unit.id} className="rounded-xl border border-purple-100 bg-white px-4 py-3 text-sm font-black text-purple-900">
                    {unit.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container-wide grid gap-6 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:px-12">
          <InfoCard title="Visi" text={visionMission.vision} />
          <InfoCard title="Misi" text={visionMission.mission} />
        </section>

        <section className="container-wide px-5 pb-10 sm:px-8 lg:px-12">
          <h2 className="mb-5 text-2xl font-black text-purple-900">Nilai Inti Kami</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {values.slice(0, 3).map((value, index) => {
              const Icon = icons[index] || CheckCircle2
              return (
                <article key={value} className="rounded-2xl border border-purple-100 bg-white p-6 text-center shadow-sm">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-50 text-purple-700">
                    <Icon size={32} />
                  </div>
                  <h3 className="mt-4 text-xl font-black text-purple-950">{value}</h3>
                </article>
              )
            })}
          </div>
        </section>

        <section className="container-wide px-5 pb-12 sm:px-8 lg:px-12">
          <div className="mb-5 flex items-center gap-2">
            <Users className="text-purple-700" />
            <h2 className="text-2xl font-black text-purple-900">Guru & Staf</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {teachers.map((teacher) => (
              <article key={`${teacher.name}-${teacher.unit}`} className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-purple-100 text-lg font-black text-purple-800">{teacher.name.charAt(0)}</div>
                <h3 className="mt-4 text-lg font-black text-purple-950">{teacher.name}</h3>
                <p className="mt-1 text-sm font-bold text-purple-700">{teacher.role}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{teacher.unit} - {teacher.subject}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Shell>
  )
}

function InfoCard({ title, text }) {
  return (
    <article className="rounded-2xl border border-purple-100 bg-white p-7 shadow-sm">
      <CheckCircle2 className="text-purple-700" size={32} />
      <h2 className="mt-5 text-2xl font-black text-purple-950">{title}</h2>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </article>
  )
}

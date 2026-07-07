import { teachers } from '../../content'

export function TeachersSection() {
  return (
    <section className="section-pad bg-elkana-mist">
      <div className="container-wide">
        <div className="max-w-3xl">
          <p className="eyebrow">Guru & Staf</p>
          <h2 className="mt-4 text-3xl font-black text-elkana-ink sm:text-4xl">
            Tim pendidik yang mendampingi TK, SD, dan SMP.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.map((teacher) => (
            <article key={`${teacher.name}-${teacher.unit}`} className="rounded-lg border border-elkana-gold/30 bg-white p-5 shadow-sm">
              <div className="grid h-16 w-16 place-items-center rounded-md bg-elkana-pine text-xl font-black text-white">
                {teacher.name.charAt(0)}
              </div>
              <p className="mt-5 text-lg font-black text-elkana-ink">{teacher.name}</p>
              <p className="mt-1 text-sm font-bold text-elkana-pine">{teacher.role}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {teacher.unit} - {teacher.subject}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

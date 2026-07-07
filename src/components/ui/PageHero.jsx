export function PageHero({ title, text, icon }) {
  return (
    <section className="bg-elkana-ink px-5 py-20 text-white sm:px-8 lg:px-12">
      <div className="container-wide">
        <div className="grid h-14 w-14 place-items-center rounded-lg bg-white/12 text-elkana-gold">{icon}</div>
        <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">{text}</p>
      </div>
    </section>
  )
}

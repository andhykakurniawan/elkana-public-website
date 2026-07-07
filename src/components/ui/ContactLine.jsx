export function ContactLine({ icon, title, text }) {
  return (
    <div className="flex gap-4 rounded-lg border border-elkana-gold/30 bg-white p-5">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-elkana-mist text-elkana-pine">{icon}</div>
      <div>
        <p className="font-black text-elkana-ink">{title}</p>
        <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
      </div>
    </div>
  )
}

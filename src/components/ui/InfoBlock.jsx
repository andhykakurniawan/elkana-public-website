import { CheckCircle2 } from 'lucide-react'

export function InfoBlock({ title, text }) {
  return (
    <div className="rounded-lg border border-elkana-gold/30 bg-white p-6 shadow-sm">
      <CheckCircle2 className="text-elkana-leaf" size={28} />
      <h3 className="mt-5 text-xl font-black text-elkana-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  )
}

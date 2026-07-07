export function Field({ label, type = 'text' }) {
  return (
    <label className="block">
      <span className="text-sm font-black text-elkana-ink">{label}</span>
      <input type={type} className="focus-ring mt-2 w-full rounded-md border border-elkana-gold/30 px-3 py-3" />
    </label>
  )
}

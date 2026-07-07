import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { Shell } from '../components/layout/Shell'
import { ContactLine } from '../components/ui/ContactLine'
import { Field } from '../components/ui/Field'
import { PageHero } from '../components/ui/PageHero'
import { Seo } from '../components/ui/Seo'
import { school } from '../content'

export function ContactPage() {
  return (
    <Shell>
      <Seo title="Kontak" description="Alamat, kontak, dan jam layanan YPK Elkana." />
      <PageHero title="Kontak Kami" text="Butuh info sekolah, kunjungan kampus, atau konsultasi PPDB? Hubungi tim administrasi." icon={<Mail />} />
      <section className="section-pad bg-[#fffcf4]">
        <div className="container-wide grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            <ContactLine icon={<MapPin />} title="Alamat" text={school.address} />
            <ContactLine icon={<Phone />} title="Telepon" text={school.phone} />
            <ContactLine icon={<Mail />} title="Email" text={school.email} />
          </div>
          <form className="rounded-lg border border-elkana-gold/30 bg-elkana-mist p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nama" />
              <Field label="Email" type="email" />
              <Field label="Nomor WhatsApp" />
              <Field label="Jenjang diminati" />
            </div>
            <label className="mt-4 block">
              <span className="text-sm font-black text-elkana-ink">Pesan</span>
              <textarea className="focus-ring mt-2 min-h-32 w-full rounded-md border border-elkana-gold/30 px-3 py-3" />
            </label>
            <button type="button" className="focus-ring mt-5 inline-flex items-center gap-2 rounded-md bg-elkana-pine px-5 py-3 font-black text-white">
              Kirim Pesan <ArrowRight size={17} />
            </button>
          </form>
        </div>
      </section>
    </Shell>
  )
}

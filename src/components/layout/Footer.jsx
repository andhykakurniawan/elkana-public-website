import { Camera, Mail, MapPin, MessageCircle, Phone, Play, Share2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { educationUnits, school } from '../../content'

const quickLinks = [
  { label: 'Tentang YPK Elkana', path: '/tentang' },
  { label: 'Berita & Kegiatan', path: '/berita' },
  { label: 'PPDB', path: '/ppdb' },
  { label: 'Kontak', path: '/kontak' },
]

export function Footer() {
  return (
    <footer className="mt-2 bg-gradient-to-r from-purple-950 via-purple-900 to-violet-900 text-white">
      <div className="container-wide grid gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.15fr_1.1fr_1fr_0.9fr_1fr] lg:px-12">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-white text-lg font-black text-purple-900">E</span>
            <div>
              <h2 className="font-heading text-2xl font-black">YPK ELKANA</h2>
              <p className="text-xs text-purple-100">Yayasan Pendidikan Kristen</p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-purple-100">{school.tagline}</p>
        </div>

        <div>
          <h3 className="mb-4 font-black">Kontak Kami</h3>
          <div className="space-y-3 text-sm text-purple-100">
            <p className="flex gap-3"><MapPin size={18} className="shrink-0" />{school.address}</p>
            <p className="flex gap-3"><Phone size={18} />{school.phone}</p>
            <p className="flex gap-3"><Mail size={18} />{school.email}</p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-black">Unit Pendidikan</h3>
          <div className="space-y-2 text-sm text-purple-100">
            {educationUnits.map((unit) => (
              <Link key={unit.id} to={unit.route} className="block hover:text-white">{unit.name}</Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-black">Tautan Cepat</h3>
          <div className="space-y-2 text-sm text-purple-100">
            {quickLinks.map((item) => (
              <Link key={item.path} to={item.path} className="block hover:text-white">{item.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-black">Ikuti Kami</h3>
          <div className="flex gap-3">
            {[Share2, Camera, Play, MessageCircle].map((Icon, index) => (
              <span key={index} className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-purple-900">
                <Icon size={20} />
              </span>
            ))}
          </div>
          <h3 className="mb-3 mt-7 font-black">Jam Operasional</h3>
          <p className="text-sm text-purple-100">{school.hours}</p>
        </div>
      </div>

      <div className="border-t border-white/10 bg-purple-950/60 py-4 text-center text-sm text-purple-100">
        (c) 2026 {school.fullName}. All rights reserved.
      </div>
    </footer>
  )
}

import { Link } from 'react-router-dom'
import { navItems, school } from '../../content'

export function Footer() {
  return (
    <footer className="bg-elkana-ink text-white">
      <div className="container-wide grid gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-12">
        <div>
          <p className="text-xl font-black">{school.fullName}</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">{school.tagline}</p>
        </div>
        <div>
          <p className="font-black">Navigasi</p>
          <div className="mt-4 grid gap-2 text-sm text-white/75">
            {navItems.slice(1).map((item) => (
              <Link key={item.path} to={item.path} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-black">Kontak</p>
          <div className="mt-4 grid gap-3 text-sm text-white/75">
            <span>{school.address}</span>
            <span>{school.phone}</span>
            <span>{school.email}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/60">
        (c) 2026 {school.name}. Website profil sekolah publik.
      </div>
    </footer>
  )
}

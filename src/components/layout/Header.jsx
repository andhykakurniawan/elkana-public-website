import { useState } from 'react'
import { ChevronDown, Menu, Users, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { educationUnits, school } from '../../content'

const mainLinks = [
  { label: 'Beranda', path: '/' },
  { label: 'Tentang', path: '/tentang' },
  { label: 'Berita', path: '/berita' },
  { label: 'PPDB', path: '/ppdb' },
  { label: 'Kontak', path: '/kontak' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [unitOpen, setUnitOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
    setUnitOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-purple-100 bg-white text-slate-800 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="focus-ring flex items-center gap-3 rounded-md" onClick={closeMenu}>
          <img src="/images/logo-elkana.png" alt={school.name} className="h-12 w-12 object-contain" />
          <span>
            <span className="block font-heading text-2xl font-black leading-none tracking-tight text-purple-900">YPK ELKANA</span>
            <span className="mt-1 block text-xs font-medium text-slate-500">Yayasan Pendidikan Kristen</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 lg:flex" aria-label="Navigasi utama">
          <DesktopLink to="/">Beranda</DesktopLink>
          <DesktopLink to="/tentang">Tentang</DesktopLink>

          <div className="relative" onMouseEnter={() => setUnitOpen(true)} onMouseLeave={() => setUnitOpen(false)}>
            <button
              type="button"
              className="focus-ring inline-flex items-center gap-1 rounded-md py-3 text-slate-700 transition hover:text-purple-700"
              onClick={() => setUnitOpen((value) => !value)}
            >
              Unit Pendidikan <ChevronDown size={16} />
            </button>
            {unitOpen && (
              <div className="absolute left-0 top-full w-64 pt-2">
                  <div className="rounded-xl border border-purple-100 bg-white p-2 shadow-xl">
                  {educationUnits.map((unit) => (
                    <Link
                      key={unit.id}
                      to={unit.route}
                      onClick={closeMenu}
                      className="block rounded-lg px-4 py-3 text-sm font-black text-purple-950 transition hover:bg-purple-50"
                    >
                      {unit.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <DesktopLink to="/berita">Berita</DesktopLink>
          <DesktopLink to="/ppdb">PPDB</DesktopLink>
          <DesktopLink to="/kontak">Kontak</DesktopLink>
        </nav>

        <Link
          to="/ppdb"
          className="focus-ring hidden items-center gap-2 rounded-lg bg-gradient-to-r from-purple-800 to-violet-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-purple-300/40 transition hover:scale-[1.02] lg:inline-flex"
        >
          <Users size={17} /> Daftar PPDB
        </Link>

        <button
          type="button"
          className="focus-ring grid h-11 w-11 place-items-center rounded-xl border border-purple-100 text-purple-800 lg:hidden"
          aria-label="Buka navigasi"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-purple-100 bg-white px-5 py-4 shadow-soft lg:hidden">
          <nav className="grid gap-2" aria-label="Navigasi mobile">
            {mainLinks.map((item) => (
              <MobileLink key={item.path} to={item.path} onClick={closeMenu}>{item.label}</MobileLink>
            ))}
            <div className="my-2 border-t border-purple-100 pt-3">
              <p className="px-4 text-xs font-black uppercase tracking-[0.16em] text-purple-400">Unit Pendidikan</p>
              {educationUnits.map((unit) => (
                <MobileLink key={unit.id} to={unit.route} onClick={closeMenu}>{unit.name}</MobileLink>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

function DesktopLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `focus-ring rounded-md py-2 transition ${isActive ? 'text-purple-800 underline decoration-purple-600 decoration-2 underline-offset-[14px]' : 'text-slate-700 hover:text-purple-700'}`
      }
    >
      {children}
    </NavLink>
  )
}

function MobileLink({ to, onClick, children }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `rounded-lg px-4 py-3 text-sm font-black ${isActive ? 'bg-purple-50 text-purple-900' : 'text-slate-700'}`
      }
    >
      {children}
    </NavLink>
  )
}


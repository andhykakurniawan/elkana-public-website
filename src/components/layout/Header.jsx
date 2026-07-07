import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { navItems, school } from '../../content'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-elkana-gold/25 bg-elkana-ink/95 text-white backdrop-blur">
      <div className="container-wide flex h-20 items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link to="/" className="focus-ring flex items-center gap-3 rounded-md" onClick={closeMenu}>
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-elkana-pine text-lg font-black text-white">E</span>
          <span>
            <span className="block text-base font-black leading-tight text-white">{school.name}</span>
            <span className="block text-xs font-semibold text-elkana-gold">Sekolah Kristen Terpadu</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
          {navItems.map((item) => (
            <NavItem key={item.path} item={item} />
          ))}
        </nav>

        <Link
          to="/ppdb"
          className="focus-ring hidden items-center gap-2 rounded-md bg-elkana-gold px-4 py-2.5 text-sm font-black text-elkana-ink shadow-sm transition hover:bg-[#e7c95a] lg:inline-flex"
        >
          Daftar PPDB <ArrowRight size={16} />
        </Link>

        <button
          type="button"
          className="focus-ring grid h-11 w-11 place-items-center rounded-md border border-elkana-gold/30 text-white lg:hidden"
          aria-label="Buka navigasi"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-elkana-gold/25 bg-elkana-ink px-5 py-4 shadow-soft lg:hidden">
          <nav className="grid gap-2" aria-label="Navigasi mobile">
            {navItems.map((item) => (
              <NavItem key={item.path} item={item} onClick={closeMenu} mobile />
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

function NavItem({ item, mobile = false, onClick }) {
  return (
    <NavLink
      to={item.path}
      onClick={onClick}
      className={({ isActive }) =>
        mobile
          ? `rounded-md px-4 py-3 text-sm font-bold ${isActive ? 'bg-elkana-gold text-elkana-ink' : 'text-white'}`
          : `focus-ring rounded-md px-3 py-2 text-sm font-bold transition ${
              isActive ? 'bg-elkana-gold text-elkana-ink' : 'text-white hover:bg-white/10'
            }`
      }
    >
      {item.label}
    </NavLink>
  )
}

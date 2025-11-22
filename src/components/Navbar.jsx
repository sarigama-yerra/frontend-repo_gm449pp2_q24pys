import { useState } from 'react'
import { Menu, Instagram } from 'lucide-react'

const Navbar = ({ instagramUrl }) => {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3">
            <img src="/jp-logo.svg" alt="JP Creation" className="h-9 w-9 object-contain"/>
            <span className="text-lg sm:text-xl font-semibold tracking-wide text-white">
              JP Creation
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-white/80 hover:text-white transition">
                {n.label}
              </a>
            ))}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white"
            >
              <Instagram size={18} />
              <span className="hidden lg:inline">Instagram</span>
            </a>
            <a href="#contact" className="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-semibold shadow-[0_0_0_2px_rgba(0,0,0,0.2)_inset] hover:shadow-[0_0_0_2px_rgba(0,0,0,0.2)_inset,0_0_25px_rgba(234,179,8,0.6)] transition">
              Book Consultation
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white/90 p-2">
            <Menu size={24} />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-white/85 hover:bg-white/10">
                {n.label}
              </a>
            ))}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-white/85 hover:bg-white/10"
            >
              <span className="inline-flex items-center gap-2"><Instagram size={18}/> Instagram</span>
            </a>
            <a href="#contact" onClick={() => setOpen(false)} className="block text-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-semibold">
              Book Consultation
            </a>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar

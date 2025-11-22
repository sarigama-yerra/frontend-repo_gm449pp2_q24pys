import { Instagram, Info, AlertTriangle, ExternalLink } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Reviews from './components/Reviews'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  // Use the exact Instagram link provided by the client everywhere on the site
  const instagramUrl = 'https://www.instagram.com/jp_creation_official_?igsh=MXFwcDJ5ZzdvM3dpdg=='

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar instagramUrl={instagramUrl} />
      <main className="pt-16">
        <Hero />
        <Services />
        <Portfolio />
        {/* Move Contact above Reviews as requested */}
        <Contact />
        {/* Place Reviews at the bottom (before footer) */}
        <Reviews />
        <About />
        <footer className="border-t border-white/10 bg-[#0b0b0b]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="space-y-2">
                <p className="text-white/80 text-sm">© {new Date().getFullYear()} JP Creation. All rights reserved.</p>
                <p className="text-white/50 text-xs">Your Dream, Our Creation!</p>
              </div>

              <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
                <a href="#services" className="hover:text-white transition-colors">Services</a>
                <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
                <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
                <a href="#about" className="hover:text-white transition-colors">About</a>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>

                {/* Learn More */}
                <a
                  href="#about"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-white/80 hover:text-white hover:border-white/20 transition-colors"
                  aria-label="Learn more about JP Creation"
                >
                  <Info className="h-4 w-4 text-[#D4AF37]" />
                  <span>Learn More</span>
                </a>

                {/* Report a Problem */}
                <a
                  href="mailto:support@jpcreation.in?subject=Website%20Issue%20Report&body=Describe%20the%20issue%20you%20encountered%20and%20your%20device/browser%20details."
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-white/80 hover:text-white hover:border-white/20 transition-colors"
                  aria-label="Report a problem with the website"
                >
                  <AlertTriangle className="h-4 w-4 text-[#B22234]" />
                  <span>Report a Problem</span>
                </a>

                {/* Instagram */}
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-white/80 hover:text-white hover:border-white/20 transition-colors"
                  aria-label="Visit our Instagram"
                >
                  <Instagram className="h-4 w-4 text-[#4169E1]" />
                  <span>Instagram</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                </a>
              </nav>
            </div>

            {/* subtle divider */}
            <div className="mt-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Social strip */}
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs text-white/50">
                Serving premium weddings & events across India — Gujarat, Mumbai, Rajasthan & beyond.
              </p>

              <div className="flex items-center gap-3">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm text-white/80 hover:text-white transition"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8B0000]/0 via-[#D4AF37]/10 to-[#4169E1]/0 opacity-0 group-hover:opacity-100 transition" />
                  <Instagram className="h-4 w-4" />
                  <span>Follow us</span>
                </a>

                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm text-white/80 hover:text-white transition"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8B0000]/0 via-[#D4AF37]/10 to-[#4169E1]/0 opacity-0 group-hover:opacity-100 transition" />
                  <span>Book Consultation</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App

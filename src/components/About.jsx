import { motion } from 'framer-motion'

const INSTAGRAM_URL = 'https://www.instagram.com/jp_creation_official_?igsh=MXFwcDJ5ZzdvM3dpdg=='

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0b0b0b] to-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">About Us</h2>
            <p className="mt-4 text-white/80">We are Jaimin & Pooja — the duo behind JP Creation. Our mission is simple: craft luxury, stress-free weddings with a high-energy vibe. From Gujarat to Mumbai, Rajasthan to anywhere across India, we bring a regal touch to every celebration.</p>
            <p className="mt-3 text-white/70">With an expert core in DJ entertainment, décor, and choreography, we orchestrate every detail end-to-end so you can live the moment.</p>
            <div className="mt-6">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow hover:shadow-yellow-500/30 transition"
              >
                Follow us on Instagram
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <img src="https://images.unsplash.com/photo-1550937966-fe9f1819a9e2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBYm91dCUyMEpQJTIwQ3JlYXRpb258ZW58MHwwfHx8MTc2MzgwNDE5OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="About JP Creation" className="rounded-xl object-cover h-72 w-full" />
            <div className="absolute inset-0 rounded-xl ring-1 ring-yellow-500/30 pointer-events-none"/>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

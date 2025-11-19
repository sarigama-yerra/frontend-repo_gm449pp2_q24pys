import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0b0b0b] to-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">About Us</h2>
            <p className="mt-4 text-white/80">We are Jaimin & Pooja — the duo behind JP Creation. Our mission is simple: craft luxury, stress-free weddings with a high-energy vibe. From Gujarat to Mumbai, Rajasthan to anywhere across India, we bring a regal touch to every celebration.</p>
            <p className="mt-3 text-white/70">With an expert core in DJ entertainment, décor, and choreography, we orchestrate every detail end-to-end so you can live the moment.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop" alt="About JP Creation" className="rounded-xl object-cover h-72 w-full" />
            <div className="absolute inset-0 rounded-xl ring-1 ring-yellow-500/30 pointer-events-none"/>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

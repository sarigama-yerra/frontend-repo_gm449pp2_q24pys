import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Wedding Decor"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
        >
          Your Dream, Our Creation!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-4 max-w-2xl mx-auto text-white/80"
        >
          Full-Service Wedding & Event Management across India — from high-energy DJ entertainment to luxury décor and flawless choreography.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="inline-block mt-8 px-8 py-3 rounded-full font-semibold text-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow-lg hover:shadow-yellow-500/50 focus:ring-2 focus:ring-yellow-400"
          style={{ boxShadow: '0 0 0 0 rgba(234,179,8,0.7)', animation: 'pulseGlow 2s infinite' }}
        >
          Book Consultation
        </motion.a>
      </motion.div>

      <style>{`
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 0 0 rgba(234,179,8,0.6); }
          70% { box-shadow: 0 0 0 18px rgba(234,179,8,0); }
          100% { box-shadow: 0 0 0 0 rgba(234,179,8,0); }
        }
      `}</style>
    </section>
  )
}

export default Hero

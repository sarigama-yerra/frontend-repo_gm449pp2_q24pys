import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Luxury Indian wedding décor only (no people). Focus: haldi marigolds, red-rose stage, golden mandap,
// candle-lit reception tables, and high-end wedding setups. Images displayed with object-contain to avoid cropping.
const heroImages = [
  {
    title: 'Haldi Marigold Backdrop',
    src: 'https://images.unsplash.com/photo-1724018823034-01004b16455d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIYWxkaSUyME1hcmlnb2xkJTIwQmFja2Ryb3B8ZW58MHwwfHx8MTc2MzgwNzIwM3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Royal Red-Rose Stage Décor',
    src: 'https://images.unsplash.com/photo-1490623970972-ae8bb3da443e?q=80&auto=format&fit=max&w=2400',
  },
  {
    title: 'Golden Mandap Design',
    src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&auto=format&fit=max&w=2400',
  },
  {
    title: 'Candle‑Lit Reception Tables',
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&auto=format&fit=max&w=2400',
  },
  {
    title: 'High‑End Wedding Setup',
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&auto=format&fit=max&w=2400',
  },
]

const Hero = () => {
  const [index, setIndex] = useState(0)

  // Cycle through images every 6 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroImages[index].src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full flex items-center justify-center"
         >
            <img
              src={heroImages[index].src}
              alt={heroImages[index].title}
              className="max-h-full w-auto object-contain"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/60" />
        {/* Bottom-left label for current décor */}
        <div className="absolute left-4 bottom-4">
          <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs sm:text-sm text-white border border-white/20 shadow-sm">
            {heroImages[index].title}
          </span>
        </div>
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

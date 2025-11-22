import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Curated Indian cultural wedding photos matching the rituals mentioned
const heroImages = [
  {
    title: 'Mehndi Ceremony',
    src: 'https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?q=80&w=2100&auto=format&fit=crop',
  },
  {
    title: 'Haldi Ritual',
    src: 'https://images.unsplash.com/photo-1684813910513-11e6b30adc22?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNZWhuZGklMjBDZXJlbW9ueXxlbnwwfDB8fHwxNzYzODAxMjk2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Sangeet Night',
    src: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2100&auto=format&fit=crop',
  },
  {
    title: 'Baraat',
    src: 'https://images.unsplash.com/photo-1752718315661-20e1472d91b3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYW5nZWV0JTIwTmlnaHR8ZW58MHwwfHx8MTc2MzgwMTI5N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Pheras (Vows)',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2100&auto=format&fit=crop',
  },
  {
    title: 'Jaimala Exchange',
    src: 'https://images.unsplash.com/photo-1519741499535-922d19b5be89?q=80&w=2100&auto=format&fit=crop',
  },
  {
    title: 'Mandap Décor',
    src: 'https://images.unsplash.com/photo-1533145862815-f4059758ae5f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxKYWltYWxhJTIwRXhjaGFuZ2V8ZW58MHwwfHx8MTc2MzgwMTI5OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Reception Elegance',
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2100&auto=format&fit=crop',
  },
  {
    title: 'Bridal Detail',
    src: 'https://images.unsplash.com/photo-1759038085950-1234ca8f5fed?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZWNlcHRpb24lMjBFbGVnYW5jZXxlbnwwfDB8fHwxNzYzODAxMjk4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Couple Portrait',
    src: 'https://images.unsplash.com/photo-1631687688319-ffd10d7e530b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCcmlkYWwlMjBEZXRhaWx8ZW58MHwwfHx8MTc2MzgwMTI5OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
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
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={heroImages[index].src}
            src={heroImages[index].src}
            alt={heroImages[index].title}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0.2, scale: 1.06 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/60" />
        {/* Bottom-left label for current ritual */}
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

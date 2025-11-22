import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

// Curated gallery: elegant Indian wedding/event visuals (no fitness/bodybuilder imagery)
const gallery = [
  {
    title: 'Bridal Mehndi Detail',
    src:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Haldi Ritual',
    src:
      'https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Sangeet Night',
    src:
      'https://images.unsplash.com/photo-1519741499535-922d19b5be89?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Mandap Décor',
    src:
      'https://images.unsplash.com/photo-1545153996-0e2b45a0b06a?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Wedding Rings',
    src:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Floral Details',
    src:
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Reception Elegance',
    src:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Table Setting',
    src:
      'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Baraat',
    src:
      'https://images.unsplash.com/photo-1520975605364-81142b7af0c5?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Couple Portrait',
    src:
      'https://images.unsplash.com/photo-1520975682031-e9b5f1d8b3a6?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Stage Decor',
    src:
      'https://images.unsplash.com/photo-1547887538-047f8148875d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Cultural Details',
    src:
      'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=2070&auto=format&fit=crop',
  },
]

const INSTAGRAM_URL = 'https://www.instagram.com/jp_creation_official_?igsh=MXFwcDJ5ZzdvM3dpdg=='

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) controls.start('show')
  }, [isInView, controls])

  return (
    <section id="portfolio" className="py-20 bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Portfolio</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Rituals to reception — a curated glimpse of Indian wedding moments we bring to life.
          </p>
        </div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {gallery.map((item, i) => (
            <motion.figure
              key={i}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="relative overflow-hidden rounded-xl group"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
              {/* label chip */}
              <figcaption className="absolute bottom-3 left-3">
                <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur px-3 py-1 text-sm text-white border border-white/20 shadow-sm">
                  {item.title}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        {/* Instagram CTA */}
        <div className="mt-10 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow hover:shadow-yellow-500/30 transition"
          >
            See more on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio

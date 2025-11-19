import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1521334726092-b509a19597c6?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1546778316-dfda79f1c5d5?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?q=80&w=1974&auto=format&fit=crop',
]

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
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">A glimpse of our elegant décor, electrifying performances, and timeless moments.</p>
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
          {images.map((src, i) => (
            <motion.div key={i} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="relative overflow-hidden rounded-xl group">
              <img src={src} alt="Gallery" className="w-full h-64 object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Décor Portfolio</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Explore our luxury Indian wedding décor highlights on Instagram.
          </p>
        </div>

        {/* Removed bottom pictures grid as requested */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-8 text-center"
        >
          <p className="text-white/80">
            We're keeping the page clean without the photo grid. Tap below to see full galleries and reels.
          </p>
        </motion.div>

        {/* Instagram CTA */}
        <div className="mt-10 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow hover:shadow-yellow-500/30 transition"
          >
            See more décor on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio

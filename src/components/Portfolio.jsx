import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

// Portfolio: strictly full-body Indian wedding couples or solo, head-to-toe
const gallery = [
  { title: 'Bride + Groom Standing (Full-Body)', src: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&auto=format&fit=max&w=2000' },
  { title: 'Bride Solo Full-Body', src: 'https://images.unsplash.com/photo-1627364155535-9ed50e63aece?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCcmlkZSUyMCUyQiUyMEdyb29tJTIwU3RhbmRpbmd8ZW58MHwwfHx8MTc2MzgwNjkyNHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { title: 'Groom Solo Full-Body', src: 'https://images.unsplash.com/photo-1627364155535-9ed50e63aece?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCcmlkZSUyMCUyQiUyMEdyb29tJTIwU3RhbmRpbmd8ZW58MHwwfHx8MTc2MzgwNjkyNHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { title: 'Haldi Ceremony Full-Body', src: 'https://images.unsplash.com/photo-1627364155535-9ed50e63aece?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCcmlkZSUyMCUyQiUyMEdyb29tJTIwU3RhbmRpbmd8ZW58MHwwfHx8MTc2MzgwNjkyNHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { title: 'Sangeet Dance Full-Body', src: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&auto=format&fit=max&w=2000' },
  { title: 'Varmala Exchange Full-Body', src: 'https://images.unsplash.com/photo-1627364155535-9ed50e63aece?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCcmlkZSUyMCUyQiUyMEdyb29tJTIwU3RhbmRpbmd8ZW58MHwwfHx8MTc2MzgwNjkyNHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { title: 'Mandap Pheras Full-Body', src: 'https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?q=80&auto=format&fit=max&w=2000' },
  { title: 'Candid Walking Couple Full-Body', src: 'https://images.unsplash.com/photo-1745270008562-318fb7dbfe1a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHcm9vbSUyMFNvbG8lMjBGdWxsLUJvZHl8ZW58MHwwfHx8MTc2MzgwNjkyNnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { title: 'Bridal Entry Full-Body', src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&auto=format&fit=max&w=2000' },
  { title: 'Vidaai Full-Body', src: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&auto=format&fit=max&w=2000' },
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
            Head-to-toe frames only — elegant, culturally-rooted moments across the wedding journey.
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
              className="relative overflow-hidden rounded-xl group bg-black flex items-center justify-center"
            >
              <img
                src={item.src}
                alt={item.title}
                className="max-h-80 w-auto object-contain transition duration-700 group-hover:scale-[1.02]"
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

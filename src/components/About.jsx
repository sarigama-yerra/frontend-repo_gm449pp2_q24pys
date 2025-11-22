import { motion } from 'framer-motion'

const INSTAGRAM_URL = 'https://www.instagram.com/jp_creation_official_?igsh=MXFwcDJ5ZzdvM3dpdg=='

const items = [
  {
    title: 'Couple Portrait',
    subtitle: 'Traditional Indian attire',
    desc:
      'Timeless portraits that honor heritage and style — regal silhouettes, handcrafted textiles, and intimate chemistry captured with grace.',
    img:
      'https://images.unsplash.com/photo-1618291526018-cac5400e1a54?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Baraat Procession',
    subtitle: 'Arrival in celebration',
    desc:
      'Energy, music, and movement — we frame the groom’s grand arrival with family, friends, and traditional rhythms.',
    img:
      'https://images.unsplash.com/photo-1520975605364-81142b7af0c5?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Mandap Decoration',
    subtitle: 'Sacred space design',
    desc:
      'An elegant mandap sets the tone — florals, fabrics, and lighting curated to reflect your family traditions.',
    img:
      'https://images.unsplash.com/photo-1547887538-047f8148875d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Sangeet Night',
    subtitle: 'Music, dance, joy',
    desc:
      'A vibrant evening of choreography and candid laughter — we preserve the sparkle, movement, and color.',
    img:
      'https://images.unsplash.com/photo-1519741499535-922d19b5be89?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Haldi Ritual',
    subtitle: 'Yellow theme',
    desc:
      'Turmeric, marigolds, and golden light — pure emotion in a palette of sunny hues.',
    img:
      'https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Varmala / Jaimala Exchange',
    subtitle: 'Garlands and promises',
    desc:
      'A tender exchange of warmth and respect — captured with elegant framing and soft tones.',
    img:
      'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Pheras Around Agni',
    subtitle: 'Close shots',
    desc:
      'The sacred fire as witness — intimate close-ups of vows, rituals, and blessings.',
    img:
      'https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Bridal Mehndi',
    subtitle: 'Hands & Feet',
    desc:
      'Intricate henna patterns, heirloom jewelry, and delicate textures — every detail in refined focus.',
    img:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Bridal Entry',
    subtitle: 'A royal arrival',
    desc:
      'An unforgettable walk framed by family and tradition — soft light, gentle motion, and heartfelt smiles.',
    img:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Vidaai Farewell',
    subtitle: 'Emotional moment',
    desc:
      'Tears, embraces, and blessings — we document the tenderness of new beginnings with sensitivity.',
    img:
      'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=2070&auto=format&fit=crop',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0b0b0b] to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">About Our Craft</h2>
          <p className="mt-4 text-white/80 max-w-3xl mx-auto">
            We tell Indian wedding stories with elegance and soul — honoring culture, family, and the beauty of every ritual.
          </p>
        </motion.div>

        <div className="space-y-16">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Photo on left */}
              <div className="relative order-1 md:order-1">
                <img
                  src={it.img}
                  alt={`${it.title} — ${it.subtitle}`}
                  className="w-full h-72 sm:h-80 lg:h-96 object-cover rounded-xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-yellow-500/20" />
              </div>

              {/* Description on right */}
              <div className="order-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {it.title}
                </h3>
                <p className="text-yellow-400/90 mt-1">{it.subtitle}</p>
                <p className="mt-4 text-white/80 leading-relaxed">
                  {it.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow hover:shadow-yellow-500/30 transition"
          >
            Explore more on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default About

import { motion } from 'framer-motion'

const INSTAGRAM_URL = 'https://www.instagram.com/jp_creation_official_?igsh=MXFwcDJ5ZzdvM3dpdg=='

// Strictly full-body selections, minimal cropping with object-contain
const items = [
  {
    title: 'Bride + Groom Standing',
    subtitle: 'Traditional Indian attire',
    desc:
      'Elegant, head-to-toe portraits celebrating attire, posture, and presence — classic framing with refined light.',
    img:
      'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Bride Solo Portrait',
    subtitle: 'Full-body bridal elegance',
    desc:
      'Graceful silhouettes, flowing lehengas, and heirloom jewelry — the bride’s full look, captured with poise.',
    img:
      'https://images.unsplash.com/photo-1519741499535-922d19b5be89?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Groom Solo Portrait',
    subtitle: 'Full-body sherwani look',
    desc:
      'Regal stance and tailored details — a composed, full-length portrait honoring tradition and style.',
    img:
      'https://images.unsplash.com/photo-1520975682031-e9b5f1d8b3a6?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Haldi Ceremony',
    subtitle: 'Full-body, yellow theme',
    desc:
      'Joyful, sunlit frames — marigolds, turmeric, and laughter in a candid, head-to-toe composition.',
    img:
      'https://images.unsplash.com/photo-1605758265312-30a1f1f8432e?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Sangeet Dance',
    subtitle: 'Full-body dance moments',
    desc:
      'Rhythm and movement preserved in wide, un-cropped frames — color, energy, and celebration.',
    img:
      'https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Varmala Exchange',
    subtitle: 'Full-body garland ceremony',
    desc:
      'A timeless exchange of garlands — elegant perspective ensuring both partners are framed head-to-toe.',
    img:
      'https://images.unsplash.com/photo-1545153996-0e2b45a0b06a?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Mandap Pheras',
    subtitle: 'Full-body around agni',
    desc:
      'Sacred vows in complete view — the couple and mandap fully framed with reverent composition.',
    img:
      'https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Candid Walking',
    subtitle: 'Full-body couple moment',
    desc:
      'Natural steps, shared glances — a cinematic stroll beautifully centered to keep the look intact.',
    img:
      'https://images.unsplash.com/photo-1520975605364-81142b7af0c5?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Bridal Entry',
    subtitle: 'Full-body royal arrival',
    desc:
      'Elevated entrance with family — a wide, head-to-toe frame capturing grace and anticipation.',
    img:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Vidaai Farewell',
    subtitle: 'Full-body emotional send-off',
    desc:
      'Tender goodbyes in a complete frame — emotion, attire, and setting honored without cropping.',
    img:
      'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=2000&auto=format&fit=crop',
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
                <div className="w-full h-[28rem] sm:h-[32rem] bg-black/60 rounded-xl flex items-center justify-center overflow-hidden shadow-2xl">
                  <img
                    src={it.img}
                    alt={`${it.title} — ${it.subtitle}`}
                    className="max-h-full w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 rounded-xl ring-1 ring-yellow-500/20 pointer-events-none" />
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

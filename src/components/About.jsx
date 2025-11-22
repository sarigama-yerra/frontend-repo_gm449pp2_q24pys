import { motion } from 'framer-motion'

const INSTAGRAM_URL = 'https://www.instagram.com/jp_creation_official_?igsh=MXFwcDJ5ZzdvM3dpdg=='

// Luxury Indian wedding décor only (no people). Focus categories: haldi marigolds, red-rose stage, golden mandap,
// candle-lit reception tables, high-end wedding setups. Images centered with object-contain.
const items = [
  {
    title: 'Haldi Marigold Wall',
    subtitle: 'Vibrant turmeric & genda décor',
    desc:
      'Immersive haldi ambience with dense marigold strings, brass urlis, and handcrafted motifs — bold, festive, and photogenic.',
    img:
      'https://images.unsplash.com/photo-1602664305129-3eb9bb2a1f6b?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Royal Red‑Rose Stage',
    subtitle: 'Opulent rose‑laden backdrop',
    desc:
      'A sculpted stage framed in deep red roses and gold accents — a regal palette that defines grand entrances.',
    img:
      'https://images.unsplash.com/photo-1490623970972-ae8bb3da443e?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Golden Mandap',
    subtitle: 'Carved pillars & silk drapes',
    desc:
      'A luminous mandap with ornate pillars, chrysanthemum garlands, and warm lighting — classic yet contemporary.',
    img:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Candle‑Lit Tablescape',
    subtitle: 'Crystal, candles, & florals',
    desc:
      'Reception tables styled with crystal stemware, gold flatware, and layered candles for intimate, upscale warmth.',
    img:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Luxury Venue Setup',
    subtitle: 'Grand aisle & ceiling florals',
    desc:
      'A high‑end ceremony setup featuring floral ceilings, mirrored aisles, and balanced ambient lighting.',
    img:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Floral Entrance Arch',
    subtitle: 'Statement arrival gateway',
    desc:
      'An immersive entry arch with layered blooms and lanterns — setting the tone for a refined celebration.',
    img:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Golden Aisle & Stage',
    subtitle: 'Refined symmetry & glow',
    desc:
      'A meticulously planned aisle leading to a rose‑gold stage — symmetry and sheen for a luxe visual.',
    img:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Haldi Floral Installations',
    subtitle: 'Marigold strings & brass',
    desc:
      'Dramatic haldi backdrops with textured marigold curtains and traditional vessels for photogenic frames.',
    img:
      'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Reception Centerpieces',
    subtitle: 'Candles, roses, & crystal',
    desc:
      'Tall centerpieces with dripping candles and premium florals — elevated romance for evening receptions.',
    img:
      'https://images.unsplash.com/photo-1514511715-1b3d6e4b71c1?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Mandap Canopy Details',
    subtitle: 'Drapes, garlands, & gold',
    desc:
      'Close‑ups of canopy textiles and floral tie‑backs — attention to materiality that defines luxury.',
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">About Our Décor</h2>
          <p className="mt-4 text-white/80 max-w-3xl mx-auto">
            Curated, professional‑grade visuals that showcase luxury Indian wedding décor — from haldi marigolds to golden mandaps and candle‑lit receptions.
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
            Explore more décor on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default About

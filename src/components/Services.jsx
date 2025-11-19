import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Music, Sparkles, CalendarDays, PartyPopper, Camera, Hotel, UtensilsCrossed, Crown, Settings, CheckCircle2 } from 'lucide-react'

const services = [
  { title: 'Wedding Planning', icon: CalendarDays, desc: 'End-to-end planning, budgeting, vendor coordination and timeline management.' },
  { title: 'Décor & Theme Design', icon: Sparkles, desc: 'Regal décor concepts with deep gold, ivory, and burgundy/royal blue accents.' },
  { title: 'DJ & Live Entertainment', icon: Music, desc: 'High-energy DJ sets, live percussion, dhol & curated artist lineup.' },
  { title: 'Wedding & Sangeet Choreography', icon: PartyPopper, desc: 'Personalized choreography and rehearsals for families & friends.' },
  { title: 'Photography & Videography', icon: Camera, desc: 'Top-tier teams capturing cinematic memories with precision.' },
  { title: 'Hospitality', icon: Hotel, desc: 'Guest logistics, check-ins, travel coordination and concierge support.' },
  { title: 'Catering', icon: UtensilsCrossed, desc: 'Curated menus across regional & global cuisines with premium service.' },
  { title: 'Bride & Groom Special', icon: Crown, desc: 'Grand entries, special moments and bespoke experiences for the couple.' },
  { title: 'Technical Setup', icon: Settings, desc: 'Stage, truss, lighting, LED walls, sound — engineered to perfection.' },
  { title: 'Complete Event Execution', icon: CheckCircle2, desc: 'On-ground operations with flawless end-to-end management.' },
]

const ServiceCard = ({ Icon, title, desc, delay }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) controls.start({ opacity: 1, y: 0 })
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className="group rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-yellow-500/40 transition transform hover:scale-[1.02] hover:bg-white/10"
    >
      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 text-yellow-400 group-hover:from-yellow-400/30 group-hover:to-yellow-600/30 transition">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/75">{desc}</p>
    </motion.div>
  )
}

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black via-[#0b0b0b] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Our Services</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Premium, stress-free wedding experiences across Gujarat, Mumbai, Rajasthan, and nationwide.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} Icon={s.icon} title={s.title} desc={s.desc} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

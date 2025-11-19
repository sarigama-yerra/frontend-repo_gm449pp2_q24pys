import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! We will reach out shortly.')
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Contact Us</h2>
          <p className="mt-3 text-white/70">Tell us about your event — we’ll craft a spectacular plan.</p>
        </div>
        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white/5 border border-white/10 rounded-2xl p-6">
          <div>
            <label className="block text-sm text-white/80">Full Name</label>
            <input required className="mt-2 w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/50" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-sm text-white/80">Email</label>
            <input type="email" required className="mt-2 w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/50" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm text-white/80">Phone</label>
            <input className="mt-2 w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/50" placeholder="+91-" />
          </div>
          <div>
            <label className="block text-sm text-white/80">Event Date</label>
            <input type="date" required className="mt-2 w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/50" />
          </div>
          <div>
            <label className="block text-sm text-white/80">Location</label>
            <input required className="mt-2 w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/50" placeholder="City / Venue" />
          </div>
          <div>
            <label className="block text-sm text-white/80">Guest Count</label>
            <input type="number" min="10" className="mt-2 w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/50" placeholder="e.g. 300" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-white/80">Message</label>
            <textarea rows="4" className="mt-2 w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/50" placeholder="Tell us more about your vision" />
          </div>
          <div className="sm:col-span-2 flex items-center justify-between">
            <p className="text-sm text-white/70">We usually respond within 24 hours.</p>
            <button className="px-6 py-2 rounded-full font-semibold text-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600" type="submit">Submit</button>
          </div>
          {status && <p className="sm:col-span-2 text-green-400">{status}</p>}
        </motion.form>
      </div>
    </section>
  )
}

export default Contact

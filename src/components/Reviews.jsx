import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, StarHalf, Star as StarOutline, Instagram } from 'lucide-react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || ''

const Stars = ({ rating = 5 }) => {
  const full = Math.floor(rating)
  const hasHalf = rating - full >= 0.5
  const empty = 5 - full - (hasHalf ? 1 : 0)
  return (
    <div className="flex items-center gap-0.5 text-yellow-400" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f-${i}`} size={16} fill="currentColor" className="text-yellow-400" />
      ))}
      {hasHalf && <StarHalf size={16} className="text-yellow-400" />}
      {Array.from({ length: empty }).map((_, i) => (
        <StarOutline key={`e-${i}`} size={16} className="text-yellow-400 opacity-40" />
      ))}
    </div>
  )
}

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({ name: '', rating: 5, message: '', event_type: '', instagram: '' })
  const [status, setStatus] = useState('')

  const fetchReviews = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${baseUrl}/api/reviews?limit=12`)
      const data = await res.json()
      setReviews(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchReviews()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('')
    try {
      const res = await fetch(`${baseUrl}/api/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          rating: Number(form.rating),
          message: form.message,
          event_type: form.event_type || undefined,
          instagram: form.instagram || undefined,
        }),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('Thank you for your review!')
      setForm({ name: '', rating: 5, message: '', event_type: '', instagram: '' })
      fetchReviews()
    } catch (e) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="reviews" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Client Reviews</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Real experiences from couples and families weve celebrated with.</p>
        </div>

        {/* List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {loading && (
            <div className="md:col-span-2 lg:col-span-3 text-center text-white/70">Loading reviews</div>
          )}
          {!loading && reviews.length === 0 && (
            <div className="md:col-span-2 lg:col-span-3 text-center text-white/70">No reviews yet  be the first to share your experience!</div>
          )}
          {!loading && reviews.map((r, i) => (
            <motion.div
              key={r.id || i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="rounded-2xl p-5 bg-white/5 border border-white/10 hover:border-yellow-500/40 transition"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-white">{r.name}</p>
                  <div className="mt-1"><Stars rating={r.rating} /></div>
                </div>
                {r.instagram && (
                  <a href={`https://instagram.com/${r.instagram.replace('@','')}`} target="_blank" rel="noopener noreferrer" aria-label="View on Instagram" className="text-white/70 hover:text-white">
                    <Instagram size={18} />
                  </a>
                )}
              </div>
              {r.event_type && <p className="mt-2 text-xs text-white/50">Event: {r.event_type}</p>}
              <p className="mt-3 text-white/80 text-sm leading-relaxed">{r.message}</p>
            </motion.div>
          ))}
        </div>

        {/* Form */}
        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 border border-white/10 rounded-2xl p-6">
          <div>
            <label className="block text-sm text-white/80">Your Name</label>
            <input required value={form.name} onChange={(e)=>setForm({ ...form, name: e.target.value })} className="mt-2 w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/50" placeholder="Full name" />
          </div>
          <div>
            <label className="block text-sm text-white/80">Rating</label>
            <select value={form.rating} onChange={(e)=>setForm({ ...form, rating: e.target.value })} className="mt-2 w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/50">
              {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} Star{n>1?'s':''}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm text-white/80">Event Type (optional)</label>
            <input value={form.event_type} onChange={(e)=>setForm({ ...form, event_type: e.target.value })} className="mt-2 w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/50" placeholder="Wedding / Sangeet / Reception" />
          </div>
          <div>
            <label className="block text-sm text-white/80">Instagram (optional)</label>
            <input value={form.instagram} onChange={(e)=>setForm({ ...form, instagram: e.target.value })} className="mt-2 w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/50" placeholder="@yourhandle" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-white/80">Your Review</label>
            <textarea required rows="4" value={form.message} onChange={(e)=>setForm({ ...form, message: e.target.value })} className="mt-2 w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/50" placeholder="Share your experience" />
          </div>
          <div className="md:col-span-2 flex items-center justify-between">
            <p className="text-sm text-white/70">Thank you for trusting JP Creation.</p>
            <button className="px-6 py-2 rounded-full font-semibold text-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600" type="submit">Submit Review</button>
          </div>
          {status && <p className="md:col-span-2 text-green-400">{status}</p>}
        </motion.form>
      </div>
    </section>
  )
}

export default Reviews

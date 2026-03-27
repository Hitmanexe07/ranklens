import LegalLayout from '../components/LegalLayout'
import { useState } from 'react'

// PLACEHOLDER: Replace this with a real form endpoint.
// Options: Formspree (https://formspree.io), Netlify Forms, EmailJS, etc.
const FORM_ENDPOINT = '#'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields.')
      return
    }
    // PLACEHOLDER: Wire up your form submission here.
    // e.g., fetch(FORM_ENDPOINT, { method: 'POST', body: new FormData(e.target) })
    setSubmitted(true)
  }

  return (
    <LegalLayout title="Contact Us" lastUpdated={null}>
      <div className="grid md:grid-cols-[1fr_300px] gap-10">
        {/* Form column */}
        <div>
          <p className="text-slate-600 leading-relaxed mb-8">
            Have a question, found an error, or want to report something? We read every message and
            aim to respond within 2 business days.
          </p>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-emerald-900 mb-2">Message sent!</h3>
              <p className="text-emerald-700 text-sm">
                Thanks for reaching out. We'll get back to you within 2 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="name">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="email">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="subject">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-sm"
                >
                  <option value="">Select a subject…</option>
                  <option value="general">General question</option>
                  <option value="correction">Report an error or correction</option>
                  <option value="editorial">Editorial / review feedback</option>
                  <option value="partnership">Partnership inquiry</option>
                  <option value="advertising">Advertising inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="message">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here…"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-sm resize-none"
                />
              </div>

              {error && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-3 rounded-xl">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors text-sm"
              >
                Send Message
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>

              <p className="text-xs text-slate-400">
                <span className="text-red-400">*</span> Required fields.
                By submitting this form you agree to our{' '}
                <a href="/privacy-policy" className="text-indigo-500 hover:underline">Privacy Policy</a>.
              </p>
            </form>
          )}
        </div>

        {/* Info sidebar */}
        <div className="space-y-5">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h3 className="font-bold text-slate-900 mb-4">Contact information</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-slate-700 mb-0.5">Email</div>
                  <a href="mailto:hello@ranklens.com" className="text-indigo-600 hover:underline">
                    [YOUR EMAIL ADDRESS]
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-slate-700 mb-0.5">Response time</div>
                  <div className="text-slate-500">Within 2 business days</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h3 className="font-bold text-slate-900 mb-3">What to include</h3>
            <ul className="text-sm text-slate-500 space-y-2">
              {[
                'The page or article you\'re referring to',
                'The specific section or claim in question',
                'Your feedback or correction',
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <p className="text-xs text-amber-700 leading-relaxed">
              <strong>Vendor/PR inquiries:</strong> We do not accept paid placements, sponsored reviews, or
              commissions in exchange for editorial coverage. See our{' '}
              <a href="/editorial-guidelines" className="underline">Editorial Guidelines</a>.
            </p>
          </div>
        </div>
      </div>
    </LegalLayout>
  )
}

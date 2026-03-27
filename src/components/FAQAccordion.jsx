import { useState } from 'react'

/**
 * FAQAccordion — Reusable FAQ section
 * @param {Array<{q: string, a: string}>} items
 */
export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-slate-200 rounded-xl overflow-hidden bg-white"
        >
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors group"
            aria-expanded={openIndex === i}
          >
            <span className="font-semibold text-slate-900 pr-4 leading-snug">
              {item.q}
            </span>
            <span
              className={`flex-shrink-0 w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center transition-transform ${
                openIndex === i ? 'rotate-180' : ''
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>

          {openIndex === i && (
            <div className="px-6 pb-5 border-t border-slate-100">
              <p className="text-slate-600 leading-relaxed pt-4">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

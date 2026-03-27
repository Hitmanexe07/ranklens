import { Link } from 'react-router-dom'

/**
 * Shared layout wrapper for all legal/info pages.
 * Props: title, lastUpdated, children
 */
export default function LegalLayout({ title, lastUpdated, children }) {
  return (
    <div className="bg-white min-h-screen">
      {/* Page header */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
            <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-slate-700 font-medium">{title}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{title}</h1>
          {lastUpdated && (
            <p className="text-sm text-slate-500">Last updated: {lastUpdated}</p>
          )}
        </div>
      </div>

      {/* Page content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose-legal">
          {children}
        </div>
      </div>
    </div>
  )
}

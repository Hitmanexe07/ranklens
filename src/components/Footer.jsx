import { Link } from 'react-router-dom'

const currentYear = new Date().getFullYear()

// AFFILIATE LINK: Replace href with your Semrush affiliate link
const AFFILIATE_HREF = '#affiliate-link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-indigo-500 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">
                Tools<span className="text-indigo-400">TestLab</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Honest, independent software reviews for entrepreneurs, marketers,
              agencies, and small business owners. We test the tools — you make
              better decisions.
            </p>
            <p className="text-xs text-slate-500">
              Est. 2019 &middot; 40+ tools reviewed &middot; Updated quarterly
            </p>
          </div>

          {/* Pages column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Pages
            </h3>
            <ul className="space-y-2.5">
              <li><Link to="/" className="text-sm text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/semrush-vs-ahrefs" className="text-sm text-slate-400 hover:text-white transition-colors">Semrush vs Ahrefs</Link></li>
              <li><Link to="/semrush-review" className="text-sm text-slate-400 hover:text-white transition-colors">Semrush Review</Link></li>
              <li><Link to="/best-seo-tool-small-business" className="text-sm text-slate-400 hover:text-white transition-colors">Best SEO Tools</Link></li>
            </ul>
          </div>

          {/* Top Reviews column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Top Reviews
            </h3>
            <ul className="space-y-2.5">
              <li><Link to="/semrush-review" className="text-sm text-slate-400 hover:text-white transition-colors">Semrush Review</Link></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Ahrefs Review <span className="text-xs text-slate-600">(coming soon)</span></a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Moz Review <span className="text-xs text-slate-600">(coming soon)</span></a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">SE Ranking Review <span className="text-xs text-slate-600">(coming soon)</span></a></li>
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Legal &amp; Info
            </h3>
            <ul className="space-y-2.5">
              <li><Link to="/privacy-policy" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link to="/affiliate-disclosure" className="text-sm text-slate-400 hover:text-white transition-colors">Affiliate Disclosure</Link></li>
              <li><Link to="/editorial-guidelines" className="text-sm text-slate-400 hover:text-white transition-colors">Editorial Guidelines</Link></li>
              <li><Link to="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Affiliate Disclosure Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-slate-500 leading-relaxed max-w-4xl">
            <strong className="text-slate-400">Affiliate Disclosure:</strong> ToolsTestLab is reader-supported. When you
            purchase through links on our site, we may earn an affiliate commission at no extra cost to you. This helps
            us keep our reviews free, independent, and regularly updated. We only recommend tools we've personally tested
            and genuinely believe provide value. Our editorial opinions are never influenced by affiliate relationships.{' '}
            <Link to="/editorial-guidelines" className="text-indigo-400 hover:text-indigo-300 underline">Learn more about how we review tools.</Link>
          </p>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-600">
            &copy; {currentYear} ToolsTestLab. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Privacy</Link>
            <Link to="/terms" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Terms</Link>
            <Link to="/contact" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

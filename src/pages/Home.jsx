import { Link } from 'react-router-dom'

// AFFILIATE LINK: Replace with your Semrush affiliate URL
const AFFILIATE_HREF = '#affiliate-link'

const featuredPages = [
  {
    tag: 'Comparison',
    tagColor: 'text-violet-700 bg-violet-50 border-violet-200',
    icon: (
      <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Semrush vs Ahrefs',
    subtitle: 'For Small Businesses in 2026',
    description:
      'An in-depth side-by-side comparison of features, pricing, and use cases to help you pick the right SEO tool.',
    cta: 'Read Comparison',
    href: '/semrush-vs-ahrefs',
    internal: true,
  },
  {
    tag: 'Review',
    tagColor: 'text-indigo-700 bg-indigo-50 border-indigo-200',
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: 'Semrush Review',
    subtitle: 'Honest Beginner Guide for 2026',
    description:
      'A comprehensive hands-on review covering features, pricing, pros, cons, and who should actually use Semrush.',
    cta: 'Read Review',
    href: '/semrush-review',
    internal: true,
  },
  {
    tag: 'Best Picks',
    tagColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Best SEO Tool for Small Business',
    subtitle: 'Top Picks & Buyer Guide for 2026',
    description:
      'Our ranked list of the best SEO tools for small businesses, with a detailed buyer checklist and comparison table.',
    cta: 'See Best Picks',
    href: '/best-seo-tool-small-business',
    internal: true,
  },
]

const reviewProcess = [
  {
    step: '01',
    title: 'We purchase every tool',
    desc: 'No vendor-gifted accounts. We buy real subscriptions so we experience exactly what paying customers do.',
  },
  {
    step: '02',
    title: 'We test across 8 criteria',
    desc: 'Features, accuracy, UX, support, pricing, integrations, learning curve, and value for money.',
  },
  {
    step: '03',
    title: 'We compare against competitors',
    desc: 'Every tool is benchmarked against the best alternatives at the same price point.',
  },
  {
    step: '04',
    title: 'We update quarterly',
    desc: 'Tools change fast. We revisit every review at least once per quarter to keep scores current.',
  },
]

const trustPoints = [
  'No sponsored placements or paid rankings',
  'We buy and test tools with our own money',
  'Independent scoring rubric — never influenced by vendors',
  'Full editorial independence guaranteed',
  'Transparent affiliate disclosure on every page',
  'Corrections policy: mistakes are fixed promptly and noted',
]

export default function Home() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 30% 50%, #6366f1 0%, transparent 60%), radial-gradient(circle at 70% 30%, #4f46e5 0%, transparent 50%)'}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
            Updated for 2026 — New pricing & feature data
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl mx-auto">
            We test SEO tools so you{' '}
            <span className="text-indigo-400">don't have to</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
            Independent software reviews and comparisons for entrepreneurs, marketers, agencies, and small business owners.
            No sponsored rankings. No fluff. Just honest analysis.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="/semrush-review"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors text-base"
            >
              Browse Reviews
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/semrush-vs-ahrefs"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-colors text-base"
            >
              Compare Tools
            </Link>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            {['40+ tools reviewed', '200K+ monthly readers', 'Updated quarterly', 'No sponsored rankings'].map(t => (
              <span key={t} className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PAGES ───────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Start with our most popular guides
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Hundreds of thousands of readers use ToolsTestLab to make confident software decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredPages.map(page => (
              <div key={page.title} className="group bg-white border border-slate-200 rounded-2xl p-7 hover:shadow-lg hover:border-slate-300 transition-all">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    {page.icon}
                  </div>
                  <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full border ${page.tagColor}`}>
                    {page.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{page.title}</h3>
                <p className="text-sm text-indigo-600 font-medium mb-3">{page.subtitle}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{page.description}</p>
                <Link
                  to={page.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  {page.cta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW WE REVIEW ────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="badge-indigo mb-3">Our process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How we evaluate every tool
            </h2>
            <p className="text-slate-500 text-lg">
              Our review methodology is designed for transparency and consistency. Every tool goes through the same
              rigorous process before it earns a recommendation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviewProcess.map(item => (
              <div key={item.step} className="bg-white rounded-2xl border border-slate-200 p-6">
                <div className="text-4xl font-black text-indigo-100 mb-3">{item.step}</div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY TRUST US ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-green mb-3">Editorial independence</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
                Why you can trust ToolsTestLab
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                The SEO software space is crowded with paid-placement "best of" lists and vendor-funded content.
                ToolsTestLab was built from day one to be different: financially sustainable through honest affiliate
                relationships, but editorially independent from any vendor.
              </p>
              <ul className="space-y-3">
                {trustPoints.map(point => (
                  <li key={point} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-600 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '40+', label: 'Tools Reviewed', desc: 'across SEO, content, and analytics' },
                { value: '200K+', label: 'Monthly Readers', desc: 'marketers and business owners' },
                { value: '6 yrs', label: 'Testing Experience', desc: 'reviewing software since 2019' },
                { value: '100%', label: 'Editorial Independence', desc: 'no vendor influence, ever' },
              ].map(stat => (
                <div key={stat.value} className="bg-slate-50 rounded-2xl border border-slate-200 p-5">
                  <div className="text-3xl font-black text-indigo-600 mb-1">{stat.value}</div>
                  <div className="font-semibold text-slate-900 text-sm mb-1">{stat.label}</div>
                  <div className="text-xs text-slate-500">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to find your perfect SEO tool?
          </h2>
          <p className="text-indigo-200 text-lg mb-8 max-w-xl mx-auto">
            Start with our full comparison of Semrush vs Ahrefs — the two most popular SEO platforms for small businesses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/semrush-vs-ahrefs"
              className="px-7 py-3.5 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-50 transition-colors"
            >
              Compare Tools
            </Link>
            <a
              href={AFFILIATE_HREF}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="px-7 py-3.5 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-xl border border-indigo-400 transition-colors"
            >
              Try Semrush Free
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

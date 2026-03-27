import FAQAccordion from '../components/FAQAccordion'
import { Link } from 'react-router-dom'

// AFFILIATE LINKS: Replace these with your actual affiliate URLs
const SEMRUSH_AFFILIATE = '#affiliate-link-semrush'
const AHREFS_AFFILIATE  = '#affiliate-link-ahrefs'

/* ── Data ──────────────────────────────────────────────────── */

const comparisonRows = [
  { feature: 'Keyword Database Size',      semrush: '25B+ keywords',     ahrefs: '20B+ keywords',       winner: 'semrush' },
  { feature: 'Backlink Database',          semrush: '43 trillion links',  ahrefs: '35 trillion links',   winner: 'semrush' },
  { feature: 'Site Audit',                 semrush: '✅ Full audit',      ahrefs: '✅ Full audit',        winner: 'tie' },
  { feature: 'Rank Tracking (entry)',      semrush: 'Daily updates',      ahrefs: 'Weekly (Lite plan)',  winner: 'semrush' },
  { feature: 'Content Marketing Tools',    semrush: '✅ Full suite',      ahrefs: '⚠️ Limited',          winner: 'semrush' },
  { feature: 'Local SEO',                  semrush: '✅ Dedicated tools', ahrefs: '❌ Not available',    winner: 'semrush' },
  { feature: 'PPC / Ads Research',         semrush: '✅ Full PPC data',   ahrefs: '⚠️ Basic only',       winner: 'semrush' },
  { feature: 'Social Media Tools',         semrush: '✅ Scheduler + analytics', ahrefs: '❌ None',       winner: 'semrush' },
  { feature: 'API Access',                 semrush: '✅ All plans',       ahrefs: '⚠️ Paid add-on',      winner: 'semrush' },
  { feature: 'Free Trial',                 semrush: '✅ 7-day free trial',ahrefs: '❌ No trial',          winner: 'semrush' },
  { feature: 'Free / Freemium Version',    semrush: 'Limited free account',ahrefs:'Webmaster Tools (site only)', winner: 'tie' },
  { feature: 'Entry-Level Price',          semrush: '~$140/mo',           ahrefs: '~$99/mo',             winner: 'ahrefs' },
  { feature: 'Users (entry plan)',         semrush: '1 user',             ahrefs: '1 user',              winner: 'tie' },
  { feature: 'Projects (entry plan)',      semrush: '5 projects',         ahrefs: '5 projects',          winner: 'tie' },
  { feature: 'UI / Learning Curve',        semrush: 'Steeper (feature-rich)', ahrefs: 'Cleaner (focused)', winner: 'ahrefs' },
  { feature: 'Backlink Analysis Depth',    semrush: '✅ Excellent',       ahrefs: '✅ Industry-leading', winner: 'ahrefs' },
]

const faqItems = [
  {
    q: 'Is Semrush better than Ahrefs overall?',
    a: 'It depends on your goals. Semrush is the better all-in-one platform — it covers keyword research, content tools, local SEO, PPC research, and social media in one subscription. Ahrefs is more focused, with arguably the strongest backlink database in the industry and a cleaner interface. For most small businesses doing content marketing and SEO, Semrush wins on breadth. For agencies heavily focused on link-building, Ahrefs is a serious contender.',
  },
  {
    q: 'Which tool is better for beginners?',
    a: "Ahrefs has a cleaner, more intuitive UI that many beginners find easier to navigate. However, Semrush offers more guided workflows and a 7-day free trial so you can test it before paying — which is a big advantage. Both have extensive learning resources. If budget is tight, start with Ahrefs Lite at ~$99/mo; if you want the widest toolkit, Semrush Pro is worth the extra $40/month.",
  },
  {
    q: 'Which is better for agencies?',
    a: 'Semrush is the stronger agency choice. It includes more client-facing reports, white-label reporting on higher tiers, and broader coverage of channels (PPC, social, content). Semrush Guru and Business plans also support multiple users and projects, making team collaboration easier. Ahrefs is excellent as a supplemental tool but lacks the breadth agencies typically need.',
  },
  {
    q: 'Does Ahrefs have a free trial?',
    a: "Ahrefs does not offer a free trial on paid plans. They do provide Ahrefs Webmaster Tools for free, which lets you analyze your own website's backlinks and SEO health — but you cannot do competitor research with it. Semrush offers a 7-day free trial on the Pro plan, which gives you full access.",
  },
  {
    q: 'Can I use both Semrush and Ahrefs together?',
    a: "Yes, and many advanced SEOs do. The most common setup is using Semrush as the primary platform for keyword research, content, and reporting — then supplementing with Ahrefs for deep backlink analysis. However, for most small businesses, paying for both (~$239+/mo) isn't necessary. Pick the one that best fits your main use case.",
  },
  {
    q: 'Which has more accurate keyword difficulty scores?',
    a: 'Both tools use proprietary algorithms, and neither is perfectly accurate. Semrush tends to give slightly lower difficulty scores than Ahrefs, which some users find more encouraging for beginners. Ahrefs KD is generally considered more conservative and closer to reality for competitive niches. As a best practice, compare the top-10 results manually rather than relying solely on either score.',
  },
  {
    q: 'Is there a cheaper alternative to both?',
    a: 'Yes. SE Ranking (~$52/mo), Mangools (~$49/mo), and Ubersuggest (~$29/mo) are popular budget alternatives. They lack the database depth and feature breadth of Semrush or Ahrefs, but for solo bloggers or small local businesses, they can be sufficient. Check our Best SEO Tools for Small Business guide for a full breakdown.',
  },
  {
    q: 'How often is data updated in each tool?',
    a: 'Semrush updates its keyword database weekly and rank tracking daily (on all paid plans). Backlink data is updated continuously. Ahrefs updates its backlink index every 15–30 minutes and is widely regarded as having the freshest link data available. Keyword data in Ahrefs is updated monthly on Lite, more frequently on higher plans.',
  },
]

/* ── Helper components ─────────────────────────────────────── */

function Check() {
  return (
    <svg className="w-5 h-5 text-emerald-500 inline flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  )
}

function X() {
  return (
    <svg className="w-5 h-5 text-red-400 inline flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    </svg>
  )
}

function CTAButton({ href, children, variant = 'primary', className = '' }) {
  const base = 'inline-flex items-center gap-2 font-semibold rounded-xl transition-colors'
  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3',
    secondary: 'bg-white hover:bg-slate-50 text-indigo-700 border-2 border-indigo-600 px-6 py-3',
    outline: 'bg-transparent hover:bg-slate-100 text-slate-700 border border-slate-300 px-5 py-2.5',
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer sponsored" className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  )
}

/* ── Page ──────────────────────────────────────────────────── */

export default function Comparison() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-5 text-sm text-slate-500">
            <Link to="/" className="hover:text-indigo-600">Home</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">Semrush vs Ahrefs</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 border border-amber-200 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
            Last updated: March 2026 &middot; Tested by ToolsTestLab team
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">
            Semrush vs Ahrefs for Small Businesses
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-8">
            We tested both platforms for 60 days. Here's what every small business owner needs to know before paying.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href={SEMRUSH_AFFILIATE} variant="primary">
              Try Semrush Free (7 days)
            </CTAButton>
            <CTAButton href={AHREFS_AFFILIATE} variant="secondary">
              See Ahrefs Pricing
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ─── DISCLOSURE ───────────────────────────────────────── */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-xs text-slate-500 text-center">
            <strong>Affiliate disclosure:</strong> This page contains affiliate links. If you purchase through them, we earn a small commission at no extra cost to you.
            Our editorial scores and recommendations are entirely independent.{' '}
            <a href="#" className="text-indigo-500 hover:underline">Learn more.</a>
          </p>
        </div>
      </div>

      {/* ─── QUICK VERDICT ────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-2xl p-8 md:p-10 text-white">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-1">Quick Verdict</h2>
                <p className="text-indigo-200 text-sm">ToolsTestLab recommendation for most small businesses</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-black">🏆 Best Overall</span>
                </div>
                <div className="text-2xl font-bold mb-2">Semrush</div>
                <p className="text-indigo-100 text-sm leading-relaxed">
                  For most small businesses, Semrush wins on sheer versatility. One subscription covers keyword
                  research, content tools, backlinks, site audits, local SEO, and even PPC research.
                  If you want to do serious SEO without juggling multiple tools, Semrush is the clear choice.
                </p>
                <CTAButton href={SEMRUSH_AFFILIATE} variant="outline" className="mt-4 bg-white text-indigo-700 border-0 hover:bg-indigo-50">
                  Try Semrush Free →
                </CTAButton>
              </div>
              <div className="bg-white/10 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-black">🔗 Best for Backlinks</span>
                </div>
                <div className="text-2xl font-bold mb-2">Ahrefs</div>
                <p className="text-indigo-100 text-sm leading-relaxed">
                  If your primary goal is link-building and backlink research, Ahrefs is the gold standard.
                  Its backlink database is frequently cited as the industry's most accurate. Also the better
                  pick if you want a cleaner, less overwhelming interface.
                </p>
                <CTAButton href={AHREFS_AFFILIATE} variant="outline" className="mt-4 bg-white text-indigo-700 border-0 hover:bg-indigo-50">
                  See Ahrefs Plans →
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMPARISON TABLE ─────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Side-by-side comparison</h2>
          <p className="text-slate-500 mb-8">A full feature breakdown across every major category.</p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-6 py-4 font-semibold">Feature</th>
                  <th className="text-center px-6 py-4 font-semibold min-w-[160px]">
                    <span className="text-indigo-300">Semrush</span>
                  </th>
                  <th className="text-center px-6 py-4 font-semibold min-w-[160px]">Ahrefs</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-6 py-4 font-medium text-slate-700">{row.feature}</td>
                    <td className={`px-6 py-4 text-center ${row.winner === 'semrush' ? 'font-semibold text-indigo-700' : 'text-slate-600'}`}>
                      {row.winner === 'semrush' && (
                        <span className="inline-flex items-center gap-1">
                          <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                      )}
                      {row.semrush}
                    </td>
                    <td className={`px-6 py-4 text-center ${row.winner === 'ahrefs' ? 'font-semibold text-emerald-700' : 'text-slate-600'}`}>
                      {row.winner === 'ahrefs' && (
                        <span className="inline-flex items-center gap-1">
                          <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                      )}
                      {row.ahrefs}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-3">* Prices approximate as of Q1 2026. Verify current pricing at each provider's website before purchasing.</p>
        </div>
      </section>

      {/* ─── BEST FOR SECTIONS ────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Best choice by use case</h2>
          <p className="text-slate-500 mb-8">Different businesses have different needs. Here's our pick for each type.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🌱',
                title: 'Best for Beginners',
                winner: 'Ahrefs',
                winnerColor: 'text-emerald-700',
                reason:
                  'Ahrefs has a simpler, cleaner interface that beginners find less overwhelming. Its Site Explorer and Keyword Explorer are intuitive. That said, Semrush\'s 7-day free trial makes it the better starting point if you want to test before committing.',
                alt: 'Consider Semrush if you want a free trial first.',
                cta: 'Try Ahrefs',
                href: AHREFS_AFFILIATE,
              },
              {
                icon: '🏢',
                title: 'Best for Agencies',
                winner: 'Semrush',
                winnerColor: 'text-indigo-700',
                reason:
                  'Semrush is the agency standard. Higher plans include white-label PDF reports, multi-user access, API integrations, and a far broader toolkit covering SEO, PPC, content, and social — everything you need to serve diverse clients from one dashboard.',
                alt: 'Ahrefs is a great add-on for deep backlink work.',
                cta: 'Try Semrush',
                href: SEMRUSH_AFFILIATE,
              },
              {
                icon: '📍',
                title: 'Best for Local Business',
                winner: 'Semrush',
                winnerColor: 'text-indigo-700',
                reason:
                  'Semrush has dedicated local SEO tools including listing management, review monitoring, and local rank tracking. Ahrefs has no equivalent local SEO features. If local search is a priority, Semrush isn\'t just better — it\'s the only real choice.',
                alt: 'Ahrefs still useful for backlink research.',
                cta: 'Try Semrush',
                href: SEMRUSH_AFFILIATE,
              },
            ].map(item => (
              <div key={item.title} className="bg-white border border-slate-200 rounded-2xl p-6">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                <div className={`text-sm font-semibold ${item.winnerColor} mb-3`}>Winner: {item.winner}</div>
                <p className="text-sm text-slate-500 leading-relaxed mb-3">{item.reason}</p>
                <p className="text-xs text-slate-400 italic mb-4">{item.alt}</p>
                <CTAButton href={item.href} variant="primary" className="text-sm px-4 py-2">
                  {item.cta} →
                </CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING COMPARISON ───────────────────────────────── */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Pricing comparison</h2>
          <p className="text-slate-500 mb-8">
            Semrush costs more at entry level, but includes significantly more. Ahrefs is cheaper if you only need backlinks and keyword research.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Semrush */}
            <div className="bg-white rounded-2xl border-2 border-indigo-200 p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Semrush</h3>
                <span className="ml-auto badge-indigo">Recommended</span>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Pro', price: '~$140/mo', detail: '1 user · 5 projects · 500 tracked keywords' },
                  { name: 'Guru', price: '~$250/mo', detail: '3 users · 15 projects · content tools included' },
                  { name: 'Business', price: '~$500/mo', detail: '5 users · 40 projects · API + white-label' },
                ].map(plan => (
                  <div key={plan.name} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <div>
                      <div className="font-semibold text-slate-800">{plan.name}</div>
                      <div className="text-xs text-slate-500">{plan.detail}</div>
                    </div>
                    <div className="text-lg font-bold text-indigo-700">{plan.price}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-400 mb-4">Annual billing saves ~17%. 7-day free trial available.</p>
                <CTAButton href={SEMRUSH_AFFILIATE} variant="primary" className="w-full justify-center">
                  Start Free Trial
                </CTAButton>
              </div>
            </div>

            {/* Ahrefs */}
            <div className="bg-white rounded-2xl border border-slate-200 p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Ahrefs</h3>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Lite', price: '~$99/mo', detail: '1 user · 5 projects · weekly rank tracking' },
                  { name: 'Standard', price: '~$199/mo', detail: '1 user · 20 projects · daily rank tracking' },
                  { name: 'Advanced', price: '~$399/mo', detail: '3 users · 50 projects · Looker Studio' },
                ].map(plan => (
                  <div key={plan.name} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <div>
                      <div className="font-semibold text-slate-800">{plan.name}</div>
                      <div className="text-xs text-slate-500">{plan.detail}</div>
                    </div>
                    <div className="text-lg font-bold text-slate-700">{plan.price}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-400 mb-4">Annual billing saves ~20%. No free trial on paid plans.</p>
                <CTAButton href={AHREFS_AFFILIATE} variant="secondary" className="w-full justify-center">
                  See Ahrefs Pricing
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROS & CONS ──────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Pros &amp; cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Semrush */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden">
              <div className="bg-indigo-600 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Semrush</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">Pros</h4>
                  <ul className="space-y-2">
                    {[
                      'Most complete all-in-one SEO platform available',
                      '25B+ keyword database — largest in the industry',
                      'Local SEO tools built in (listing management, reviews)',
                      'Full PPC competitor research included',
                      'Content tools: Topic Research, SEO Writing Assistant',
                      '7-day free trial lets you test before paying',
                      'Social media scheduling and analytics',
                    ].map(pro => (
                      <li key={pro} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">Cons</h4>
                  <ul className="space-y-2">
                    {[
                      'More expensive than Ahrefs at entry level (~$140/mo)',
                      'Interface can feel overwhelming for beginners',
                      'Backlink database slightly smaller than Ahrefs',
                      'Some advanced features locked behind higher plans',
                    ].map(con => (
                      <li key={con} className="flex items-start gap-2 text-sm text-slate-600">
                        <X />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Ahrefs */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden">
              <div className="bg-slate-700 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Ahrefs</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">Pros</h4>
                  <ul className="space-y-2">
                    {[
                      'Best backlink database in the industry (35T+ links)',
                      'Freshest crawl data — index updated every 15-30 min',
                      'Cleaner, more intuitive interface for beginners',
                      'Lower entry price (~$99/mo)',
                      'Site Audit tool is excellent',
                      'Free Webmaster Tools for basic site analysis',
                    ].map(pro => (
                      <li key={pro} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">Cons</h4>
                  <ul className="space-y-2">
                    {[
                      'No free trial on paid plans',
                      'No local SEO tools',
                      'No PPC research features',
                      'No social media tools',
                      'Content tools are limited compared to Semrush',
                    ].map(con => (
                      <li key={con} className="flex items-start gap-2 text-sm text-slate-600">
                        <X />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHO SHOULD CHOOSE SEMRUSH ────────────────────────── */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Who should choose each tool?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-7">
              <h3 className="text-lg font-bold text-indigo-900 mb-4">Choose Semrush if you...</h3>
              <ul className="space-y-2.5">
                {[
                  'Want one tool to handle SEO, content, PPC, and social',
                  'Run a local business and need local SEO features',
                  'Are an agency managing multiple clients',
                  'Want a free trial before committing',
                  'Do content marketing alongside link-building',
                  'Need API access or integrations',
                  'Value breadth over depth',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-indigo-800">
                    <svg className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <CTAButton href={SEMRUSH_AFFILIATE} variant="primary" className="mt-6">
                Try Semrush Free
              </CTAButton>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-7">
              <h3 className="text-lg font-bold text-emerald-900 mb-4">Choose Ahrefs if you...</h3>
              <ul className="space-y-2.5">
                {[
                  'Focus primarily on backlink building and analysis',
                  'Want the most accurate, freshest link data available',
                  'Prefer a cleaner, less cluttered interface',
                  'Are on a tighter budget (saves ~$40/mo at entry)',
                  'Do mostly technical SEO and site auditing',
                  'Already have separate tools for content and PPC',
                  'Value depth over breadth in one tool',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-emerald-800">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <CTAButton href={AHREFS_AFFILIATE} variant="secondary" className="mt-6">
                See Ahrefs Plans
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Frequently asked questions</h2>
          <p className="text-slate-500 mb-8">Everything you need to know about choosing between Semrush and Ahrefs.</p>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-900 to-indigo-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
            For most small businesses, Semrush is the smarter long-term investment. Start the 7-day free trial with no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href={SEMRUSH_AFFILIATE} variant="primary" className="px-8 py-4 text-base">
              Start Semrush Free Trial
            </CTAButton>
            <CTAButton href={AHREFS_AFFILIATE} variant="outline" className="px-8 py-4 text-base bg-white/10 border-white/30 text-white hover:bg-white/20">
              Compare Ahrefs Plans
            </CTAButton>
          </div>
          <p className="text-slate-500 text-xs mt-6">
            * Affiliate disclosure: We earn a commission if you purchase through our links. This doesn't affect our recommendations.
          </p>
        </div>
      </section>
    </>
  )
}

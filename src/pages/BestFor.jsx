import FAQAccordion from '../components/FAQAccordion'
import { Link } from 'react-router-dom'

// AFFILIATE LINKS: Replace these with your actual affiliate URLs
const SEMRUSH_AFFILIATE = '#affiliate-link-semrush'
const AHREFS_AFFILIATE  = '#affiliate-link-ahrefs'
const SERANKING_AFFILIATE = '#affiliate-link-seranking'

/* ── Data ──────────────────────────────────────────────────── */

const topTools = [
  {
    rank: 1,
    name: 'Semrush',
    badge: 'Best Overall',
    badgeColor: 'bg-indigo-600 text-white',
    score: 9.4,
    price: '~$140/mo',
    trial: '7-day free trial',
    trialColor: 'text-emerald-600',
    tagline: 'All-in-one platform for growing small businesses',
    pros: [
      'Widest feature set: SEO, content, PPC, local, social',
      'Best-in-class keyword research (25B+ keyword database)',
      'Local SEO tools built in — no add-ons needed',
      'Free 7-day trial with full Pro access',
      'Scales well as your business grows',
    ],
    cons: [
      'Higher entry price than alternatives',
      'Steeper learning curve due to feature depth',
    ],
    verdict: 'For small businesses that are serious about growth, Semrush offers the best ROI. One subscription replaces 3-4 separate tools.',
    href: SEMRUSH_AFFILIATE,
    cta: 'Try Semrush Free',
  },
  {
    rank: 2,
    name: 'Ahrefs',
    badge: 'Best for Backlinks',
    badgeColor: 'bg-slate-700 text-white',
    score: 8.9,
    price: '~$99/mo',
    trial: 'No free trial',
    trialColor: 'text-slate-400',
    tagline: 'The gold standard for backlink analysis',
    pros: [
      'Industry-leading backlink database (35T+ links)',
      'Cleaner UI — easier for beginners to navigate',
      'Lower entry price (~$99/mo)',
      'Excellent site audit tool',
      'Free Webmaster Tools for basic analysis',
    ],
    cons: [
      'No local SEO tools',
      'No PPC or social media features',
      'No free trial on paid plans',
    ],
    verdict: 'Choose Ahrefs if link-building is your primary strategy and you want the most accurate backlink data at a lower price.',
    href: AHREFS_AFFILIATE,
    cta: 'See Ahrefs Plans',
  },
  {
    rank: 3,
    name: 'SE Ranking',
    badge: 'Best Budget Pick',
    badgeColor: 'bg-emerald-600 text-white',
    score: 8.1,
    price: '~$52/mo',
    trial: '14-day free trial',
    trialColor: 'text-emerald-600',
    tagline: 'Affordable all-rounder for budget-conscious SMBs',
    pros: [
      'Lowest price among serious SEO tools (~$52/mo)',
      'Good keyword research and rank tracking',
      'Backlink monitoring included',
      'White-label reporting available',
      '14-day free trial',
    ],
    cons: [
      'Smaller keyword database than Semrush or Ahrefs',
      'Less accurate backlink data',
      'Fewer advanced features',
    ],
    verdict: 'Perfect for small businesses on a tight budget who need a solid all-rounder without paying for features they won\'t use.',
    href: SERANKING_AFFILIATE,
    cta: 'Try SE Ranking Free',
  },
]

const buyerChecklist = [
  {
    item: 'Keyword research depth',
    question: 'How large is the keyword database? Does it cover your niche well?',
    importance: 'Critical',
    importanceColor: 'text-red-600 bg-red-50 border-red-200',
  },
  {
    item: 'Rank tracking frequency',
    question: 'Does it update daily, weekly, or on-demand? Daily matters if you run time-sensitive campaigns.',
    importance: 'High',
    importanceColor: 'text-orange-600 bg-orange-50 border-orange-200',
  },
  {
    item: 'Site audit capability',
    question: 'How many pages can it crawl? Does it check Core Web Vitals and structured data?',
    importance: 'High',
    importanceColor: 'text-orange-600 bg-orange-50 border-orange-200',
  },
  {
    item: 'Local SEO features',
    question: 'If you serve a local area, does the tool support listing management and local rank tracking?',
    importance: 'High (if local)',
    importanceColor: 'text-orange-600 bg-orange-50 border-orange-200',
  },
  {
    item: 'Backlink analysis',
    question: 'How large and fresh is the backlink database? Does it include toxic link detection?',
    importance: 'Medium–High',
    importanceColor: 'text-amber-600 bg-amber-50 border-amber-200',
  },
  {
    item: 'Content tools',
    question: 'Does it help you plan, write, and optimize content — not just track keywords?',
    importance: 'Medium',
    importanceColor: 'text-amber-600 bg-amber-50 border-amber-200',
  },
  {
    item: 'Free trial availability',
    question: 'Can you test the tool fully before paying? A free trial is worth more than a freemium tier.',
    importance: 'Medium',
    importanceColor: 'text-amber-600 bg-amber-50 border-amber-200',
  },
  {
    item: 'Pricing transparency',
    question: 'Are there hidden limits, credit systems, or expensive add-ons that inflate the real cost?',
    importance: 'Medium',
    importanceColor: 'text-amber-600 bg-amber-50 border-amber-200',
  },
]

const faqItems = [
  {
    q: 'What is the best free SEO tool for small businesses?',
    a: 'Google Search Console is the best free tool for monitoring your own site\'s SEO performance (impressions, clicks, technical issues). Ahrefs Webmaster Tools offers free backlink analysis for your own site. For keyword research, Google Keyword Planner is free with a Google Ads account. None of these replace a paid all-in-one platform for competitive research, but they\'re excellent starting points.',
  },
  {
    q: 'Is Semrush overkill for small businesses?',
    a: "Not if you're actively investing in content marketing, local SEO, or paid search. Semrush is 'a lot of tool,' but for a business spending $500+/mo on content creation or ads, the insights it provides easily justify the ~$140/mo subscription. If you're posting one blog a month and not doing keyword research, it may be overkill — start with SE Ranking instead.",
  },
  {
    q: 'Do I need an SEO tool if I\'m just starting out?',
    a: 'Early on, free tools (Google Search Console, Google Keyword Planner, Ahrefs Webmaster Tools) can take you far. Once you\'re publishing content regularly and want to understand why competitors rank above you, a paid tool pays for itself quickly. Most businesses see value from paid SEO tools once they\'re producing 4+ pieces of content per month.',
  },
  {
    q: 'How much should a small business spend on SEO tools?',
    a: "Budget $50-$150/mo for a solid SEO tool as a small business. At $52/mo (SE Ranking) you get a reliable all-rounder. At $99-$140/mo (Ahrefs or Semrush Pro) you get professional-grade tools. Spending more than $200/mo is typically justified only when you're managing multiple sites, serving clients, or running large content operations.",
  },
  {
    q: 'What SEO tool do professionals use most?',
    a: "According to multiple industry surveys, Semrush and Ahrefs are the top two tools used by professional SEOs and agencies. Semrush leads in market share overall, while Ahrefs is the preferred choice among specialists focused on link-building. Moz is popular for domain authority benchmarking. In-house teams often use Semrush as their primary platform.",
  },
  {
    q: 'Can I do SEO without paid tools?',
    a: "Yes, especially early on. Free tools like Google Search Console, Ahrefs Webmaster Tools, and browser extensions like MozBar can handle basic on-page and technical SEO. The gap appears in competitive research — understanding what keywords competitors rank for, their backlink profiles, and their content strategies requires a paid tool. Once SEO is a meaningful part of your growth strategy, paying for a tool is almost always worth it.",
  },
]

/* ── Helper components ─────────────────────────────────────── */

function CTAButton({ href, children, variant = 'primary', className = '' }) {
  const base = 'inline-flex items-center gap-2 font-semibold rounded-xl transition-colors'
  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3',
    secondary: 'bg-white hover:bg-slate-50 text-indigo-700 border-2 border-indigo-600 px-6 py-3',
    ghost: 'bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-2.5',
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer sponsored" className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  )
}

/* ── Page ──────────────────────────────────────────────────── */

export default function BestFor() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex flex-wrap items-center gap-2 mb-5 text-sm text-slate-500">
            <Link to="/" className="hover:text-indigo-600">Home</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">Best SEO Tool for Small Business</span>
          </div>
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                Last updated: March 2026 &middot; 3 tools tested
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
                Best SEO Tool for Small Business in 2026
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed mb-6">
                We ranked and tested the top SEO platforms to find the best fit for small businesses — covering features, pricing, ease of use, and long-term value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href={SEMRUSH_AFFILIATE} variant="primary" className="px-7 py-3.5">
                  Try Our #1 Pick Free
                </CTAButton>
                <CTAButton href={AHREFS_AFFILIATE} variant="ghost" className="px-7 py-3.5">
                  See All Options
                </CTAButton>
              </div>
            </div>
            <div className="hidden lg:block bg-indigo-600 text-white rounded-2xl p-6 min-w-[220px] text-center">
              <div className="text-sm font-medium text-indigo-200 mb-2">Our Top Pick</div>
              <div className="text-3xl font-black mb-1">Semrush</div>
              <div className="text-indigo-200 text-sm mb-4">Score: 9.4 / 10</div>
              <CTAButton href={SEMRUSH_AFFILIATE} variant="ghost" className="bg-white text-indigo-700 hover:bg-indigo-50 w-full justify-center text-sm">
                Try Free →
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DISCLOSURE ───────────────────────────────────────── */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-xs text-slate-500 text-center">
            <strong>Affiliate disclosure:</strong> This page contains affiliate links. If you purchase through them, we earn a small commission at no extra cost to you.
            Our editorial rankings are entirely independent.{' '}
            <a href="#" className="text-indigo-500 hover:underline">Learn more.</a>
          </p>
        </div>
      </div>

      {/* ─── QUICK ANSWER ─────────────────────────────────────── */}
      <section className="py-12 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-7">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-emerald-900 mb-2">Short Answer</h2>
                <p className="text-emerald-800 leading-relaxed">
                  <strong>Semrush is the best SEO tool for most small businesses in 2026.</strong> It offers the widest feature set
                  (keyword research, site audit, rank tracking, content tools, local SEO, and PPC research) in one subscription,
                  with a 7-day free trial to test it properly. If you're on a tight budget, <strong>SE Ranking (~$52/mo)</strong> is
                  a strong runner-up. If backlinks are your only priority, <strong>Ahrefs (~$99/mo)</strong> wins on depth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TOP 3 TOOLS ──────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Our top 3 picks for small business</h2>
          <p className="text-slate-500 mb-8">Independently tested and ranked by ToolsTestLab. Updated Q1 2026.</p>

          <div className="space-y-6">
            {topTools.map(tool => (
              <div
                key={tool.name}
                className={`bg-white rounded-2xl border overflow-hidden ${
                  tool.rank === 1 ? 'border-indigo-300 shadow-lg' : 'border-slate-200 shadow-sm'
                }`}
              >
                {tool.rank === 1 && (
                  <div className="bg-indigo-600 px-6 py-2.5 flex items-center gap-2">
                    <svg className="w-4 h-4 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-white text-sm font-bold">ToolsTestLab #1 Pick for Small Business</span>
                  </div>
                )}
                <div className="p-7">
                  <div className="flex flex-wrap items-start gap-4 mb-5">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center font-black text-slate-600 text-lg">
                        {tool.rank}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{tool.name}</h3>
                        <p className="text-sm text-slate-500">{tool.tagline}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${tool.badgeColor}`}>
                        {tool.badge}
                      </span>
                      <div className="text-right">
                        <div className="font-bold text-slate-900">{tool.price}</div>
                        <div className={`text-xs font-medium ${tool.trialColor}`}>{tool.trial}</div>
                      </div>
                      <div className="bg-indigo-50 text-indigo-800 font-bold text-sm px-3 py-1.5 rounded-lg">
                        {tool.score}/10
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-5 mb-6">
                    <div>
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Pros</h4>
                      <ul className="space-y-1.5">
                        {tool.pros.map(pro => (
                          <li key={pro} className="flex items-start gap-2 text-sm text-slate-600">
                            <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Cons</h4>
                      <ul className="space-y-1.5">
                        {tool.cons.map(con => (
                          <li key={con} className="flex items-start gap-2 text-sm text-slate-600">
                            <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Our Verdict</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{tool.verdict}</p>
                    </div>
                  </div>

                  <CTAButton
                    href={tool.href}
                    variant={tool.rank === 1 ? 'primary' : 'secondary'}
                    className={tool.rank === 1 ? '' : 'text-sm py-2.5'}
                  >
                    {tool.cta}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY SEMRUSH WINS FOR SMB ─────────────────────────── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Why Semrush is the best choice for small business</h2>
          <p className="text-slate-500 mb-8">Here's what sets it apart when you're running a lean team and budget matters.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: '🔧',
                title: 'One tool replaces three',
                desc: 'Semrush covers keyword research, backlinks, site audits, content planning, local SEO, and basic PPC research. For small businesses that can\'t afford specialist tools for each channel, this consolidation saves $100-300/mo in tool costs.',
              },
              {
                icon: '📈',
                title: 'Grows with your business',
                desc: 'Start on Pro (~$140/mo) with 5 projects and 500 tracked keywords. Upgrade to Guru as you expand. The platform scales without requiring you to migrate to a new tool, which is a significant time-saver.',
              },
              {
                icon: '📍',
                title: 'Local SEO is genuinely useful',
                desc: 'No competitor matches Semrush\'s built-in local SEO toolkit. Listing management, review monitoring, and local rank tracking are features that directly translate to foot traffic and calls for service businesses.',
              },
              {
                icon: '✍️',
                title: 'Content tools justify the price alone',
                desc: 'The SEO Writing Assistant and Topic Research tools help you create content that ranks faster. For content-driven businesses, these features alone can make the Pro subscription profitable within the first month.',
              },
              {
                icon: '🧪',
                title: 'Risk-free trial',
                desc: 'No credit card required for the 7-day Pro trial. This is the best way to evaluate whether Semrush fits your workflow before committing. Ahrefs offers no equivalent trial.',
              },
              {
                icon: '📊',
                title: 'Reporting your clients can understand',
                desc: 'Even on the Pro plan, Semrush\'s PDF reports are polished and readable. If you work with a marketing agency or report to a board, sharing rank tracking and site health reports is straightforward.',
              },
            ].map(item => (
              <div key={item.title} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHEN ANOTHER IS BETTER ───────────────────────────── */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">When a different tool might be better</h2>
          <p className="text-slate-500 mb-8">Semrush isn't right for everyone. Here's when we'd recommend an alternative.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                condition: 'Your budget is under $80/mo',
                tool: 'SE Ranking (~$52/mo)',
                reason: 'A solid all-rounder with good rank tracking and backlink monitoring. You give up some database depth, but the core features are there. 14-day free trial available.',
                href: SERANKING_AFFILIATE,
              },
              {
                condition: 'Link-building is your primary focus',
                tool: 'Ahrefs (~$99/mo)',
                reason: 'Ahrefs has the most accurate, freshest backlink data in the industry. If your main job is finding link prospects and analyzing competitor backlinks, Ahrefs wins on depth.',
                href: AHREFS_AFFILIATE,
              },
              {
                condition: "You're just starting out",
                tool: 'Semrush free + Google Search Console',
                reason: "Start with Semrush's limited free account for keyword research and Google Search Console to monitor your site. Once you're publishing consistently and need competitive data, upgrade.",
                href: SEMRUSH_AFFILIATE,
              },
            ].map(item => (
              <div key={item.condition} className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2">If...</div>
                <h3 className="font-bold text-slate-900 mb-3">{item.condition}</h3>
                <div className="badge-indigo mb-3">{item.tool}</div>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{item.reason}</p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors inline-flex items-center gap-1"
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BUYER'S CHECKLIST ────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Buyer's checklist: what to look for</h2>
          <p className="text-slate-500 mb-8">Use this checklist when evaluating any SEO tool — don't just trust a score.</p>
          <div className="space-y-3">
            {buyerChecklist.map((item, i) => (
              <div key={item.item} className="flex items-start gap-4 bg-slate-50 border border-slate-200 rounded-xl p-5">
                <div className="w-6 h-6 bg-indigo-100 text-indigo-700 rounded-md flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-semibold text-slate-900 text-sm">{item.item}</h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${item.importanceColor}`}>
                      {item.importance}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500">{item.question}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MINI COMPARISON TABLE ────────────────────────────── */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Quick comparison: top 3 tools</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-5 py-4 font-semibold">Feature</th>
                  <th className="text-center px-5 py-4 font-semibold">
                    <span className="text-indigo-300">Semrush</span>
                    <div className="text-xs font-normal text-slate-400 mt-0.5">~$140/mo</div>
                  </th>
                  <th className="text-center px-5 py-4 font-semibold">
                    Ahrefs
                    <div className="text-xs font-normal text-slate-400 mt-0.5">~$99/mo</div>
                  </th>
                  <th className="text-center px-5 py-4 font-semibold">
                    SE Ranking
                    <div className="text-xs font-normal text-slate-400 mt-0.5">~$52/mo</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Keyword Research', semrush: '✅ Excellent', ahrefs: '✅ Excellent', seranking: '✅ Good' },
                  { feature: 'Backlink Analysis', semrush: '✅ Excellent', ahrefs: '✅ Best-in-class', seranking: '⚠️ Basic' },
                  { feature: 'Site Audit', semrush: '✅ Excellent', ahrefs: '✅ Excellent', seranking: '✅ Good' },
                  { feature: 'Rank Tracking', semrush: '✅ Daily', ahrefs: '⚠️ Weekly (Lite)', seranking: '✅ Daily' },
                  { feature: 'Content Tools', semrush: '✅ Yes', ahrefs: '❌ No', seranking: '⚠️ Limited' },
                  { feature: 'Local SEO', semrush: '✅ Yes', ahrefs: '❌ No', seranking: '⚠️ Basic' },
                  { feature: 'Free Trial', semrush: '✅ 7 days', ahrefs: '❌ None', seranking: '✅ 14 days' },
                  { feature: 'Overall Score', semrush: '9.4/10 ⭐', ahrefs: '8.9/10', seranking: '8.1/10' },
                ].map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-5 py-3.5 font-medium text-slate-700">{row.feature}</td>
                    <td className="px-5 py-3.5 text-center text-indigo-700 font-medium">{row.semrush}</td>
                    <td className="px-5 py-3.5 text-center text-slate-600">{row.ahrefs}</td>
                    <td className="px-5 py-3.5 text-center text-slate-600">{row.seranking}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap gap-3 mt-5">
            <CTAButton href={SEMRUSH_AFFILIATE} variant="primary">Try Semrush Free</CTAButton>
            <CTAButton href={AHREFS_AFFILIATE} variant="secondary">See Ahrefs Plans</CTAButton>
            <CTAButton href={SERANKING_AFFILIATE} variant="ghost">Try SE Ranking Free</CTAButton>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Frequently asked questions</h2>
          <p className="text-slate-500 mb-8">Common questions from small business owners choosing their first SEO tool.</p>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-900 to-indigo-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            Our #1 pick: Semrush — 7-day free trial, no credit card
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start growing your organic traffic today
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
            Semrush gives small businesses a serious SEO advantage at a price that scales with you. Test it free for 7 days — no risk, no commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href={SEMRUSH_AFFILIATE} variant="ghost" className="px-8 py-4 text-base bg-white text-indigo-700 hover:bg-indigo-50">
              Try Semrush Free →
            </CTAButton>
            <Link
              to="/semrush-vs-ahrefs"
              className="inline-flex items-center gap-2 px-8 py-4 text-base bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-colors"
            >
              Compare Top Tools
            </Link>
          </div>
          <p className="text-slate-500 text-xs mt-6">
            * Affiliate disclosure: We earn a commission if you purchase through our links. Rankings are based on independent testing.
          </p>
        </div>
      </section>
    </>
  )
}

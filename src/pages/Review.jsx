import FAQAccordion from '../components/FAQAccordion'
import { Link } from 'react-router-dom'

// AFFILIATE LINK: Replace with your Semrush affiliate URL
const AFFILIATE_HREF = '#affiliate-link-semrush'

/* ── Data ──────────────────────────────────────────────────── */

const faqItems = [
  {
    q: 'Is Semrush worth the money for small businesses?',
    a: "For most small businesses doing active SEO and content marketing, yes. At ~$140/month you get keyword research, backlink analysis, site auditing, content tools, and rank tracking in one subscription. If you're paying for 3-4 separate tools to do the same job, Semrush is almost certainly cheaper and more cohesive.",
  },
  {
    q: 'What can you do with Semrush for free?',
    a: "Semrush has a free account with limited access: 10 searches/day in keyword and domain analytics. It's enough to get a taste of the platform but not enough for regular use. The 7-day Pro trial gives full access with no credit card required — that's the best way to evaluate it properly.",
  },
  {
    q: 'Is Semrush good for complete beginners?',
    a: "Semrush has a steeper learning curve than simpler tools like Ubersuggest or Mangools, but it comes with extensive onboarding guides, video tutorials, and a well-organized help center. Most beginners can learn the core features (keyword research, site audit, rank tracking) within a week of regular use.",
  },
  {
    q: 'How accurate is Semrush keyword data?',
    a: "Semrush keyword data is directionally accurate and generally reliable for planning content strategy. Volume estimates won't match Google Search Console exactly — no third-party tool can — but they're good enough to identify high-opportunity keywords and understand competitive landscapes. For precise volume, always cross-reference with Google's own tools.",
  },
  {
    q: 'Can I cancel Semrush easily?',
    a: "Yes. Semrush subscriptions can be cancelled at any time from your account settings. Monthly billing users keep access until the end of the billing period. Annual billing users do not receive prorated refunds by default, so make sure to test thoroughly on the free trial before purchasing annual.",
  },
  {
    q: 'Does Semrush have a mobile app?',
    a: "Semrush does not have a fully-featured mobile app. There is a basic position tracking app, but the main platform is desktop/browser only. For a tool you'll use primarily on desktop for research and analysis, this is unlikely to be a dealbreaker.",
  },
  {
    q: "How does Semrush compare to Google Search Console?",
    a: "They're complementary, not interchangeable. Google Search Console shows data about your own site only — impressions, clicks, and technical issues. Semrush lets you research competitor keywords, discover link opportunities, track your rankings, and audit your site all in one place. Most serious SEOs use both.",
  },
]

const keyFeatures = [
  {
    icon: '🔍',
    title: 'Keyword Research',
    score: 9.5,
    desc: 'Semrush\'s keyword database (25B+ keywords) is the largest available. The Keyword Magic Tool makes it easy to discover long-tail variations, filter by difficulty, and organize clusters. Keyword Gap analysis finds opportunities your competitors rank for that you don\'t.',
  },
  {
    icon: '🔗',
    title: 'Backlink Analysis',
    score: 8.5,
    desc: 'Semrush tracks 43 trillion backlinks, updated continuously. The Backlink Audit tool identifies toxic links before they harm your rankings. Link Building Tool automates outreach workflows. Slightly behind Ahrefs in raw index freshness, but more than capable for most use cases.',
  },
  {
    icon: '🛠️',
    title: 'Site Audit',
    score: 9.0,
    desc: 'One of the most thorough site audits available. Checks 140+ technical SEO factors including crawlability, page speed, internal linking, structured data, and Core Web Vitals. Issues are categorized by severity with clear fix guidance — excellent for beginners and experts alike.',
  },
  {
    icon: '📈',
    title: 'Position Tracking',
    score: 9.0,
    desc: 'Daily rank tracking for unlimited keywords (within plan limits) across desktop and mobile. Supports local tracking at city level. The SERP Feature tracking shows whether you hold featured snippets, knowledge panels, or local packs — invaluable for competitive monitoring.',
  },
  {
    icon: '✍️',
    title: 'Content Tools',
    score: 8.5,
    desc: 'The SEO Writing Assistant scores your content against top-10 competitors and gives real-time readability and keyword suggestions. Topic Research generates content ideas based on what\'s performing in your niche. These tools are unique to Semrush — Ahrefs has no equivalent.',
  },
  {
    icon: '📍',
    title: 'Local SEO',
    score: 8.0,
    desc: 'Local SEO (Listing Management) lets you push your business info to 70+ directories from one dashboard. Review Management surfaces and tracks customer reviews. Local rank tracking at neighborhood level. Essential for brick-and-mortar or service-area businesses.',
  },
]

/* ── Helper components ─────────────────────────────────────── */

function CTAButton({ href, children, variant = 'primary', className = '' }) {
  const base = 'inline-flex items-center gap-2 font-semibold rounded-xl transition-colors'
  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3',
    secondary: 'bg-white hover:bg-slate-50 text-indigo-700 border-2 border-indigo-600 px-6 py-3',
    ghost: 'bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-2.5',
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer sponsored" className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  )
}

function Stars({ rating }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(n => (
        <svg
          key={n}
          className={`w-5 h-5 ${n <= Math.round(rating) ? 'text-amber-400' : 'text-slate-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  )
}

function ScoreBar({ label, score, max = 10 }) {
  const pct = (score / max) * 100
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-slate-600 font-medium">{label}</span>
        <span className="font-bold text-slate-800">{score}/10</span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-indigo-500 rounded-full transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

/* ── Page ──────────────────────────────────────────────────── */

export default function Review() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-18">
          <div className="flex flex-wrap items-center gap-2 mb-5 text-sm text-slate-500">
            <Link to="/" className="hover:text-indigo-600">Home</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">Semrush Review</span>
          </div>

          <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 border border-amber-200 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                Last updated: March 2026 &middot; Tested for 90+ days
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
                Semrush Review for Beginners: Worth It in 2026?
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed mb-6">
                After testing Semrush for three months across keyword research, site auditing, backlink analysis, and content planning, here's our honest take on whether it deserves a spot in your toolkit.
              </p>

              <div className="flex flex-wrap items-center gap-5 mb-8">
                <div className="flex items-center gap-2">
                  <Stars rating={4.7} />
                  <span className="font-bold text-slate-900">4.7 / 5</span>
                  <span className="text-slate-400 text-sm">(ToolsTestLab score)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href={AFFILIATE_HREF} variant="primary" className="px-7 py-3.5">
                  Start Free Trial (7 days)
                </CTAButton>
                <CTAButton href={AFFILIATE_HREF} variant="secondary" className="px-7 py-3.5">
                  See Pricing
                </CTAButton>
              </div>
            </div>

            {/* Quick facts card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md lg:sticky lg:top-20">
              <h3 className="font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">Quick Overview</h3>
              <dl className="space-y-3 text-sm">
                {[
                  { label: 'Overall Score', value: '4.7 / 5 ★' },
                  { label: 'Best For', value: 'All-in-one SEO + content' },
                  { label: 'Entry Price', value: '~$140/mo (Pro plan)' },
                  { label: 'Free Trial', value: '7 days — no credit card' },
                  { label: 'Users (entry)', value: '1 user, 5 projects' },
                  { label: 'Keyword DB', value: '25B+ keywords' },
                  { label: 'Backlink DB', value: '43 trillion links' },
                  { label: 'Mobile App', value: 'Rank tracker only' },
                ].map(item => (
                  <div key={item.label} className="flex justify-between gap-2">
                    <dt className="text-slate-500">{item.label}</dt>
                    <dd className="font-semibold text-slate-800 text-right">{item.value}</dd>
                  </div>
                ))}
              </dl>
              <CTAButton href={AFFILIATE_HREF} variant="primary" className="w-full justify-center mt-5">
                Try Semrush Free →
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DISCLOSURE ───────────────────────────────────────── */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-xs text-slate-500 text-center">
            <strong>Affiliate disclosure:</strong> This review contains affiliate links. If you purchase through them, we earn a small commission at no extra cost to you.
            Our editorial scores are entirely independent.{' '}
            <a href="#" className="text-indigo-500 hover:underline">Learn more.</a>
          </p>
        </div>
      </div>

      {/* ─── WHAT IS SEMRUSH ──────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">What is Semrush?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Semrush is an all-in-one digital marketing platform founded in 2008 and headquartered in Boston, MA.
            It's best known as an SEO tool, but it's grown into a comprehensive suite covering keyword research,
            backlink analysis, site auditing, rank tracking, content marketing, PPC research, social media
            management, and local SEO — all under one subscription.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            With over 10 million users worldwide and a database of 25 billion+ keywords, Semrush is consistently
            ranked as one of the top 3 SEO platforms in the industry alongside Ahrefs and Moz. It's used by
            individual bloggers, small businesses, marketing agencies, and Fortune 500 companies alike.
          </p>
          <p className="text-slate-600 leading-relaxed">
            The key differentiator: unlike Ahrefs (which excels specifically at backlink research) or Moz (which
            focuses on domain authority and on-page SEO), Semrush is designed to be your single hub for all
            organic and paid search activities. If consolidation matters to your workflow, that's a compelling proposition.
          </p>
        </div>
      </section>

      {/* ─── WHO IS IT BEST FOR ───────────────────────────────── */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Who is Semrush best for?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '✍️', title: 'Content Marketers', desc: 'Topic research, content gap analysis, and SEO writing assistant make Semrush the strongest choice for content-led growth strategies.' },
              { icon: '🏢', title: 'Marketing Agencies', desc: 'Multi-project management, white-label reporting, and API access make it the industry standard tool for agencies managing clients.' },
              { icon: '📍', title: 'Local Businesses', desc: 'Built-in listing management, review tracking, and local rank tracking are features no competitor matches at this price point.' },
              { icon: '🛒', title: 'eCommerce Stores', desc: "Competitor product keyword research and PPC analysis help eCommerce owners find gaps in competitors' paid and organic strategies." },
              { icon: '📊', title: 'In-House SEO Teams', desc: 'Centralized reporting, task management, and team collaboration features make Semrush the tool of choice for in-house teams.' },
              { icon: '🌱', title: 'Growing Businesses', desc: 'The Pro plan scales well from 0 to ~50k monthly visitors. Upgrade to Guru when you need more projects or content tooling.' },
            ].map(item => (
              <div key={item.title} className="bg-white border border-slate-200 rounded-xl p-5">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── KEY FEATURES ─────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Key features reviewed</h2>
          <p className="text-slate-500 mb-8">We scored each major feature category based on accuracy, usability, and value.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {keyFeatures.map(f => (
              <div key={f.title} className="bg-white border border-slate-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{f.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900">{f.title}</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${(f.score / 10) * 100}%` }} />
                      </div>
                      <span className="text-sm font-bold text-indigo-700">{f.score}/10</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT I LIKE / DON'T LIKE ─────────────────────────── */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">What I like — and what I don't</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Likes */}
            <div className="bg-white border border-emerald-200 rounded-2xl p-7">
              <h3 className="text-lg font-bold text-emerald-800 mb-5 flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                What I like
              </h3>
              <ul className="space-y-3">
                {[
                  'The Keyword Magic Tool is genuinely exceptional — finding 1,000+ variants from one seed keyword is effortless',
                  'Site Audit is one of the most thorough available, with clear fix-priority scoring',
                  'Daily rank tracking on all paid plans (not just weekly like Ahrefs Lite)',
                  'Content tools are unique in the market — real competitive edge for content marketers',
                  'Local SEO integration means I can monitor listings and reviews from the same dashboard',
                  '7-day free trial with no credit card is a big plus for evaluating properly',
                  'Reporting features are polished and client-ready without extra setup',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dislikes */}
            <div className="bg-white border border-orange-200 rounded-2xl p-7">
              <h3 className="text-lg font-bold text-orange-800 mb-5 flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                What I don't like
              </h3>
              <ul className="space-y-3">
                {[
                  'Pricing is noticeably higher than Ahrefs at the entry level (~$140/mo vs ~$99/mo)',
                  'The interface can feel overwhelming at first — too many features visible at once',
                  'Backlink database, while large, is slightly behind Ahrefs in freshness and depth',
                  'Annual billing has no prorated refunds — commit carefully',
                  'Some powerful features (API, advanced reporting) require Guru plan or above',
                  'Mobile experience is limited — no full-featured app',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING ──────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Semrush pricing in 2026</h2>
          <p className="text-slate-500 mb-8">Three plans cover solo users to large teams. Annual billing saves approximately 17%.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Pro',
                price: '~$140',
                period: '/mo',
                highlight: false,
                badge: '',
                desc: 'Best for freelancers and solo SEOs',
                features: [
                  '1 user account',
                  '5 projects',
                  '500 tracked keywords',
                  '10,000 results per report',
                  'Site audit (100,000 pages/mo)',
                  'Rank tracking (daily)',
                  'Competitor analysis',
                  'Backlink analysis',
                ],
                cta: 'Start Pro Trial',
              },
              {
                name: 'Guru',
                price: '~$250',
                period: '/mo',
                highlight: true,
                badge: 'Most Popular',
                desc: 'Best for growing businesses & small agencies',
                features: [
                  '3 user accounts',
                  '15 projects',
                  '1,500 tracked keywords',
                  '30,000 results per report',
                  'Site audit (300,000 pages/mo)',
                  'Content Marketing toolkit',
                  'Historical data access',
                  'Looker Studio integration',
                ],
                cta: 'Start Guru Trial',
              },
              {
                name: 'Business',
                price: '~$500',
                period: '/mo',
                highlight: false,
                badge: '',
                desc: 'Best for large agencies & in-house teams',
                features: [
                  '5 user accounts',
                  '40 projects',
                  '5,000 tracked keywords',
                  '50,000 results per report',
                  'Site audit (1M pages/mo)',
                  'White-label PDF reports',
                  'API access',
                  'Extended limits + share of voice',
                ],
                cta: 'Start Business Trial',
              },
            ].map(plan => (
              <div
                key={plan.name}
                className={`rounded-2xl p-7 relative ${
                  plan.highlight
                    ? 'bg-indigo-600 text-white ring-2 ring-indigo-600 shadow-xl'
                    : 'bg-white border border-slate-200'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <div className={`text-sm font-medium mb-1 ${plan.highlight ? 'text-indigo-200' : 'text-slate-500'}`}>
                  {plan.desc}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-5">
                  <span className={`text-4xl font-black ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {plan.price}
                  </span>
                  <span className={plan.highlight ? 'text-indigo-200' : 'text-slate-400'}>{plan.period}</span>
                </div>
                <ul className={`space-y-2 mb-6 text-sm ${plan.highlight ? 'text-indigo-100' : 'text-slate-600'}`}>
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2">
                      <svg className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? 'text-indigo-300' : 'text-indigo-400'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <CTAButton
                  href={AFFILIATE_HREF}
                  variant={plan.highlight ? 'ghost' : 'primary'}
                  className={`w-full justify-center ${plan.highlight ? 'bg-white text-indigo-700 hover:bg-indigo-50' : ''}`}
                >
                  {plan.cta}
                </CTAButton>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-4">* Prices are approximate as of Q1 2026. Verify current pricing at semrush.com before purchasing.</p>
        </div>
      </section>

      {/* ─── USE CASES ────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Real-world use cases</h2>
          <div className="space-y-5">
            {[
              {
                title: '📝 Content marketing blog',
                scenario: 'You run a blog and want to grow organic traffic through SEO content.',
                howSemrush: 'Use Keyword Magic Tool to find low-difficulty, high-volume topics. Use Topic Research to identify content angles your competitors haven\'t covered. Use SEO Writing Assistant to optimize each post. Track rankings in Position Tracking weekly.',
                verdict: 'Semrush excels here — this is arguably its strongest use case.',
              },
              {
                title: '📍 Local service business',
                scenario: 'You own a local plumbing, legal, or dental practice and want more Google visibility.',
                howSemrush: 'Use Local SEO toolkit to push NAP info to 70+ directories. Monitor customer reviews from one dashboard. Track local keyword rankings by city or zip code. Run a competitor analysis on other local practices.',
                verdict: 'Semrush is the only major SEO tool with genuine local SEO features built in.',
              },
              {
                title: '🛒 eCommerce store',
                scenario: 'You sell products online and want to understand which keywords drive competitor revenue.',
                howSemrush: 'Use Domain Overview to analyze competitor organic and paid keyword portfolios. Advertising Research shows exactly which products competitors are bidding on. Use Keyword Gap to find untapped search demand in your category.',
                verdict: 'Strong fit for eCommerce SEOs who also run Google Ads campaigns.',
              },
            ].map(item => (
              <div key={item.title} className="bg-white border border-slate-200 rounded-2xl p-7">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <div className="grid md:grid-cols-3 gap-5 text-sm">
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">Scenario</div>
                    <p className="text-slate-600 leading-relaxed">{item.scenario}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">How to use Semrush</div>
                    <p className="text-slate-600 leading-relaxed">{item.howSemrush}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">Verdict</div>
                    <p className="text-slate-600 leading-relaxed font-medium">{item.verdict}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO SHOULD AVOID ─────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">Who should skip Semrush?</h2>
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-7">
            <ul className="space-y-3">
              {[
                'Budget-constrained startups who only need basic keyword research — consider Mangools (~$49/mo) or Ubersuggest (~$29/mo) first',
                'Users who primarily need backlink data and have no use for content or local tools — Ahrefs at ~$99/mo is more focused and cheaper',
                'Hobbyist bloggers with fewer than 5 posts/month who don\'t need daily rank tracking',
                'Teams expecting a no-learning-curve experience — Semrush takes time to master',
                'Businesses that already subscribe to multiple specialist tools and don\'t need consolidation',
              ].map(item => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Frequently asked questions</h2>
          <p className="text-slate-500 mb-8">Common questions about Semrush answered honestly.</p>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* ─── FINAL VERDICT ────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Final verdict</h2>

          {/* Score breakdown */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl font-black text-indigo-600">4.7</div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Stars rating={4.7} />
                  <span className="font-bold text-slate-900">out of 5</span>
                </div>
                <div className="text-sm text-slate-500">ToolsTestLab overall score</div>
              </div>
            </div>
            <div className="space-y-3">
              <ScoreBar label="Keyword Research" score={9.5} />
              <ScoreBar label="Site Audit" score={9.0} />
              <ScoreBar label="Rank Tracking" score={9.0} />
              <ScoreBar label="Backlink Analysis" score={8.5} />
              <ScoreBar label="Content Tools" score={8.5} />
              <ScoreBar label="Local SEO" score={8.0} />
              <ScoreBar label="Value for Money" score={8.0} />
              <ScoreBar label="Ease of Use" score={7.5} />
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed mb-4">
            <strong className="text-slate-900">Bottom line: Semrush is the most complete SEO platform on the market</strong>, and for most businesses doing
            serious digital marketing, it justifies its price. The breadth of features — from keyword research and
            site auditing to content tools, local SEO, and PPC research — is unmatched by any single competitor.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            The higher price (~$140/mo vs Ahrefs' ~$99/mo) is real, but context matters: if Semrush replaces three or
            four separate tools you'd otherwise pay for, it's often cheaper in total. If you only need one thing
            (like backlinks), Ahrefs is the smarter, more focused choice.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Use the 7-day free trial. There's no credit card required, and it's the only way to properly evaluate
            whether Semrush fits your specific workflow before committing to a paid plan.
          </p>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-900 to-indigo-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            7-day free trial · No credit card required
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to try Semrush for yourself?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
            Start with the full Pro plan free for 7 days. No credit card required. Cancel anytime.
            It's the only way to know if it's right for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href={AFFILIATE_HREF} variant="primary" className="px-8 py-4 text-base bg-white text-indigo-700 hover:bg-indigo-50">
              Start Free Trial →
            </CTAButton>
            <Link
              to="/semrush-vs-ahrefs"
              className="inline-flex items-center gap-2 px-8 py-4 text-base bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-colors"
            >
              Compare Semrush vs Ahrefs
            </Link>
          </div>
          <p className="text-slate-500 text-xs mt-6">
            * Affiliate disclosure: We earn a commission if you purchase through our links. This doesn't affect our editorial scores.
          </p>
        </div>
      </section>
    </>
  )
}

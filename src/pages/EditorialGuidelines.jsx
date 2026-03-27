import LegalLayout from '../components/LegalLayout'
import { Link } from 'react-router-dom'

const scoringCriteria = [
  {
    label: 'Feature Set',
    weight: '20%',
    desc: 'Breadth and depth of features relative to price. Does it do what it claims? Are features polished and reliable?',
  },
  {
    label: 'Data Accuracy',
    weight: '20%',
    desc: 'How accurate is keyword volume, backlink data, rank tracking? We cross-reference against Google Search Console and other sources.',
  },
  {
    label: 'User Experience',
    weight: '15%',
    desc: 'Interface clarity, learning curve, navigation logic. Evaluated from the perspective of a first-time and experienced user.',
  },
  {
    label: 'Value for Money',
    weight: '15%',
    desc: 'Features delivered per dollar relative to competitors at the same price point.',
  },
  {
    label: 'Customer Support',
    weight: '10%',
    desc: 'We test live chat, email, and documentation. Response time, quality, and availability are measured.',
  },
  {
    label: 'Integrations',
    weight: '10%',
    desc: 'Compatibility with common tools: Google Analytics, Search Console, Looker Studio, CMS platforms.',
  },
  {
    label: 'Reliability & Performance',
    weight: '5%',
    desc: 'Platform uptime, speed of reports, data freshness, and any reliability issues encountered during testing.',
  },
  {
    label: 'Update Frequency',
    weight: '5%',
    desc: 'How often is the product meaningfully updated? Are user-reported issues addressed? Is the roadmap active?',
  },
]

export default function EditorialGuidelines() {
  return (
    <LegalLayout title="Editorial Guidelines" lastUpdated="March 2026">

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-10">
        <h2 className="text-lg font-bold text-emerald-900 mb-2">Our commitment</h2>
        <p className="text-emerald-800 leading-relaxed">
          ToolsTestLab exists to help people make better software decisions. Every editorial choice we make —
          what to review, how to score it, what to recommend — is guided by one question: <em>what would
          genuinely help our readers?</em> We do not optimize for commission rates, vendor relationships,
          or traffic. We optimize for trust.
        </p>
      </div>

      <Section title="Who We Are">
        <p>
          ToolsTestLab is an independent software review publication. Our team consists of practicing digital
          marketers, SEO specialists, and small business operators who use these tools in real work
          every day.
        </p>
        <p>
          We do not employ sales staff or accept vendor-commissioned content. Every review you read on
          ToolsTestLab was written by someone who tested the product firsthand with their own account.
        </p>
        <p className="text-slate-400 italic text-sm">
          [Placeholder: Add brief bios of your editorial team here.]
        </p>
      </Section>

      <Section title="How We Select Tools to Review">
        <p>We prioritize tools based on:</p>
        <ul>
          <li><strong>Reader demand:</strong> Tools our audience is actively searching for and asking about</li>
          <li><strong>Market relevance:</strong> Tools that represent meaningful options at their price point</li>
          <li><strong>Category coverage:</strong> Ensuring readers have enough options to make a real comparison</li>
        </ul>
        <p>
          We do not accept vendor nominations for review, and we do not charge for inclusion. No vendor
          can pay to be reviewed or to be excluded from review.
        </p>
      </Section>

      <Section title="Our Testing Process">
        <p>Every tool reviewed on ToolsTestLab goes through the following process:</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <strong>Purchase a real subscription.</strong> We do not use gifted accounts or vendor-provided
            access. We purchase the subscription our readers would buy.
          </li>
          <li>
            <strong>Active use for a minimum testing period.</strong> We use the tool on real projects for
            at least 30 days before publishing a review. For major tools like Semrush, we test for 60-90 days.
          </li>
          <li>
            <strong>Score against the rubric.</strong> See the scoring criteria below for our 8-category
            framework.
          </li>
          <li>
            <strong>Compare against alternatives.</strong> We benchmark every tool against its closest
            competitors at the same price point.
          </li>
          <li>
            <strong>Peer review.</strong> Every published review is reviewed by a second team member before
            publication.
          </li>
        </ol>
      </Section>

      <Section title="Our Scoring Methodology">
        <p>
          We score each tool across 8 criteria using a 0–10 scale. The final score is a weighted average.
        </p>
        <div className="mt-4 space-y-3">
          {scoringCriteria.map(c => (
            <div key={c.label} className="flex gap-4 bg-slate-50 rounded-xl p-4">
              <div className="flex-shrink-0 w-16 text-center">
                <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-bold px-2 py-1 rounded-lg">
                  {c.weight}
                </span>
              </div>
              <div>
                <div className="font-semibold text-slate-800 text-sm mb-0.5">{c.label}</div>
                <div className="text-sm text-slate-500">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4">
          Scores are not negotiable with vendors. We do not share draft scores with vendors before publication.
        </p>
      </Section>

      <Section title="Affiliate Relationships & Editorial Independence">
        <p>
          ToolsTestLab earns revenue through affiliate commissions. See our{' '}
          <Link to="/affiliate-disclosure">Affiliate Disclosure</Link> for full details.
        </p>
        <p>
          Our editorial policy on affiliate relationships is strict:
        </p>
        <ul>
          <li>Affiliate commissions do not influence scores, rankings, or recommendations</li>
          <li>We review tools regardless of whether we have an affiliate deal</li>
          <li>We publish negative reviews even when it costs us commissions</li>
          <li>Vendors cannot pay to improve their placement or score</li>
          <li>We disclose affiliate relationships on every page that contains them</li>
        </ul>
        <p>
          The same tool in the same category is evaluated with the same rubric, regardless of commission rate.
        </p>
      </Section>

      <Section title="Update Policy">
        <p>
          Software changes. Prices change. Features are added and removed. We maintain our reviews
          accordingly:
        </p>
        <ul>
          <li>
            <strong>Quarterly reviews:</strong> Every published review is evaluated quarterly and updated
            if any significant changes have occurred.
          </li>
          <li>
            <strong>Triggered updates:</strong> Major product changes (new pricing, significant new features,
            acquisitions) trigger an immediate review update.
          </li>
          <li>
            <strong>Last updated date:</strong> Every review shows the date it was last verified, so you
            always know how current the information is.
          </li>
        </ul>
      </Section>

      <Section title="Corrections Policy">
        <p>
          We strive for accuracy, but mistakes happen. If you find an error in our content:
        </p>
        <ul>
          <li>Contact us via our <Link to="/contact">contact form</Link> with details of the error</li>
          <li>We will investigate and respond within 5 business days</li>
          <li>Confirmed errors are corrected promptly with a correction note added to the article</li>
          <li>We do not silently edit published content — significant changes are noted</li>
        </ul>
        <p>
          We appreciate readers who take the time to report errors. It makes our content better for everyone.
        </p>
      </Section>

      <Section title="Questions?">
        <p>
          If you have questions about our editorial practices or want to report a potential conflict of
          interest, please <Link to="/contact">contact us</Link>. We take editorial integrity seriously
          and welcome scrutiny.
        </p>
      </Section>
    </LegalLayout>
  )
}

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">{title}</h2>
      <div className="space-y-4 text-slate-600 leading-relaxed [&_ol]:pl-5 [&_ol]:space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-indigo-600 [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-indigo-800 [&_strong]:font-semibold [&_strong]:text-slate-700 [&_em]:italic">
        {children}
      </div>
    </div>
  )
}

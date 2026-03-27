import LegalLayout from '../components/LegalLayout'
import { Link } from 'react-router-dom'

export default function AffiliateDisclosure() {
  return (
    <LegalLayout title="Affiliate Disclosure" lastUpdated="March 2026">

      {/* Summary box */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 mb-10">
        <h2 className="text-lg font-bold text-indigo-900 mb-2">The short version</h2>
        <p className="text-indigo-800 leading-relaxed">
          Some links on ToolsTestLab are affiliate links. If you click one and buy a product, we earn a small
          commission — at no extra cost to you. This is how we fund the site and keep our reviews free.
          Our rankings, scores, and editorial opinions are <strong>never influenced</strong> by affiliate
          relationships. We recommend tools we've personally tested and genuinely believe in.
        </p>
      </div>

      <Section title="What Is an Affiliate Link?">
        <p>
          An affiliate link is a special URL that contains a tracking code. When you click an affiliate link
          and make a purchase, the vendor (e.g., Semrush) pays us a referral commission. This commission comes
          from the vendor's marketing budget — it does not add anything to the price you pay.
        </p>
        <p>
          Affiliate marketing is a standard, FTC-regulated practice used by publishers and media companies
          worldwide, including major outlets like The Wirecutter (New York Times), Forbes Advisor, and PCMag.
          ToolsTestLab operates under the same model.
        </p>
      </Section>

      <Section title="FTC Compliance">
        <p>
          In accordance with the Federal Trade Commission's{' '}
          <a href="https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" target="_blank" rel="noopener noreferrer">
            guidelines on endorsements and testimonials
          </a>
          , we disclose our affiliate relationships clearly and prominently:
        </p>
        <ul>
          <li>A disclosure notice appears at the top of every page containing affiliate links</li>
          <li>The footer of every page contains an affiliate disclosure statement</li>
          <li>This dedicated disclosure page provides full details</li>
        </ul>
        <p>
          We believe in transparency and take our FTC compliance seriously. If you have concerns about any
          specific disclosure, please <Link to="/contact">contact us</Link>.
        </p>
      </Section>

      <Section title="Our Affiliate Relationships">
        <p>
          ToolsTestLab currently has or may have affiliate relationships with the following companies. This list
          may be updated as new relationships are established:
        </p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 my-4">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Company</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Product</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Relationship</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { company: 'Semrush', product: 'SEO & marketing platform', rel: 'Affiliate partner' },
                { company: 'Ahrefs', product: 'SEO & backlink tools', rel: 'Affiliate partner' },
                { company: 'SE Ranking', product: 'SEO platform', rel: 'Affiliate partner' },
                { company: '[Add others here]', product: '[Product type]', rel: 'Affiliate partner' },
              ].map(row => (
                <tr key={row.company} className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-800">{row.company}</td>
                  <td className="px-4 py-3 text-slate-600">{row.product}</td>
                  <td className="px-4 py-3 text-slate-600">{row.rel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-slate-400 italic">
          This list is updated periodically. If a tool we review is not listed above, it means we currently
          have no affiliate relationship with that vendor.
        </p>
      </Section>

      <Section title="How This Affects Our Reviews">
        <p>
          It doesn't — and here's how we ensure that:
        </p>
        <ul>
          <li>
            <strong>We review tools we don't have affiliate deals with.</strong> Our reviews of Ahrefs,
            Moz, and others exist regardless of whether we earn a commission.
          </li>
          <li>
            <strong>We publish negative findings.</strong> Every review includes cons and limitations. We
            don't remove or soften criticism to protect affiliate relationships.
          </li>
          <li>
            <strong>Our scores are based on a fixed rubric.</strong> We use the same 8-criteria scoring
            methodology for every tool, regardless of how much commission we earn.
          </li>
          <li>
            <strong>Editorial staff cannot accept vendor payments.</strong> We do not accept payment for
            reviews, placements, or editorial coverage of any kind.
          </li>
        </ul>
        <p>
          For full details on how we evaluate tools, see our{' '}
          <Link to="/editorial-guidelines">Editorial Guidelines</Link>.
        </p>
      </Section>

      <Section title="How to Identify Affiliate Links">
        <p>
          All external links to paid products on this site may be affiliate links. You can identify them
          because they:
        </p>
        <ul>
          <li>Typically link to vendor pricing or sign-up pages</li>
          <li>Include a disclosure note near the CTA button or at the top of the page</li>
          <li>Carry the <code>rel="sponsored"</code> attribute in the HTML (visible in your browser's developer tools)</li>
        </ul>
        <p>
          If you prefer not to use affiliate links, you can navigate directly to any vendor's website by
          typing their URL into your browser. You'll get exactly the same product and pricing — we simply
          won't receive a referral fee for your purchase.
        </p>
      </Section>

      <Section title="Questions?">
        <p>
          If you have questions about our affiliate relationships or disclosure practices, please{' '}
          <Link to="/contact">contact us</Link>. We're happy to clarify anything.
        </p>
      </Section>

    </LegalLayout>
  )
}

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">{title}</h2>
      <div className="space-y-4 text-slate-600 leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-indigo-600 [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-indigo-800 [&_strong]:font-semibold [&_strong]:text-slate-700 [&_code]:bg-slate-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-xs [&_code]:font-mono">
        {children}
      </div>
    </div>
  )
}

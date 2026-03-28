import LegalLayout from '../components/LegalLayout'
import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <LegalLayout title="Terms of Use" lastUpdated="March 2026">
      <Section title="Acceptance of Terms">
        <p>
          By accessing or using ToolsTestLab ("Site," "we," "us," or "our"), you agree to be bound by these
          Terms of Use. If you do not agree to these terms, please do not use this Site.
        </p>
        <p>
          We reserve the right to update these terms at any time. Continued use of the Site following any
          changes constitutes acceptance of those changes. The "Last updated" date at the top of this page
          indicates when the terms were last revised.
        </p>
      </Section>

      <Section title="Use of the Site">
        <p>You may use this Site for lawful, personal, non-commercial purposes only. You agree not to:</p>
        <ul>
          <li>Use the Site in any way that violates applicable local, national, or international laws or regulations</li>
          <li>Reproduce, duplicate, copy, or resell any part of the Site without our written permission</li>
          <li>Transmit any unsolicited or unauthorized advertising or promotional material</li>
          <li>Attempt to gain unauthorized access to any part of the Site or its related systems</li>
          <li>Use automated tools to scrape, crawl, or extract content from the Site without permission</li>
          <li>Impersonate ToolsTestLab or any of its contributors</li>
        </ul>
      </Section>

      <Section title="Intellectual Property">
        <p>
          All content on this Site — including text, graphics, logos, images, and software — is the property
          of ToolsTestLab or its content suppliers and is protected by applicable copyright, trademark, and other
          intellectual property laws.
        </p>
        <p>
          You may share or link to individual articles and pages on this Site, provided you give appropriate
          credit and do not misrepresent our content. Reproducing substantial portions of our content without
          permission is not allowed.
        </p>
        <p>
          Product names, logos, and trademarks mentioned on this Site (such as Semrush, Ahrefs, Moz, etc.)
          are the property of their respective owners. Their mention does not imply endorsement or affiliation.
        </p>
      </Section>

      <Section title="Affiliate Links & Commercial Relationships">
        <p>
          ToolsTestLab participates in affiliate marketing programs. Some links on this Site are affiliate links,
          which means we may earn a commission if you click through and make a purchase — at no additional
          cost to you.
        </p>
        <p>
          Our affiliate relationships do not influence our editorial content, rankings, or recommendations.
          For full details, see our{' '}
          <Link to="/affiliate-disclosure" className="text-indigo-600 underline underline-offset-2 hover:text-indigo-800">
            Affiliate Disclosure
          </Link>{' '}
          and{' '}
          <Link to="/editorial-guidelines" className="text-indigo-600 underline underline-offset-2 hover:text-indigo-800">
            Editorial Guidelines
          </Link>.
        </p>
      </Section>

      <Section title="Disclaimer of Warranties">
        <p>
          The information on this Site is provided "as is" and "as available" without warranties of any kind,
          either express or implied, including but not limited to warranties of accuracy, completeness,
          merchantability, fitness for a particular purpose, or non-infringement.
        </p>
        <p>
          We make reasonable efforts to keep content accurate and up to date, but we cannot guarantee that
          all information is current, complete, or error-free. Software pricing, features, and availability
          are subject to change without notice — always verify details at the vendor's official website before
          making a purchasing decision.
        </p>
        <p>
          Nothing on this Site constitutes professional financial, legal, or technical advice. You should
          consult appropriate professionals for advice specific to your situation.
        </p>
      </Section>

      <Section title="Limitation of Liability">
        <p>
          To the fullest extent permitted by law, ToolsTestLab and its contributors shall not be liable for any
          direct, indirect, incidental, special, consequential, or punitive damages arising from:
        </p>
        <ul>
          <li>Your use of, or inability to use, this Site</li>
          <li>Any reliance placed on content published on this Site</li>
          <li>Purchases made through affiliate links</li>
          <li>Unauthorized access to or alteration of your data</li>
          <li>Any third-party content or conduct</li>
        </ul>
        <p>
          This limitation applies regardless of whether the damages arise in contract, tort, strict liability,
          or any other legal theory, even if we have been advised of the possibility of such damages.
        </p>
      </Section>

      <Section title="Third-Party Links">
        <p>
          This Site contains links to third-party websites, including affiliate partner sites. These links are
          provided for your convenience and information only. We do not endorse, control, or accept
          responsibility for the content, privacy practices, or accuracy of any third-party site.
          Visiting linked sites is at your own risk.
        </p>
      </Section>

      <Section title="Privacy">
        <p>
          Your use of this Site is also governed by our{' '}
          <Link to="/privacy-policy" className="text-indigo-600 underline underline-offset-2 hover:text-indigo-800">
            Privacy Policy
          </Link>
          , which is incorporated into these Terms by reference.
        </p>
      </Section>

      <Section title="Governing Law">
        <p>
          These Terms shall be governed by and construed in accordance with the laws of [YOUR STATE/COUNTRY],
          without regard to its conflict of law provisions. Any disputes arising from these Terms or your use
          of this Site shall be subject to the exclusive jurisdiction of the courts located in [YOUR JURISDICTION].
        </p>
        <p className="text-sm text-slate-400 italic">
          [Placeholder: Update jurisdiction to match your location before publishing.]
        </p>
      </Section>

      <Section title="Contact">
        <p>
          For questions about these Terms of Use, contact us at{' '}
          <a href="mailto:legal@toolstestlab.com" className="text-indigo-600 underline underline-offset-2">[YOUR EMAIL]</a>{' '}
          or via our <Link to="/contact" className="text-indigo-600 underline underline-offset-2">contact form</Link>.
        </p>
      </Section>
    </LegalLayout>
  )
}

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">{title}</h2>
      <div className="space-y-4 text-slate-600 leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_strong]:font-semibold [&_strong]:text-slate-700">
        {children}
      </div>
    </div>
  )
}

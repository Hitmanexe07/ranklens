import LegalLayout from '../components/LegalLayout'

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="March 2026">
      <Section title="Overview">
        <p>
          ToolsTestLab ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy
          explains how we collect, use, and safeguard information when you visit toolstestlab.com (the "Site").
          By using our Site, you agree to the practices described in this policy.
        </p>
        <p>
          We take your privacy seriously and will never sell your personal data to third parties.
        </p>
      </Section>

      <Section title="Information We Collect">
        <h3>Information you provide voluntarily</h3>
        <p>
          We may collect information you provide directly to us, such as when you:
        </p>
        <ul>
          <li>Contact us via our contact form (name, email address, message content)</li>
          <li>Subscribe to our newsletter (email address)</li>
          <li>Leave a comment or submit feedback</li>
        </ul>

        <h3>Information collected automatically</h3>
        <p>
          When you visit the Site, we automatically collect certain information, including:
        </p>
        <ul>
          <li><strong>Log data:</strong> IP address, browser type, operating system, referring URLs, pages visited, and time spent on pages</li>
          <li><strong>Device data:</strong> Device type, screen resolution, and browser settings</li>
          <li><strong>Cookies and tracking technologies:</strong> See our Cookies section below</li>
        </ul>
      </Section>

      <Section title="Cookies">
        <p>
          We use cookies and similar tracking technologies to improve your experience on our Site. Cookies are small
          text files stored on your device. We use:
        </p>
        <ul>
          <li>
            <strong>Essential cookies:</strong> Necessary for the Site to function. These cannot be disabled.
          </li>
          <li>
            <strong>Analytics cookies:</strong> We use Google Analytics to understand how visitors use our Site.
            Google Analytics collects anonymized data including page views, session duration, and traffic sources.
            You can opt out via the{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
              Google Analytics opt-out browser add-on
            </a>.
          </li>
          <li>
            <strong>Affiliate tracking cookies:</strong> When you click an affiliate link, third-party services
            (such as Semrush's affiliate program) may set cookies to track referrals. We do not control these cookies.
            See our Affiliate Disclosure for more information.
          </li>
        </ul>
        <p>
          You can control cookies through your browser settings. Note that disabling cookies may affect site functionality.
        </p>
      </Section>

      <Section title="How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve the Site</li>
          <li>Respond to your inquiries and support requests</li>
          <li>Send newsletters or updates (only if you opt in)</li>
          <li>Analyze usage patterns to improve content and user experience</li>
          <li>Comply with legal obligations</li>
          <li>Detect and prevent fraud or abuse</li>
        </ul>
        <p>
          We do not use your data for targeted advertising, and we will never sell your personal information.
        </p>
      </Section>

      <Section title="Third-Party Services">
        <p>We use the following third-party services that may collect data:</p>
        <ul>
          <li>
            <strong>Google Analytics:</strong> Traffic and usage analytics.{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google Privacy Policy
            </a>
          </li>
          <li>
            <strong>Affiliate networks:</strong> Semrush, Ahrefs, SE Ranking, and others have their own
            privacy policies that govern data collected when you click affiliate links.
          </li>
        </ul>
        <p>
          We are not responsible for the privacy practices of third-party sites. We encourage you to review
          their privacy policies before making any purchases.
        </p>
      </Section>

      <Section title="Your Rights">
        <p>
          Depending on your location, you may have the following rights regarding your personal data:
        </p>
        <ul>
          <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
          <li><strong>Correction:</strong> Request that we correct inaccurate data</li>
          <li><strong>Deletion:</strong> Request that we delete your personal data</li>
          <li><strong>Opt-out:</strong> Unsubscribe from marketing emails at any time</li>
          <li><strong>Data portability:</strong> Request your data in a portable format</li>
        </ul>
        <p>
          To exercise these rights, contact us at{' '}
          <a href="mailto:privacy@toolstestlab.com">[YOUR EMAIL ADDRESS]</a>.
          We will respond within 30 days.
        </p>
        <p>
          <strong>California residents (CCPA):</strong> You have the right to know what personal information
          we collect, the right to delete it, and the right to opt out of its sale. We do not sell personal information.
        </p>
        <p>
          <strong>EU/UK residents (GDPR):</strong> You have the right to lodge a complaint with your local
          data protection authority if you believe we have not handled your data lawfully.
        </p>
      </Section>

      <Section title="Data Retention">
        <p>
          We retain personal data only as long as necessary for the purposes outlined in this policy. Contact
          form submissions are retained for up to 12 months. Analytics data is retained per Google Analytics'
          default retention settings. You may request deletion at any time.
        </p>
      </Section>

      <Section title="Children's Privacy">
        <p>
          Our Site is not directed at children under the age of 13. We do not knowingly collect personal
          information from children. If you believe we have inadvertently collected data from a child, please
          contact us immediately and we will delete it.
        </p>
      </Section>

      <Section title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. We will post the updated policy on this page
          with a revised "Last updated" date. We encourage you to review this policy periodically. Continued
          use of the Site after changes constitutes acceptance of the updated policy.
        </p>
      </Section>

      <Section title="Contact Us">
        <p>
          If you have questions about this Privacy Policy or our data practices, please contact us:
        </p>
        <ul>
          <li>Email: <a href="mailto:privacy@toolstestlab.com">[YOUR EMAIL ADDRESS]</a></li>
          <li>Website: <a href="/contact">Contact form</a></li>
        </ul>
      </Section>
    </LegalLayout>
  )
}

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">{title}</h2>
      <div className="space-y-4 text-slate-600 leading-relaxed [&_h3]:font-semibold [&_h3]:text-slate-800 [&_h3]:mt-5 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-indigo-600 [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-indigo-800 [&_strong]:font-semibold [&_strong]:text-slate-700">
        {children}
      </div>
    </div>
  )
}

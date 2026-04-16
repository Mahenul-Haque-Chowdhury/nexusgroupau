import { LegalDocumentLayout } from "../components/LegalDocumentLayout";

const companyName = "Nexus Group Pty Ltd";
const abn = "[ABN pending]";

export function PrivacyPolicy() {
  return (
    <LegalDocumentLayout
      title="Privacy Policy"
      lastUpdated="[Insert date]"
      summary="This policy explains how we manage personal information across Content Refinery, website development services, CloakRoute anonymous communication gateways, and short-stay accommodation launch consulting."
    >
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">Company Details</h2>
        <p>
          <span className="text-white/55">Company:</span> {companyName} (ABN: {abn})
        </p>
        <p>
          <span className="text-white/55">Contact:</span> Privacy Officer - privacy@nexusgroup.ltd
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">1. Information We Collect</h2>
        <ul className="list-disc space-y-2 pl-6 text-white/75">
          <li>Identity and contact data: name, email, phone, and business address.</li>
          <li>Project data: briefs, raw footage, blog drafts, website credentials, and hotel financial models.</li>
          <li>Technical data: IP addresses, cookies, and analytics data.</li>
          <li>
            Sensitive data: we do not intentionally collect health or biometric information. If you use CloakRoute,
            we collect metadata (timestamps and traffic volume) but do not log message content.
          </li>
          <li>
            Children's data: our services are directed to business owners aged 18+. If we discover we collected data
            from a child under 18 without parental consent, we will delete it.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">2. How We Collect Information</h2>
        <ul className="list-disc space-y-2 pl-6 text-white/75">
          <li>Directly: via contact forms, proposals, and Slack or email communication.</li>
          <li>Automatically: via cookies and analytics tools on our website.</li>
          <li>Third parties: payment gateways (Stripe), cloud hosts (AWS), and analytics providers.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">3. How We Use Your Information (APP 6)</h2>
        <ul className="list-disc space-y-2 pl-6 text-white/75">
          <li>Deliver video edits, blog posts, and websites.</li>
          <li>
            Operate the CloakRoute anonymous gateway for whistleblowing or private feedback, subject to our
            acceptable use policy.
          </li>
          <li>Provide hotel and Airbnb feasibility studies.</li>
          <li>Send invoices and marketing communications (with opt-out options).</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">4. Disclosure of Personal Information</h2>
        <p className="text-white/75">We do not sell personal data. We may disclose data to:</p>
        <ul className="list-disc space-y-2 pl-6 text-white/75">
          <li>Service providers: Vimeo, Google Drive, and HubSpot.</li>
          <li>Legal and regulatory authorities when required by court order or the OAIC.</li>
          <li>
            CloakRoute exception: if gateway usage involves criminal activity (for example threats or illegal
            content), we will cooperate with law enforcement.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">5. Overseas Disclosure</h2>
        <p className="text-white/75">
          Data may be stored on servers in Australia, the United States (AWS), and the European Union. By engaging
          our services, you consent to this disclosure. We take reasonable steps to ensure overseas recipients comply
          with applicable Australian Privacy Principles (APPs).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">6. Data Security and Retention</h2>
        <ul className="list-disc space-y-2 pl-6 text-white/75">
          <li>Security: 256-bit encryption for websites and end-to-end encryption where possible for CloakRoute.</li>
          <li>Retention: project files deleted 12 months after final invoice payment.</li>
          <li>Retention: CloakRoute gateway logs deleted every 30 days.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">7. Your Rights (Access and Correction)</h2>
        <p className="text-white/75">
          You may request access to personal information we hold about you or request corrections. Because CloakRoute
          is anonymous, we cannot identify users to edit records unless you provide your unique session token.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">8. Complaints</h2>
        <p className="text-white/75">
          If you have a privacy grievance, contact us first at privacy@nexusgroup.ltd. If unresolved, you may complain
          to the Office of the Australian Information Commissioner (OAIC).
        </p>
      </section>
    </LegalDocumentLayout>
  );
}
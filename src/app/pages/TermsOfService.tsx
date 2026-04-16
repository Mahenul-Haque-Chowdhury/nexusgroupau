import { LegalDocumentLayout } from "../components/LegalDocumentLayout";

const companyName = "Nexus Group Pty Ltd";
const abn = "[ABN pending]";

export function TermsOfService() {
  return (
    <LegalDocumentLayout
      title="Terms of Service"
      lastUpdated="[Insert date]"
      summary="These Terms govern your use of services provided by Nexus Group Pty Ltd, including content production, website development, communication gateway services, and hospitality consulting."
    >
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">Company Details</h2>
        <p>
          <span className="text-white/55">Provider:</span> {companyName} (ABN: {abn})
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">1. Client Responsibilities and Prohibited Uses</h2>
        <p className="text-white/75">You agree not to use our services for:</p>
        <ul className="list-disc space-y-2 pl-6 text-white/75">
          <li>Illegal activity, including fraud, human trafficking, child exploitation, or cyber attacks.</li>
          <li>Spam or harassment, including using communication gateway services to send threats or spam.</li>
          <li>Infringement, including uploading video footage or blog text you do not own or license.</li>
        </ul>
        <p className="text-white/75">
          Violations may result in immediate termination without refund and reporting to the Australian Federal Police
          (AFP) where required.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">2. Intellectual Property (IP)</h2>
        <ul className="list-disc space-y-2 pl-6 text-white/75">
          <li>Client IP: you retain ownership of your raw footage and blog drafts.</li>
          <li>Our IP: we retain ownership of code libraries, templates, and proprietary CloakRoute software.</li>
          <li>
            Deliverables: upon final payment, you own the final website design and final edited video, excluding
            third-party licenses.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">3. Cancellation and Refunds</h2>
        <p className="text-white/75">
          Website development cancellations after wireframes are approved result in deposit forfeiture.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">4. Limitation of Liability</h2>
        <p className="text-white/75">To the maximum extent permitted by Australian Consumer Law (ACL):</p>
        <ul className="list-disc space-y-2 pl-6 text-white/75">
          <li>Our total liability is capped at fees paid by you during the previous 6 months.</li>
          <li>We are not liable for indirect losses, including lost profits due to service interruption.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">5. Dispute Resolution</h2>
        <p className="text-white/75">
          Before legal action, parties must attempt mediation in Perth, Western Australia.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">6. Governing Law</h2>
        <p className="text-white/75">These terms are governed by the laws of the Australian Capital Territory (ACT), Australia.</p>
      </section>
    </LegalDocumentLayout>
  );
}

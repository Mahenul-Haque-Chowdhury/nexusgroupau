import { LegalDocumentLayout } from "../components/LegalDocumentLayout";

const cookieTypes = [
  {
    type: "Strictly Necessary",
    purpose: "Required for website security and authenticated client portal sessions.",
    examples: "Session ID, CSRF tokens",
  },
  {
    type: "Performance / Analytics",
    purpose: "Measures visits and traffic sources (Google Analytics with anonymized IPs).",
    examples: "_ga, _gid",
  },
  {
    type: "Functionality",
    purpose: "Remembers site preferences such as saved interface settings.",
    examples: "user_prefs",
  },
  {
    type: "Marketing / Retargeting",
    purpose: "Used only if you explicitly opt in. We use minimal tracking by default.",
    examples: "N/A by default",
  },
];

export function CookiePolicy() {
  return (
    <LegalDocumentLayout
      title="Cookie Policy"
      lastUpdated="[Insert date]"
      summary="This Cookie Policy explains how Nexus Group uses cookies and similar technologies on www.nexusgroup.ltd in line with OAIC transparency guidance."
    >
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">1. What Are Cookies?</h2>
        <p className="text-white/75">
          Cookies are small text files placed on your device to store information about how you use and navigate a
          website.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">2. Types of Cookies We Use</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03]">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-white/[0.06] text-white/80">
              <tr>
                <th className="px-4 py-3 font-semibold">Cookie Type</th>
                <th className="px-4 py-3 font-semibold">Purpose</th>
                <th className="px-4 py-3 font-semibold">Examples</th>
              </tr>
            </thead>
            <tbody>
              {cookieTypes.map((cookie) => (
                <tr key={cookie.type} className="border-t border-white/10 text-white/75">
                  <td className="px-4 py-3 align-top">{cookie.type}</td>
                  <td className="px-4 py-3 align-top">{cookie.purpose}</td>
                  <td className="px-4 py-3 align-top">{cookie.examples}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">3. Your Control (Opt-Out)</h2>
        <ul className="list-disc space-y-2 pl-6 text-white/75">
          <li>Browser settings: you can block third-party cookies through your browser controls.</li>
          <li>Google Analytics: you can install the official Google Analytics Opt-out Browser Add-on.</li>
          <li>Withdrawal: disabling necessary cookies may prevent client portal login from working correctly.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">4. Consent</h2>
        <p className="text-white/75">
          By continuing to browse our site, you consent to performance cookies. For marketing cookies, we request
          explicit consent through a cookie banner before activation.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">5. Changes to This Cookie Policy</h2>
        <p className="text-white/75">
          We may update this policy from time to time. Any changes will be reflected by updating the Last Updated date
          at the top of this page.
        </p>
      </section>
    </LegalDocumentLayout>
  );
}

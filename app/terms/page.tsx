import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for ${site.brand} and ${site.complianceCompanyName}, including SMS and AI calling communication policies.`,
};

export default function TermsPage() {
  const company = site.complianceCompanyName;

  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      intro={`These terms govern your use of this website and any communications you receive from ${company}.`}
      lastUpdated="May 2026"
    >
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using this website, submitting a form, or otherwise
        communicating with {company}, you agree to be bound by these Terms &amp;
        Conditions and our{" "}
        <Link href={site.policiesPath}>Privacy Policy</Link>. If you do not agree
        with any part of these terms, please do not use the site or submit your
        information.
      </p>

      <h2>2. Website Use</h2>
      <p>
        The content on this website is provided for general informational
        purposes only. Listings, market data, and neighborhood information are
        provided in good faith, but {company} makes no representations or
        warranties of any kind, express or implied, about the completeness,
        accuracy, reliability, or suitability of the information for any
        purpose. Any reliance you place on such information is strictly at your
        own risk.
      </p>
      <p>
        You agree not to use the site in any way that is unlawful, harmful, or
        that interferes with the operation of the site or any other person&apos;s
        use of it.
      </p>

      <h2>3. SMS / Text Message Communications</h2>
      <p>
        By providing your mobile phone number and checking the consent box on
        any form on this site, you expressly agree to receive text (SMS)
        messages from {company} related to your inquiry, real estate services,
        appointment scheduling, follow-ups, and related updates.
      </p>
      <ul>
        <li>
          <strong>Message frequency:</strong> Message frequency varies based on
          your interactions and inquiries.
        </li>
        <li>
          <strong>Message &amp; data rates:</strong> Standard message and data
          rates may apply, as determined by your mobile carrier.
        </li>
        <li>
          <strong>Opt out at any time:</strong> Reply <strong>STOP</strong> to
          any message to unsubscribe. After you reply STOP, you will receive a
          confirmation message and no further texts will be sent.
        </li>
        <li>
          <strong>Help:</strong> Reply <strong>HELP</strong> to any message for
          assistance, or contact us using the information below.
        </li>
        <li>
          <strong>Carriers:</strong> Carriers are not liable for delayed or
          undelivered messages.
        </li>
      </ul>

      <h2>4. AI-Assisted and Automated Calling</h2>
      <p>
        By providing your phone number, you also consent to receive phone calls
        from {company}, including calls placed using automated technology and
        AI-assisted voice communications, for purposes related to your inquiry
        and real estate services.
      </p>
      <p>
        You may opt out of automated or AI-assisted calls at any time by
        telling the agent or AI assistant that you would like to stop receiving
        calls, by replying STOP to any related text message, or by contacting
        us directly using the information below. Consent to automated or
        AI-assisted calls is not a condition of any purchase or service.
      </p>

      <h2>5. Message &amp; Data Rate Disclaimer</h2>
      <p>
        Message and data rates may apply to any SMS sent to or received from
        {" "}{company}. Charges are determined by your wireless carrier, not by
        {" "}{company}. Please check your wireless plan for details.
      </p>

      <h2>6. Privacy</h2>
      <p>
        Your use of this site and any communications you receive are also
        governed by our{" "}
        <Link href={site.policiesPath}>Privacy Policy</Link>, which describes
        what information we collect, how we use it, and the categories of
        information we do and do not share.
      </p>

      <h2>7. Real Estate Disclosure</h2>
      <p>
        Real estate services are provided by licensed agents affiliated with{" "}
        {site.brokerage.name}, {site.brokerage.licenseLine}. Equal Housing
        Opportunity.
      </p>

      <h2>8. Changes to These Terms</h2>
      <p>
        {company} may update these Terms &amp; Conditions from time to time.
        Material changes will be reflected by updating the &quot;Last
        updated&quot; date at the top of this page. Continued use of the site
        after changes are posted constitutes your acceptance of the revised
        terms.
      </p>

      <h2>9. Contact</h2>
      <p>
        For questions about these Terms, your SMS or call preferences, or to
        opt out of communications, contact us:
      </p>
      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <a href={site.emailHref}>{site.email}</a>
        </li>
        <li>
          <strong>Phone:</strong>{" "}
          <a href={site.phoneHref}>{site.phone}</a>
        </li>
        <li>
          <strong>Brokerage:</strong> {site.brokerage.name} —{" "}
          {site.brokerage.address}
        </li>
      </ul>
    </LegalPage>
  );
}

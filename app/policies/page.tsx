import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.brand} and ${site.complianceCompanyName}, including how mobile opt-in information is handled.`,
};

export default function PoliciesPage() {
  const company = site.complianceCompanyName;

  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro={`This Privacy Policy explains what information ${company} collects, how it is used, and how mobile opt-in and consent information is handled.`}
      lastUpdated="May 2026"
    >
      <h2>1. Information We Collect</h2>
      <p>
        When you submit a form on this site or otherwise contact us, we may
        collect the following information that you voluntarily provide:
      </p>
      <ul>
        <li>First and last name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>The contents of your message</li>
        <li>Your consent to receive SMS messages and phone calls</li>
      </ul>
      <p>
        We may also collect basic technical information automatically (such as
        browser type, device type, and pages visited) to operate and improve
        the site.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>
        We use the information you provide to respond to your inquiry, schedule
        consultations, send transactional and follow-up communications,
        provide real estate services, and comply with legal obligations. We
        only use your phone number for the purposes you have consented to.
      </p>

      <h2>3. Mobile Information &amp; SMS Opt-In</h2>
      <p>
        <strong>
          No mobile information will be shared with third parties/affiliates
          for marketing/promotional purposes. All other categories exclude text
          messaging originator opt-in data and consent; this information will
          not be shared with any third parties.
        </strong>
      </p>
      <p>
        In plain language: your phone number and the consent you provided to
        receive SMS and phone calls from {company} stay with {company}. We do
        not sell, rent, or share your mobile opt-in data or consent records
        with third parties or affiliates for their marketing or promotional
        use.
      </p>

      <h2>4. SMS &amp; AI Calling Consent</h2>
      <p>
        By providing your phone number and checking the consent box on our
        forms, you agree to receive text messages and phone calls — including
        automated and AI-assisted communications — from {company} at the
        number provided. Message frequency varies. Message &amp; data rates
        may apply. Reply STOP to unsubscribe at any time. Reply HELP for help.
      </p>
      <p>
        Consent to receive SMS or AI-assisted calls is not a condition of any
        purchase or service. You may withdraw consent at any time as described
        in our <Link href={site.termsPath}>Terms &amp; Conditions</Link>.
      </p>

      <h2>5. How Information Is Shared</h2>
      <p>
        We may share the non-mobile portions of your information only with the
        following categories, and only as needed to deliver the services you
        have requested:
      </p>
      <ul>
        <li>
          Service providers who help us operate the site, manage CRM and
          communications, and deliver real estate services (subject to
          confidentiality obligations).
        </li>
        <li>
          Our affiliated brokerage, {site.brokerage.name}, for the purpose of
          providing the real estate services you requested.
        </li>
        <li>
          Government authorities or other parties when required by law, court
          order, or to protect rights, property, or safety.
        </li>
      </ul>
      <p>
        As noted above, mobile opt-in data and consent records are excluded
        from any sharing for marketing or promotional purposes.
      </p>

      <h2>6. Data Retention</h2>
      <p>
        We retain your information for as long as needed to provide the
        services you have requested, comply with legal and recordkeeping
        obligations, and resolve disputes. You may request deletion of your
        information at any time using the contact details below.
      </p>

      <h2>7. Your Choices</h2>
      <ul>
        <li>
          <strong>SMS opt-out:</strong> Reply <strong>STOP</strong> to any text
          message from us to unsubscribe.
        </li>
        <li>
          <strong>SMS help:</strong> Reply <strong>HELP</strong> to any text
          message for assistance.
        </li>
        <li>
          <strong>Call opt-out:</strong> Tell our agent or AI assistant that
          you would like to stop receiving calls, or contact us using the
          information below.
        </li>
        <li>
          <strong>Access &amp; deletion:</strong> Contact us to request access
          to, correction of, or deletion of your personal information.
        </li>
      </ul>

      <h2>8. Security</h2>
      <p>
        We use reasonable administrative, technical, and physical safeguards to
        protect the information we collect. No method of transmission over the
        Internet or electronic storage is 100% secure, however, and we cannot
        guarantee absolute security.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material changes
        will be reflected by updating the &quot;Last updated&quot; date at the
        top of this page.
      </p>

      <h2>10. Contact</h2>
      <p>
        For privacy questions, opt-out requests, or to exercise any of the
        choices above, contact us:
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

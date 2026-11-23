import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Open Source Engineers handles information submitted through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <span className="eyebrow">Legal / Privacy</span>
        <h1>Privacy, plainly.</h1>
        <p className={styles.updated}>Last updated: 23 November 2026</p>

        <div className={styles.body}>
          <p>
            This website is operated by {site.name}. We keep data collection to
            the minimum required to run the site and respond to people who
            contact us.
          </p>

          <h2>What we collect</h2>
          <p>
            If you submit the syllabus or lab-notes form, we receive the email
            address you provide and the course or context associated with it. We
            use it only to send the information you requested and occasional
            updates about OSE research and cohorts. You can ask to be removed at
            any time.
          </p>
          <p>
            If you email us, we receive your message and email address. We keep
            correspondence for as long as needed to respond and maintain a
            record of the conversation.
          </p>

          <h2>What we do not do</h2>
          <p>
            We do not sell personal information. We do not use invasive
            third-party advertising trackers. We do not share your email address
            with sponsors or partners.
          </p>

          <h2>Hosting and analytics</h2>
          <p>
            The site is hosted on Vercel, which processes standard technical
            request data such as IP addresses and user agents to deliver and
            secure the service. If we add privacy-respecting analytics later,
            this page will say so.
          </p>

          <h2>Your choices</h2>
          <p>
            You can request access to, correction of, or deletion of the
            information you have sent us by emailing{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>. We will respond
            within a reasonable period.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy can be sent to{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>

        <Link className="link-arrow" href="/">
          Back to home
        </Link>
      </div>
    </section>
  );
}

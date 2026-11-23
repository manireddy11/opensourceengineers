import Link from "next/link";
import { site } from "@/lib/site";
import { WaitlistForm } from "./WaitlistForm";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.statement}>
            <span className="eyebrow eyebrow--light">Stay close to the lab</span>
            <h2>
              Research in public.
              <br />
              <em>Learn in the open.</em>
            </h2>
            <p>
              Cohort dates, working papers, and field notes — sent when there is
              something worth saying.
            </p>
            <WaitlistForm
              dark
              compact
              buttonLabel="Get lab notes"
              placeholder="you@institute.edu"
              note=""
            />
          </div>

          <div className={styles.columns}>
            <div>
              <h3>Explore</h3>
              <Link href="/research">Research program</Link>
              <Link href="/research#publications">Publications</Link>
              <Link href="/courses">Open courses</Link>
              <Link href="/research#notes">Lab notes</Link>
            </div>
            <div>
              <h3>Lab</h3>
              <Link href="/about">About OSE</Link>
              <Link href="/about#principles">Principles</Link>
              <Link href="/about#open-roles">Open roles</Link>
              <Link href="/courses#how-it-works">How cohorts work</Link>
            </div>
            <div>
              <h3>Connect</h3>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <Link href="/research#notes">Research commons</Link>
              <Link href="/about#open-roles">Open roles</Link>
              <Link href="/privacy">Privacy</Link>
            </div>
          </div>
        </div>

        <div className={styles.wordmark} aria-hidden="true">
          <span>OSE</span>
          <p>
            Open Source Engineers
            <br />
            Research toward AGI, from neurons to first principles.
          </p>
        </div>

        <div className={styles.bottom}>
          <span>© 2026 {site.name}</span>
          <span className={styles.domain}>{site.domain}</span>
          <div className={styles.bottomLinks}>
            <Link href="/privacy">Privacy</Link>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.page}>
      <div className="container">
        <span className="eyebrow">Error / 404</span>
        <div className={styles.grid}>
          <h1>
            This thread
            <br />
            <em>does not exist.</em>
          </h1>
          <div>
            <p>
              The page you are looking for may have moved, or it may still be an
              open question. Try the research program or the course catalog.
            </p>
            <div className={styles.actions}>
              <Link className="button" href="/">
                Back to home
              </Link>
              <Link className="button button--ghost" href="/research">
                Research
              </Link>
            </div>
          </div>
        </div>
        <span className={styles.bigNumber} aria-hidden="true">
          404
        </span>
      </div>
    </section>
  );
}

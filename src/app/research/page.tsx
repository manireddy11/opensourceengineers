import type { Metadata } from "next";
import Link from "next/link";
import { WaitlistForm } from "@/components/WaitlistForm";
import { notes, papers, researchThreads } from "@/lib/data";
import { site } from "@/lib/site";
import styles from "./research.module.css";

export const metadata: Metadata = {
  title: "Research",
  description:
    "A public research agenda toward AGI through neuroscience, metaphysics, learning systems, and open science. Read our threads, working papers, and lab notes.",
  alternates: { canonical: "/research" },
};

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

const principles = [
  {
    number: "01",
    title: "Publish early",
    body: "Working notes, failed experiments, and open questions belong in public. The polished paper is a checkpoint, not the whole process.",
  },
  {
    number: "02",
    title: "Build in the open",
    body: "Code, data, and evaluation harnesses ship with the claims. If a result cannot be reproduced by a stranger, it is not finished.",
  },
  {
    number: "03",
    title: "Stay with the question",
    body: "We optimize for understanding, not novelty. A thread can take years. The point is to get closer, not to publish more.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Research / Open agenda</span>
          <h1>
            A public research agenda for
            <br />
            <em>machines that think.</em>
          </h1>

          <div className="page-hero__body">
            <p>
              We study intelligence as a natural phenomenon and as an
              engineering target. Four threads, one question: what is a mind,
              and how do we build one responsibly?
            </p>
            <div className="page-hero__meta">
              <span>
                Threads <strong>04</strong>
              </span>
              <span>
                Papers <strong>05</strong>
              </span>
              <span>
                Model <strong>Independent lab</strong>
              </span>
              <span>
                License <strong>Open by default</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.principles}`}>
        <div className="container">
          <div className={styles.principleGrid}>
            {principles.map((principle) => (
              <div className={styles.principle} key={principle.number}>
                <span>{principle.number}</span>
                <h2>{principle.title}</h2>
                <p>{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.threadsSection}`} id="threads">
        <div className="container">
          <div className={styles.layout}>
            <aside className={styles.sidebar}>
              <span className="mono">Research threads</span>
              <nav aria-label="Research threads">
                {researchThreads.map((thread) => (
                  <a href={`#${thread.id}`} key={thread.id}>
                    <span>{thread.index}</span>
                    {thread.title}
                  </a>
                ))}
              </nav>
              <div className={styles.sidebarNote}>
                <span className="mono">Working principle</span>
                <p>
                  We publish the question before we know the answer. Uncertainty
                  is part of the record.
                </p>
              </div>
            </aside>

            <div className={styles.threadList}>
              {researchThreads.map((thread) => (
                <article
                  className={`${styles.thread} tone-${thread.tone}`}
                  id={thread.id}
                  key={thread.id}
                >
                  <div className={styles.threadHead}>
                    <span className={styles.threadIndex}>{thread.index}</span>
                    <span className="tag">{thread.kicker}</span>
                    <span className={styles.threadStatus}>{thread.status}</span>
                  </div>

                  <h2>{thread.title}</h2>
                  <p className={styles.threadLead}>{thread.description}</p>

                  <div className={styles.threadDetail}>
                    <div>
                      <span className="mono">Open questions</span>
                      <ol>
                        {thread.questions.map((question) => (
                          <li key={question}>{question}</li>
                        ))}
                      </ol>
                    </div>
                    <div>
                      <span className="mono">Current output</span>
                      <p>{thread.output}</p>
                      <Link className="link-arrow" href="#publications">
                        Related work <Arrow />
                      </Link>
                    </div>
                  </div>
                  <span className={styles.threadAccent} aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.publications}`} id="publications">
        <div className="container">
          <div className="section-head">
            <div className="section-head__title">
              <span className="eyebrow">Publications</span>
              <h2>
                Work in
                <br />
                <em>progress.</em>
              </h2>
            </div>
            <p className="section-head__intro">
              Preprints, working papers, benchmarks, and essays. Everything is
              public, versioned, and open to challenge.
            </p>
          </div>

          <div className={styles.pubList}>
            {papers.map((paper) => (
              <details key={paper.title}>
                <summary>
                  <span className={styles.pubYear}>{paper.year}</span>
                  <span className={styles.pubType}>{paper.type}</span>
                  <span className={styles.pubTitle}>
                    <strong>{paper.title}</strong>
                    <small>{paper.authors}</small>
                  </span>
                  <i aria-hidden="true">+</i>
                </summary>
                <div className={styles.pubBody}>
                  <p>{paper.abstract}</p>
                  <div className={styles.pubMeta}>
                    <span className="tag">{paper.thread}</span>
                    <a
                      href={`mailto:${site.email}?subject=${encodeURIComponent(
                        `Paper request: ${paper.title}`,
                      )}`}
                    >
                      Request paper <Arrow />
                    </a>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.notes}`} id="notes">
        <div className="container">
          <div className="section-head">
            <div className="section-head__title">
              <span className="eyebrow">Lab notes</span>
              <h2>
                Thinking out
                <br />
                <em>loud.</em>
              </h2>
            </div>
            <p className="section-head__intro">
              Short essays on method, philosophy, and the institutions of
              research. Written to be argued with.
            </p>
          </div>

          <div className={styles.noteGrid}>
            {notes.map((note, index) => (
              <Link
                className={styles.noteCard}
                href={`/notes/${note.slug}`}
                key={note.slug}
              >
                <div className={styles.noteTop}>
                  <span className={styles.noteNumber}>0{index + 1}</span>
                  <span className="tag">{note.tag}</span>
                </div>
                <time>{note.date}</time>
                <h3>{note.title}</h3>
                <p>{note.excerpt}</p>
                <div className={styles.noteFoot}>
                  <span>{note.readTime} read</span>
                  <span className={styles.noteLink}>
                    Read note <Arrow />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <span className="eyebrow eyebrow--light">Open invitation</span>
              <h2>
                Read with us.
                <br />
                <em>Argue with us.</em>
              </h2>
              <p>
                Join the public reading group, receive working papers as they
                are drafted, and help us keep the research honest.
              </p>
            </div>
            <div className={styles.ctaForm}>
              <span className="mono">Research notes / Monthly</span>
              <WaitlistForm
                dark
                buttonLabel="Join the reading group"
                note="Working papers, reading lists, and open lab notes."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

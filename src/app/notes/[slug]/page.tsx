import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WaitlistForm } from "@/components/WaitlistForm";
import { notes } from "@/lib/data";
import styles from "./note.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);

  if (!note) return { title: "Note not found" };

  return {
    title: note.title,
    description: note.excerpt,
    alternates: { canonical: `/notes/${note.slug}` },
    openGraph: {
      title: `${note.title} — OSE`,
      description: note.excerpt,
      type: "article",
      publishedTime: note.date,
    },
  };
}

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);

  if (!note) notFound();

  const currentIndex = notes.findIndex((item) => item.slug === note.slug);
  const nextNote = notes[(currentIndex + 1) % notes.length];

  return (
    <>
      <article>
        <header className={styles.hero}>
          <div className="container">
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/research#notes">Lab notes</Link>
              <span>/</span>
              <span>{note.tag}</span>
            </nav>

            <div className={styles.heroGrid}>
              <div>
                <span className="eyebrow">Lab note / {note.date}</span>
                <h1>{note.title}</h1>
                <p className={styles.excerpt}>{note.excerpt}</p>
              </div>
              <div className={styles.heroMeta}>
                <span>
                  Published <strong>{note.date}</strong>
                </span>
                <span>
                  Reading time <strong>{note.readTime}</strong>
                </span>
                <span>
                  Author <strong>OSE Research</strong>
                </span>
                <span>
                  Field <strong>{note.tag}</strong>
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className={styles.articleSection}>
          <div className={`container ${styles.articleGrid}`}>
            <aside className={styles.aside}>
              <span className="mono">In this note</span>
              <p>{note.excerpt}</p>
              <Link className="link-arrow" href="/research#notes">
                All notes <Arrow />
              </Link>
            </aside>

            <div className={styles.articleBody}>
              {note.body.map((paragraph, index) => (
                <div key={paragraph.slice(0, 40)}>
                  <p>{paragraph}</p>
                  {index === 1 && note.quote ? (
                    <blockquote>
                      <span aria-hidden="true">“</span>
                      {note.quote}
                    </blockquote>
                  ) : null}
                </div>
              ))}

              <div className={styles.endMark} aria-hidden="true">
                ✳
              </div>

              <div className={styles.author}>
                <div className={styles.authorMark}>OSE</div>
                <div>
                  <span className="mono">Written by</span>
                  <h2>Open Source Engineers</h2>
                  <p>
                    An independent research lab working toward AGI through
                    neuroscience, metaphysics, and open systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className={styles.next}>
        <div className="container">
          <div className={styles.nextInner}>
            <span className="eyebrow">Next note</span>
            <Link href={`/notes/${nextNote.slug}`}>
              <span className={styles.nextDate}>{nextNote.date}</span>
              <h2>{nextNote.title}</h2>
              <span className={styles.nextArrow}>
                Read next <Arrow />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.subscribe}>
        <div className="container">
          <div className={styles.subscribeInner}>
            <div>
              <span className="eyebrow eyebrow--light">Field notes / Monthly</span>
              <h2>
                Keep the
                <br />
                <em>conversation going.</em>
              </h2>
            </div>
            <WaitlistForm
              dark
              buttonLabel="Subscribe"
              note="New notes, working papers, and open questions."
            />
          </div>
        </div>
      </section>
    </>
  );
}

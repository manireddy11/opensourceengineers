import Link from "next/link";
import { NeuralField } from "@/components/NeuralField";
import { WaitlistForm } from "@/components/WaitlistForm";
import { courses, notes, researchThreads, stats } from "@/lib/data";
import styles from "./home.module.css";

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

const tickerItems = [
  "Open research",
  "Open curriculum",
  "Open questions",
  "Neuroscience",
  "Metaphysics",
  "Machine intelligence",
  "Public knowledge",
];

export default function Home() {
  const featured = courses.find((course) => course.featured) ?? courses[0];
  const otherCourses = courses.filter((course) => course.slug !== featured.slug).slice(0, 3);

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <div className={styles.status}>
                <span className={styles.statusDot} />
                <span>Cohort 03 applications open</span>
                <span className={styles.statusDivider} />
                <span className={styles.statusMuted}>Spring 2027</span>
              </div>

              <h1 className={styles.heroTitle}>
                Reverse-
                <br />
                engineering
                <br />
                intelligence,
                <br />
                <em>from first principles.</em>
              </h1>

              <p className={styles.heroBody}>
                Open Source Engineers is an independent research lab and course
                platform working toward AGI through neuroscience, metaphysics,
                and open systems.
              </p>

              <div className={styles.heroActions}>
                <Link className="button" href="/research">
                  Explore the research
                  <Arrow />
                </Link>
                <Link className="button button--ghost" href="/courses">
                  Browse courses
                </Link>
              </div>

              <div className={styles.heroMeta}>
                <span>Neuroscience</span>
                <span>Metaphysics</span>
                <span>Learning systems</span>
                <span>Open science</span>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <NeuralField />
              <div className={styles.visualNote}>
                <span className="mono">01 / The object of study</span>
                <p>
                  A mind is not a dataset.
                  <br />
                  It is a system that models itself.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.heroFoot}>
            <p className={styles.heroFootline}>
              <span>Independent research</span>
              <span>Public curriculum</span>
              <span>New York / Online</span>
            </p>
            <a className={styles.scrollCue} href="#premise">
              <span>Scroll to explore</span>
              <svg viewBox="0 0 14 20" fill="none" aria-hidden="true">
                <path d="M7 1v17M1.5 12.5 7 18l5.5-5.5" stroke="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.tickerTrack}>
          {[0, 1].map((copy) => (
            <div className={styles.tickerGroup} key={copy}>
              {tickerItems.map((item) => (
                <span key={`${copy}-${item}`}>
                  {item}
                  <i>✳</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className={`section ${styles.premise}`} id="premise">
        <div className="container">
          <div className={styles.premiseGrid}>
            <div>
              <span className="eyebrow">The premise</span>
              <h2 className={styles.premiseTitle}>
                Intelligence is not a benchmark.
                <br />
                It is a <em>way of being in the world.</em>
              </h2>
            </div>
            <div className={styles.premiseCopy}>
              <p>
                We are building a research practice around a simple conviction:
                the path to artificial general intelligence runs through a
                deeper understanding of minds — biological, philosophical, and
                synthetic.
              </p>
              <p>
                That means publishing our work, teaching what we learn, and
                staying honest about what we do not know. Not a race. A public
                inquiry.
              </p>
              <Link className="link-arrow" href="/research">
                Read the research agenda <Arrow />
              </Link>
            </div>
          </div>

          <div className={styles.stats}>
            {stats.map((stat) => (
              <div className={styles.stat} key={stat.label}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.research}`} id="research">
        <div className="container">
          <div className="section-head">
            <div className="section-head__title">
              <span className="eyebrow">Research program</span>
              <h2>
                Four threads.
                <br />
                <em>One question.</em>
              </h2>
            </div>
            <p className="section-head__intro">
              How does a physical system become a mind — and what would it mean
              to build one responsibly? Each thread is an angle on the same
              problem.
            </p>
          </div>

          <div className={styles.threadGrid}>
            {researchThreads.map((thread) => (
              <Link
                className={`${styles.thread} tone-${thread.tone}`}
                href={`/research#${thread.id}`}
                key={thread.id}
              >
                <div className={styles.threadTop}>
                  <span className={styles.threadIndex}>{thread.index}</span>
                  <span className="tag">{thread.kicker}</span>
                  <span className={styles.threadArrow}>
                    <Arrow />
                  </span>
                </div>
                <h3>{thread.title}</h3>
                <p>{thread.description}</p>
                <div className={styles.threadFoot}>
                  <span>{thread.status}</span>
                  <span>{thread.questions.length} open questions</span>
                </div>
                <span className={styles.threadBar} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.curriculum}`} id="curriculum">
        <div className="container">
          <div className="section-head">
            <div className="section-head__title">
              <span className="eyebrow">The curriculum</span>
              <h2>
                Learn the stack
                <br />
                of <em>intelligence.</em>
              </h2>
            </div>
            <p className="section-head__intro">
              Six open courses. Small live cohorts. No gatekeeping. Every
              syllabus is public, every cohort is taught by active researchers.
            </p>
          </div>

          <Link
            className={`${styles.featured} tone-${featured.tone}`}
            href={`/courses/${featured.slug}`}
          >
            <div className={styles.featuredArt}>
              <div className={styles.orbit}>
                <span className={styles.orbitCore} />
                <span className={styles.orbitRingOne} />
                <span className={styles.orbitRingTwo} />
                <span className={styles.orbitDot} />
              </div>
              <span className={styles.featuredNum}>01</span>
              <span className={styles.featuredLabel}>Featured course / Cohort 03</span>
            </div>
            <div className={styles.featuredBody}>
              <div className={styles.featuredTags}>
                <span className="tag tag--solid">{featured.category}</span>
                <span className="tag">{featured.level}</span>
                <span className="tag">{featured.duration}</span>
              </div>
              <h3>{featured.title}</h3>
              <p>{featured.summary}</p>
              <div className={styles.featuredMeta}>
                <span>
                  Starts <strong>{featured.nextCohort}</strong>
                </span>
                <span>
                  Format <strong>{featured.format}</strong>
                </span>
                <span>
                  Tuition <strong>{featured.tuition}</strong>
                </span>
              </div>
              <span className={styles.featuredLink}>
                Explore the course <Arrow />
              </span>
            </div>
          </Link>

          <div className={styles.courseList}>
            {otherCourses.map((course, index) => (
              <Link
                className={styles.courseRow}
                href={`/courses/${course.slug}`}
                key={course.slug}
              >
                <span className={styles.courseIndex}>0{index + 2}</span>
                <div className={styles.courseInfo}>
                  <span className="tag">{course.category}</span>
                  <h3>{course.title}</h3>
                </div>
                <span className={styles.courseDuration}>{course.duration}</span>
                <span className={styles.courseArrow}>
                  <Arrow />
                </span>
              </Link>
            ))}
          </div>

          <div className={styles.curriculumFoot}>
            <Link className="button button--ghost" href="/courses">
              View all six courses <Arrow />
            </Link>
            <p>
              All courses are free and open. Applications are reviewed in the
              order they arrive.
            </p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.notes}`} id="notes">
        <div className="container">
          <div className="section-head">
            <div className="section-head__title">
              <span className="eyebrow">From the lab</span>
              <h2>
                Notes before
                <br />
                <em>papers.</em>
              </h2>
            </div>
            <p className="section-head__intro">
              Working thoughts, method notes, and arguments in progress. We
              publish early because the conversation is part of the research.
            </p>
          </div>

          <div className={styles.notesGrid}>
            {notes.map((note, index) => (
              <article className={styles.note} key={note.title}>
                <div className={styles.noteTop}>
                  <span className={styles.noteNumber}>0{index + 1}</span>
                  <span className="tag">{note.tag}</span>
                </div>
                <time>{note.date}</time>
                <h3>{note.title}</h3>
                <p>{note.excerpt}</p>
                <div className={styles.noteFoot}>
                  <span>{note.readTime} read</span>
                  <Link className="link-arrow" href={`/notes/${note.slug}`}>
                    Read note <Arrow />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaCopy}>
              <span className="eyebrow">Cohort 03 / March 2027</span>
              <h2>
                The next cohort is
                <br />
                <em>for the curious.</em>
              </h2>
              <p>
                Forty seats. Six courses. One open question: what is
                intelligence, and how do we build it well?
              </p>
              <div className={styles.ctaActions}>
                <Link className="button" href="/courses">
                  Find your course <Arrow />
                </Link>
                <Link className="link-arrow" href="/about">
                  About the lab <Arrow />
                </Link>
              </div>
            </div>
            <div className={styles.ctaForm}>
              <span className="mono">Get the syllabus / No spam</span>
              <WaitlistForm
                buttonLabel="Send me the syllabus"
                note="Cohort dates, reading lists, and open research."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

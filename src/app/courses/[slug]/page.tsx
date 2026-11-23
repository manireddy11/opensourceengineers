import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WaitlistForm } from "@/components/WaitlistForm";
import { courses, getCourse } from "@/lib/data";
import styles from "./course.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);

  if (!course) return { title: "Course not found" };

  return {
    title: course.title,
    description: course.summary,
    alternates: { canonical: `/courses/${course.slug}` },
    openGraph: {
      title: `${course.title} — OSE`,
      description: course.summary,
      url: `/courses/${course.slug}`,
    },
  };
}

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourse(slug);

  if (!course) notFound();

  const related = courses
    .filter((item) => item.slug !== course.slug)
    .sort((a, b) => {
      const aMatch = a.category === course.category ? 0 : 1;
      const bMatch = b.category === course.category ? 0 : 1;
      return aMatch - bMatch;
    })
    .slice(0, 3);

  return (
    <>
      <section className={`${styles.hero} tone-${course.tone}`}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/courses">Courses</Link>
            <span>/</span>
            <span>{course.category}</span>
            <span>/</span>
            <span className={styles.breadcrumbCurrent}>{course.title}</span>
          </nav>

          <div className={styles.heroGrid}>
            <div className={styles.heroMain}>
              <div className={styles.tags}>
                <span className="tag tag--solid">{course.category}</span>
                <span className="tag">{course.level}</span>
                <span className="tag">{course.duration}</span>
              </div>
              <h1>{course.title}</h1>
              <p className={styles.lead}>{course.description}</p>

              <div className={styles.heroMeta}>
                <span>
                  <small>Next cohort</small>
                  <strong>{course.nextCohort}</strong>
                </span>
                <span>
                  <small>Format</small>
                  <strong>{course.format}</strong>
                </span>
                <span>
                  <small>Commitment</small>
                  <strong>{course.commitment}</strong>
                </span>
                <span>
                  <small>Tuition</small>
                  <strong>{course.tuition}</strong>
                </span>
              </div>
            </div>

            <aside className={styles.enroll} id="enroll">
              <div className={styles.enrollBar} aria-hidden="true" />
              <div className={styles.enrollHead}>
                <span className="mono">Cohort 03 / 2027</span>
                <span className={styles.seats}>
                  <i />
                  40 seats
                </span>
              </div>
              <h2>Request a seat</h2>
              <p>
                Applications are free and reviewed in the order they arrive.
                Tell us where to send the syllabus.
              </p>
              <WaitlistForm
                dark
                course={course.slug}
                buttonLabel="Request a seat"
                note="We will send the syllabus, dates, and preparation notes."
              />
              <ul className={styles.enrollList}>
                <li>
                  <span>Starts</span>
                  <strong>{course.nextCohort}</strong>
                </li>
                <li>
                  <span>Length</span>
                  <strong>{course.duration}</strong>
                </li>
                <li>
                  <span>Cost</span>
                  <strong>Free / Open access</strong>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className={`section ${styles.outcomes}`}>
        <div className="container">
          <div className={styles.outcomeGrid}>
            <div>
              <span className="eyebrow">What you leave with</span>
              <h2>
                Not a certificate.
                <br />
                <em>A way of working.</em>
              </h2>
            </div>
            <ol className={styles.outcomeList}>
              {course.outcomes.map((outcome, index) => (
                <li key={outcome}>
                  <span>0{index + 1}</span>
                  <p>{outcome}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.instructor}>
            <div className={styles.instructorMark} aria-hidden="true">
              OSE
            </div>
            <div>
              <span className="mono">Taught by</span>
              <h3>{course.instructor}</h3>
              <p>{course.instructorRole}</p>
            </div>
            <p className={styles.instructorNote}>
              OSE courses are taught by researchers who publish their work in
              the open. You will read primary sources, not just slides.
            </p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.curriculum}`} id="curriculum">
        <div className="container">
          <div className="section-head">
            <div className="section-head__title">
              <span className="eyebrow">The curriculum</span>
              <h2>
                {course.duration}.
                <br />
                <em>One question at a time.</em>
              </h2>
            </div>
            <p className="section-head__intro">
              Each module pairs a close reading with a small exercise. The
              syllabus is a starting point, not a script — cohorts follow the
              questions that turn out to matter.
            </p>
          </div>

          <div className={styles.modules}>
            {course.modules.map((module, index) => (
              <details key={module.title} open={index === 0}>
                <summary>
                  <span className={styles.moduleIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.moduleTitle}>
                    <strong>{module.title}</strong>
                    <small>{module.summary}</small>
                  </span>
                  <i aria-hidden="true">+</i>
                </summary>
                <div className={styles.moduleBody}>
                  <span className="mono">Lessons</span>
                  <ul>
                    {module.lessons.map((lesson) => (
                      <li key={lesson}>{lesson}</li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.related}`}>
        <div className="container">
          <div className="section-head">
            <div className="section-head__title">
              <span className="eyebrow">Keep going</span>
              <h2>
                Adjacent
                <br />
                <em>threads.</em>
              </h2>
            </div>
            <Link className="link-arrow" href="/courses">
              All courses <Arrow />
            </Link>
          </div>

          <div className={styles.relatedGrid}>
            {related.map((item, index) => (
              <Link
                className={`${styles.relatedCard} tone-${item.tone}`}
                href={`/courses/${item.slug}`}
                key={item.slug}
              >
                <div className={styles.relatedTop}>
                  <span className="mono">0{index + 1}</span>
                  <span className="tag">{item.category}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <div className={styles.relatedFoot}>
                  <span>{item.duration}</span>
                  <span className={styles.relatedArrow}>
                    <Arrow />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

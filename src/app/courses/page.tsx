import type { Metadata } from "next";
import Link from "next/link";
import { CourseCatalog } from "@/components/CourseCatalog";
import { WaitlistForm } from "@/components/WaitlistForm";
import { courses } from "@/lib/data";
import styles from "./courses.module.css";

export const metadata: Metadata = {
  title: "Open Courses",
  description:
    "Six free, open courses on neuroscience, philosophy of mind, agentic systems, alignment, and open research. Small live cohorts taught by active researchers.",
  alternates: { canonical: "/courses" },
};

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

const process = [
  {
    number: "01",
    title: "Request a seat",
    body: "Tell us what you are working on and which course fits. Applications are read by the people who teach the cohort — not a funnel.",
  },
  {
    number: "02",
    title: "Learn in public",
    body: "Six to eight weeks of live seminars, close readings, and small labs. Every reading list and session recording is published.",
  },
  {
    number: "03",
    title: "Build an artifact",
    body: "Finish with something real: a paper, a working prototype, an open dataset, or a syllabus someone else can teach from.",
  },
];

const faqs = [
  {
    question: "Are the courses really free?",
    answer:
      "Yes. All OSE courses are open access. We ask accepted participants to contribute one public artifact and to show up for their cohort. We are supported by grants, sponsors, and paid institutional partnerships — not tuition.",
  },
  {
    question: "Do I need a research background?",
    answer:
      "No. Foundations courses assume curiosity and basic quantitative comfort, not a specific degree. Advanced seminars are marked as such and list prerequisites on the course page.",
  },
  {
    question: "How much time should I commit?",
    answer:
      "Most courses ask for three to six hours per week: one live session, one reading block, and a small exercise. The build labs are heavier, and we say so up front.",
  },
  {
    question: "What happens after the cohort ends?",
    answer:
      "You keep access to the materials, join the OSE research commons, and can apply to continue as a collaborator on an open project. There is no upsell and no paid alumni tier.",
  },
];

export default function CoursesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Open curriculum / 2027</span>
          <h1>
            Courses for people
            <br />
            building the <em>next mind.</em>
          </h1>

          <div className="page-hero__body">
            <p>
              Six free courses across neuroscience, philosophy, engineering, and
              safety. Small live cohorts, public syllabi, and teachers who are
              still doing the work.
            </p>
            <div className="page-hero__meta">
              <span>
                Courses <strong>06</strong>
              </span>
              <span>
                Format <strong>Live + open</strong>
              </span>
              <span>
                Tuition <strong>Free</strong>
              </span>
              <span>
                Next cohort <strong>March 2027</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.catalog}`} id="catalog">
        <div className="container">
          <div className="section-head">
            <div className="section-head__title">
              <span className="eyebrow">The catalog</span>
              <h2>
                Choose your
                <br />
                <em>entry point.</em>
              </h2>
            </div>
            <p className="section-head__intro">
              Start with the brain, the philosophy, the engineering, or the
              institutions. The threads are designed to connect.
            </p>
          </div>

          <CourseCatalog />
        </div>
      </section>

      <section className={`section ${styles.process}`} id="how-it-works">
        <div className="container">
          <div className="section-head">
            <div className="section-head__title">
              <span className="eyebrow">How cohorts work</span>
              <h2>
                Small rooms.
                <br />
                <em>Serious work.</em>
              </h2>
            </div>
            <p className="section-head__intro">
              We keep cohorts small because the point is not scale. The point is
              a room where people can think out loud, disagree well, and leave
              with something they could not have built alone.
            </p>
          </div>

          <div className={styles.processGrid}>
            {process.map((step) => (
              <div className={styles.step} key={step.number}>
                <span className={styles.stepNumber}>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>

          <div className={styles.processNote}>
            <div>
              <span className="eyebrow eyebrow--light">The open commitment</span>
              <h3>
                Every syllabus, reading list, and session recording is public.
              </h3>
            </div>
            <p>
              We do not sell access to knowledge. We ask for attention,
              contribution, and a willingness to be wrong in public.
            </p>
            <Link className="button button--light" href="#catalog">
              Find a course <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <section className={`section ${styles.faq}`} id="faq">
        <div className="container">
          <div className={styles.faqGrid}>
            <div>
              <span className="eyebrow">Questions</span>
              <h2>
                The practical
                <br />
                <em>particulars.</em>
              </h2>
              <p>
                Still unsure? Write to us at{" "}
                <a href="mailto:hello@opensourceengineers.com">
                  hello@opensourceengineers.com
                </a>
                . A person reads it.
              </p>
            </div>

            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>
                    <span>{faq.question}</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <span className="eyebrow eyebrow--light">Cohort 03 / March 2027</span>
              <h2>
                Get the syllabus.
                <br />
                <em>Bring your question.</em>
              </h2>
              <p>
                {courses.length} courses. One open curriculum. Tell us where you
                want to start and we will send the reading list.
              </p>
            </div>
            <div className={styles.ctaForm}>
              <span className="mono">Syllabus request / 2027</span>
              <WaitlistForm
                dark
                buttonLabel="Send the syllabus"
                note="Cohort dates, reading lists, and open research. No spam."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

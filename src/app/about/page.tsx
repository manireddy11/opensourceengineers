import type { Metadata } from "next";
import Link from "next/link";
import { WaitlistForm } from "@/components/WaitlistForm";
import { site } from "@/lib/site";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Open Source Engineers is an independent research lab and course platform working toward AGI through neuroscience, metaphysics, and open systems.",
  alternates: { canonical: "/about" },
};

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

const principles = [
  {
    number: "01",
    title: "Open by default",
    body: "Research is a public good. We publish our questions, methods, failures, and artifacts — with explicit boundaries where openness would cause harm.",
  },
  {
    number: "02",
    title: "Philosophy is infrastructure",
    body: "Conceptual clarity is not decoration. It determines what we build, what we measure, and what we refuse to build. We treat it as engineering work.",
  },
  {
    number: "03",
    title: "Teach what we learn",
    body: "The fastest way to find out whether we understand something is to teach it. Courses are part of the research method, not a side business.",
  },
  {
    number: "04",
    title: "Small rooms, long horizons",
    body: "We optimize for depth over scale. Small cohorts, long-running threads, and a preference for questions that outlast a news cycle.",
  },
];

const building = [
  {
    label: "Research",
    title: "A public lab",
    body: "Four threads across neuroscience, metaphysics, learning systems, and open science. Working papers, open datasets, and replication-first protocols.",
    href: "/research",
  },
  {
    label: "Education",
    title: "An open curriculum",
    body: "Six free courses taught by active researchers. Live cohorts, public syllabi, and a final artifact that adds to the commons.",
    href: "/courses",
  },
  {
    label: "Institutions",
    title: "A research commons",
    body: "A place for collaborators, students, and critics to read together, argue well, and keep the work accountable.",
    href: "/research#notes",
  },
];

const roles = [
  {
    title: "Research collaborator",
    area: "Neuroscience / learning systems",
    type: "Open call · Remote",
  },
  {
    title: "Curriculum designer",
    area: "Philosophy / AI engineering",
    type: "Open call · Remote",
  },
  {
    title: "Open-source engineer",
    area: "Research tooling / evaluations",
    type: "Open call · Remote",
  },
  {
    title: "Editorial fellow",
    area: "Lab notes / public scholarship",
    type: "Open call · Remote",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About / The lab</span>
          <h1>
            A public lab for the
            <br />
            <em>hardest question.</em>
          </h1>

          <div className="page-hero__body">
            <p>
              Open Source Engineers is an independent research and education
              lab. We work on intelligence as a scientific problem, an
              engineering target, and a public responsibility.
            </p>
            <div className="page-hero__meta">
              <span>
                Founded <strong>2026</strong>
              </span>
              <span>
                Model <strong>Independent</strong>
              </span>
              <span>
                Base <strong>New York / Online</strong>
              </span>
              <span>
                Status <strong>Building in public</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.story}`}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div>
              <span className="eyebrow">Why we exist</span>
              <h2>
                The most important technology of our time should not be built
                <em> in the dark.</em>
              </h2>
            </div>
            <div className={styles.storyCopy}>
              <p>
                AI research is concentrated in a small number of labs, shaped by
                incentives that reward speed and secrecy. The results are
                extraordinary. The public understanding is not keeping up.
              </p>
              <p>
                OSE is an attempt to build a different kind of institution: one
                that treats intelligence research as a public inquiry, teaches
                in the open, and measures success by what the field understands
                — not by what a single company can ship.
              </p>
              <p>
                We are small on purpose. The lab is being assembled around
                long-running questions, not product cycles. If that sounds like
                your kind of place, we would like to hear from you.
              </p>
              <Link className="link-arrow" href="/research">
                Read the research agenda <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.manifesto}>
        <div className="container">
          <span className="eyebrow eyebrow--light">Manifesto / 001</span>
          <blockquote>
            “We do not need another race. We need a place where people can think
            together, publish what they find, and be honest about what they do
            not know.”
          </blockquote>
          <div className={styles.manifestoFoot}>
            <span>OSE / Founding note</span>
            <span>New York, 2026</span>
          </div>
        </div>
      </section>

      <section className={`section ${styles.principles}`} id="principles">
        <div className="container">
          <div className="section-head">
            <div className="section-head__title">
              <span className="eyebrow">Principles</span>
              <h2>
                How we
                <br />
                <em>work.</em>
              </h2>
            </div>
            <p className="section-head__intro">
              These are operating commitments, not aspirations. When we fall
              short, we write it down.
            </p>
          </div>

          <div className={styles.principleList}>
            {principles.map((principle) => (
              <div className={styles.principle} key={principle.number}>
                <span className={styles.principleNumber}>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.building}`}>
        <div className="container">
          <div className="section-head">
            <div className="section-head__title">
              <span className="eyebrow">What we are building</span>
              <h2>
                Three parts,
                <br />
                <em>one institution.</em>
              </h2>
            </div>
          </div>

          <div className={styles.buildingGrid}>
            {building.map((item, index) => (
              <Link className={styles.buildingCard} href={item.href} key={item.title}>
                <div className={styles.buildingTop}>
                  <span className="mono">0{index + 1} / {item.label}</span>
                  <span className={styles.buildingArrow}>
                    <Arrow />
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.roles}`} id="open-roles">
        <div className="container">
          <div className={styles.rolesGrid}>
            <div>
              <span className="eyebrow">Open call</span>
              <h2>
                Build this
                <br />
                <em>with us.</em>
              </h2>
              <p>
                We are assembling a founding network of researchers, engineers,
                philosophers, and educators. There are no formal job titles yet
                — just work that needs doing.
              </p>
              <a
                className="button"
                href={`mailto:${site.email}?subject=OSE%20—%20I%20want%20to%20build%20with%20you`}
              >
                Write to the lab <Arrow />
              </a>
            </div>

            <div className={styles.roleList}>
              {roles.map((role) => (
                <a
                  className={styles.role}
                  href={`mailto:${site.email}?subject=${encodeURIComponent(
                    `OSE — ${role.title}`,
                  )}`}
                  key={role.title}
                >
                  <div>
                    <span className="mono">{role.type}</span>
                    <h3>{role.title}</h3>
                    <p>{role.area}</p>
                  </div>
                  <span className={styles.roleArrow}>
                    <Arrow />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <span className="eyebrow eyebrow--light">Stay close</span>
              <h2>
                The lab is
                <br />
                <em>open.</em>
              </h2>
              <p>
                Get cohort dates, working papers, and notes from the research
                commons. No noise, no growth hacks.
              </p>
            </div>
            <WaitlistForm
              dark
              buttonLabel="Join the commons"
              note="Open research, new courses, and occasional invitations."
            />
          </div>
        </div>
      </section>
    </>
  );
}

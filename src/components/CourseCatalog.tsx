"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { courses } from "@/lib/data";
import styles from "./course-catalog.module.css";

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

export function CourseCatalog() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(courses.map((course) => course.category)))],
    [],
  );
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? courses
        : courses.filter((course) => course.category === active),
    [active],
  );

  return (
    <div>
      <div className={styles.filters}>
        <div className={styles.filterList} role="group" aria-label="Filter courses by subject">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`${styles.filter} ${active === category ? styles.filterActive : ""}`}
              onClick={() => setActive(category)}
              aria-pressed={active === category}
            >
              {category}
              <span>
                {category === "All"
                  ? courses.length
                  : courses.filter((course) => course.category === category).length}
              </span>
            </button>
          ))}
        </div>
        <span className={styles.count} aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "course" : "courses"} / open access
        </span>
      </div>

      <div className={styles.grid}>
        {filtered.map((course) => {
          const index = courses.findIndex((item) => item.slug === course.slug) + 1;
          return (
            <Link
              className={`${styles.card} tone-${course.tone}`}
              href={`/courses/${course.slug}`}
              key={course.slug}
            >
              <div className={styles.art}>
                <span className={styles.artLabel}>OSE / Course {String(index).padStart(2, "0")}</span>
                <span className={styles.artStatus}>
                  <i />
                  Enrollment open
                </span>
                <div className={styles.ring} aria-hidden="true">
                  <span />
                </div>
                <span className={styles.number}>{String(index).padStart(2, "0")}</span>
              </div>

              <div className={styles.body}>
                <div className={styles.tags}>
                  <span className="tag tag--solid">{course.category}</span>
                  <span className="tag">{course.level}</span>
                </div>
                <h2>{course.title}</h2>
                <p>{course.summary}</p>

                <div className={styles.meta}>
                  <span>
                    <small>Duration</small>
                    {course.duration}
                  </span>
                  <span>
                    <small>Commitment</small>
                    {course.commitment}
                  </span>
                  <span>
                    <small>Next cohort</small>
                    {course.nextCohort}
                  </span>
                </div>

                <div className={styles.foot}>
                  <span className={styles.tuition}>{course.tuition}</span>
                  <span className={styles.view}>
                    View course <Arrow />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

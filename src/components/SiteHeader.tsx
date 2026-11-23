"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import styles from "./site-header.module.css";

function LogoMark() {
  return (
    <svg
      className={styles.mark}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="14.5" stroke="currentColor" strokeWidth="1.3" />
      <ellipse
        cx="20"
        cy="20"
        rx="18.5"
        ry="6.4"
        stroke="currentColor"
        strokeWidth="1.1"
        transform="rotate(-32 20 20)"
      />
      <circle cx="32.4" cy="11.6" r="2.4" fill="var(--blue)" />
      <circle cx="20" cy="20" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
          open ? styles.open : ""
        }`}
      >
        <div className={`container ${styles.inner}`}>
          <Link
            className={styles.logo}
            href="/"
            aria-label="Open Source Engineers home"
            onClick={() => setOpen(false)}
          >
            <LogoMark />
            <span className={styles.logoType}>
              <strong>OSE</strong>
              <span>Open Source Engineers</span>
            </span>
          </Link>

          <nav className={styles.nav} aria-label="Main navigation">
            {nav.map((item) => {
              const active =
                !item.href.includes("#") &&
                pathname.startsWith(item.href.split("#")[0]);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navLink} ${active ? styles.active : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className={styles.actions}>
            <Link
              className={`button button--sm ${styles.cta}`}
              href="/courses/foundations-neural-computation#enroll"
            >
              <span className={styles.liveDot} />
              Join Cohort 03
            </Link>
            <button
              className={styles.menuButton}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              <span className={styles.menuLabel}>{open ? "Close" : "Menu"}</span>
              <span className={styles.menuIcon} aria-hidden="true">
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-navigation"
        className={`${styles.mobilePanel} ${open ? styles.mobilePanelOpen : ""}`}
        aria-hidden={!open}
      >
        <div className={styles.mobileTop}>
          <span className="mono">Navigation / 2027</span>
          <span className="mono">OSE — 01</span>
        </div>
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {nav.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              <span className="mono">0{index + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.mobileBottom}>
          <Link
            className="button"
            href="/courses/foundations-neural-computation#enroll"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
          >
            Join Cohort 03
          </Link>
          <p>
            Research toward AGI,
            <br />
            from neurons to first principles.
          </p>
        </div>
      </div>
    </>
  );
}

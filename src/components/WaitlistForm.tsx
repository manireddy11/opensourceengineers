"use client";

import { useId, useState } from "react";
import styles from "./waitlist-form.module.css";

type Props = {
  course?: string;
  dark?: boolean;
  compact?: boolean;
  buttonLabel?: string;
  placeholder?: string;
  note?: string;
};

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm({
  course,
  dark = false,
  compact = false,
  buttonLabel = "Request a seat",
  placeholder = "you@institute.edu",
  note = "No spam. Just cohort dates and open research.",
}: Props) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setMessage("");

    const form = new FormData(event.currentTarget);
    const website = String(form.get("website") ?? "");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, course, website }),
      });
      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setMessage(data.message || "You're on the list. We'll be in touch.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <div
      className={`${styles.wrap} ${dark ? styles.dark : ""} ${
        compact ? styles.compact : ""
      }`}
    >
      {status === "success" ? (
        <div className={styles.success} role="status" aria-live="polite">
          <span className={styles.check} aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none">
              <path d="m3 8.2 3.1 3.1L13 4.8" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </span>
          <div>
            <strong>You are in the loop.</strong>
            <p>{message}</p>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} className={styles.form}>
          <label className="sr-only" htmlFor={id}>
            Email address
          </label>
          <div className={styles.field}>
            <input
              id={id}
              type="email"
              name="email"
              autoComplete="email"
              placeholder={placeholder}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              disabled={status === "loading"}
            />
            <button type="submit" disabled={status === "loading"}>
              <span>{status === "loading" ? "Sending…" : buttonLabel}</span>
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </button>
          </div>
          <input
            className={styles.honeypot}
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          {note ? <p className={styles.note}>{note}</p> : null}
          {status === "error" ? (
            <p className={styles.error} role="alert">
              {message}
            </p>
          ) : null}
        </form>
      )}
    </div>
  );
}

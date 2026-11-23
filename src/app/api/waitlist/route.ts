import { NextResponse } from "next/server";

type WaitlistBody = {
  email?: unknown;
  course?: unknown;
  website?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let body: WaitlistBody;

  try {
    body = (await request.json()) as WaitlistBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ message: "You're on the list." });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const course = typeof body.course === "string" ? body.course : "general";

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const payload = {
    email,
    course,
    source: "opensourceengineers.com",
    submittedAt: new Date().toISOString(),
  };

  const webhook = process.env.WAITLIST_WEBHOOK_URL;

  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Webhook returned ${response.status}`);
      }
    } catch (error) {
      console.error("Waitlist webhook failed", error);
      return NextResponse.json(
        { error: "We couldn't save your request. Please try again shortly." },
        { status: 502 },
      );
    }
  } else {
    console.info("Waitlist signup (configure WAITLIST_WEBHOOK_URL to persist)", payload);
  }

  return NextResponse.json({
    message: "Cohort 03 opens in March 2027. We'll send the syllabus and dates.",
  });
}

export const site = {
  name: "Open Source Engineers",
  shortName: "OSE",
  domain: "opensourceengineers.com",
  url: "https://opensourceengineers.com",
  email: "hello@opensourceengineers.com",
  description:
    "An independent research lab and course platform working toward AGI through neuroscience, metaphysics, and open systems.",
  tagline: "Research toward AGI, from neurons to first principles.",
  // Add your profile URLs here when they are live.
  social: {
    github: "",
    x: "",
    linkedin: "",
  },
} as const;

export const nav = [
  { href: "/research", label: "Research" },
  { href: "/courses", label: "Courses" },
  { href: "/research#notes", label: "Lab notes" },
  { href: "/about", label: "About" },
] as const;

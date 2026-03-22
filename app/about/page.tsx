import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Softmark Collective – Simple Apps Built for Real Life",
  description:
    "Learn how Softmark Collective builds simple and powerful apps for everyday life, including gift planners, seating planners and mileage tracking apps.",
  keywords: [
    "about softmark collective",
    "simple apps for everyday life",
    "gift planner app",
    "mileage tracking app",
    "seating planner app",
    "minimalist productivity apps",
  ],
  openGraph: {
    title: "About Softmark Collective",
    description:
      "Discover the story behind Softmark Collective and how we build simple, useful apps designed for real life.",
    url: "https://softmarkcollective.com/about",
    siteName: "Softmark Collective",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen text-white bg-[#0a0f2c] relative overflow-hidden flex flex-col">

      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#1e3a8a] via-[#7c3aed] to-[#06b6d4]" />

      {/* 🔝 NAVBAR */}
      <nav className="w-full px-6 py-4 flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="font-semibold text-lg">
          Softmark Collective
        </Link>

        <div className="flex gap-6 text-white/80">
          <Link href="/">Home</Link>
          <Link href="/#apps">Apps</Link>
          <Link href="/about">About</Link>
          <Link href="/support">Support</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 py-20 max-w-5xl mx-auto text-center">

        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          About Softmark Collective – Simple Apps for Everyday Life
        </h1>

        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
          Softmark Collective builds simple and powerful apps designed for real life.
          From gift planning and mileage tracking to seating planners and productivity tools.
        </p>

        <p className="text-white/70 max-w-2xl mx-auto">
          The mission is simple: remove complexity and create tools that are easy to use,
          intuitive and genuinely helpful.
        </p>

      </section>

      {/* STORY */}
      <section className="px-6 pb-24 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            How it started
          </h2>

          <p className="text-white/70 mb-4">
            Softmark Collective started from a frustration shared by many:
            everyday apps are often too complex, cluttered or simply not designed
            for how people actually live.
          </p>

          <p className="text-white/70 mb-4">
            Instead of simplifying life, they often add more friction.
          </p>

          <p className="text-white/70 mb-4">
            That’s where the idea began – to create simple apps that solve real problems
            without unnecessary features.
          </p>

          <p className="text-white/70">
            Every app is built with clarity, usability and real-life value in mind.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border border-white/20">
          <Image
            src="/7.png"
            alt="App development and planning workspace showing simple productivity tools"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

      </section>

      {/* APPROACH */}
      <section className="px-6 pb-24 max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-semibold mb-6">
          A different approach to app development
        </h2>

        <p className="text-white/70 mb-6">
          Each app starts with a real-life need – not a long list of features.
        </p>

        <p className="text-white/70 mb-6">
          Whether it's a wedding seating planner, a gift tracking app or a mileage tracker,
          the focus is always the same:
        </p>

        <p className="text-white/70 mb-6">
          simplicity, clarity and usefulness.
        </p>

        <p className="text-white/70">
          If something feels complicated, it’s not finished yet.
        </p>

      </section>

      {/* PRINCIPLES */}
      <section className="px-6 pb-24 max-w-5xl mx-auto grid md:grid-cols-3 gap-8">

        <Value
          title="Simplicity first"
          text="Every feature must be useful and easy to understand."
        />

        <Value
          title="Built for real life"
          text="Apps are designed to fit into everyday situations."
        />

        <Value
          title="No unnecessary complexity"
          text="Clean design, focused features and no distractions."
        />

      </section>

      {/* YOU */}
      <section className="px-6 pb-24 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="rounded-3xl overflow-hidden border border-white/20">
          <Image
            src="/8.png"
            alt="Claudia founder of Softmark Collective app development"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Meet the founder
          </h2>

          <p className="text-white/70 mb-4">
            Claudia is the founder of Softmark Collective and the person behind the apps.
          </p>

          <p className="text-white/70 mb-4">
            With a strong focus on structure, clarity and real-world usability,
            she builds apps that solve everyday challenges.
          </p>

          <p className="text-white/70 mb-4">
            Every product is created with attention to detail – but only where it matters.
          </p>

          <p className="text-white/70">
            The goal is not to build more apps, but to build better ones.
          </p>
        </div>

      </section>

      {/* FUTURE */}
      <section className="px-6 pb-24 max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-semibold mb-6">
          The future of Softmark Collective
        </h2>

        <p className="text-white/70 mb-6">
          Softmark Collective continues to grow with a focus on quality over quantity.
        </p>

        <p className="text-white/70 mb-6">
          New apps will continue to be built around real needs –
          from productivity and planning to everyday organization.
        </p>

        <p className="text-white/70">
          The vision is clear: simple, useful apps that make life easier.
        </p>

      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-sm text-white/70 space-x-6">
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/support">Support</Link>
        <Link href="/contact">Contact</Link>
      </footer>

    </main>
  );
}

/* 🔹 COMPONENT */

function Value({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-white/70">{text}</p>
    </div>
  );
}
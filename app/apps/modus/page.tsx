import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modus – Seating Planner App for Weddings & Events",
  description:
    "Modus is a simple seating planner app for weddings and events. Create seating charts, manage guests and design table layouts with ease.",
  keywords: [
    "seating planner app",
    "wedding seating chart app",
    "event seating planner",
    "table planner app",
    "guest seating organizer",
    "wedding planning seating chart",
  ],
  openGraph: {
    title: "Modus – Seating Planner App",
    description:
      "Plan your wedding or event seating with a simple and visual seating planner.",
    url: "https://softmarkcollective.com/apps/modus",
    siteName: "Softmark Collective",
    type: "website",
  },
};

export default function ModusPage() {
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

      {/* 🚀 HERO */}
      <section className="px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-5xl font-semibold mb-6">
            Seating planner app for weddings & events
          </h1>

          <p className="text-xl text-white/80 mb-6">
            Modus helps you create seating charts, manage guests and design table layouts –
            all in one simple and visual app.
          </p>

          <p className="text-white/70 mb-8">
            Skip spreadsheets and last-minute chaos. Plan your seating calmly,
            clearly and with full control.
          </p>

          <a
            href="https://apps.apple.com"
            target="_blank"
            className="inline-block hover:scale-105 transition"
          >
            <Image src="/appstore.svg" alt="Download Modus seating planner app" width={180} height={60} className="h-14" />
          </a>

          <p className="text-white/60 text-sm mt-4">
            Wedding planner • Seating chart • No subscription
          </p>
        </div>

        {/* 📱 PHONES */}
        <div className="relative flex justify-center items-center h-[500px]">
          <div className="absolute w-[400px] h-[400px] bg-purple-500 blur-3xl opacity-30 rounded-full"></div>

          <div className="w-[200px] h-[420px] rounded-[40px] overflow-hidden border border-white/20 shadow-2xl bg-black absolute left-0 top-16 rotate-[-10deg] opacity-80">
            <Image src="/modus1.png" alt="Seating planner interface showing tables" width={200} height={420} className="w-full h-full object-cover" />
          </div>

          <div className="w-[220px] h-[460px] rounded-[40px] overflow-hidden border border-white/30 shadow-2xl bg-black relative z-10">
            <Image src="/modus2.png" alt="Wedding seating chart overview" width={220} height={460} className="w-full h-full object-cover" />
          </div>

          <div className="w-[200px] h-[420px] rounded-[40px] overflow-hidden border border-white/20 shadow-2xl bg-black absolute right-0 top-16 rotate-[10deg] opacity-80">
            <Image src="/modus3.png" alt="Table layout planner view" width={200} height={420} className="w-full h-full object-cover" />
          </div>
        </div>

      </section>

      {/* 💥 PROBLEM / VALUE */}
      <section className="px-6 pb-24 max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-semibold mb-6">
          Seating planning shouldn’t be stressful
        </h2>

        <p className="text-white/70 mb-6">
          Planning who sits where is one of the hardest parts of any event.
        </p>

        <p className="text-white/70 mb-6">
          Spreadsheets get messy. Paper notes get confusing.
          And changes quickly turn into chaos.
        </p>

        <p className="text-white/70">
          Modus gives you a clear, visual way to plan your seating –
          so you can focus on the event, not the logistics.
        </p>

      </section>

      {/* ⚙️ FEATURES */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">
          Everything you need to plan seating
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          <Feature title="Create seating charts" text="Design your seating plan visually in minutes." />
          <Feature title="Drag and drop guests" text="Move guests between tables instantly." />
          <Feature title="Full event overview" text="See your entire layout at a glance." />
          <Feature title="Flexible table layouts" text="Adjust tables anytime without starting over." />
          <Feature title="Perfect for weddings" text="Built specifically for wedding seating planning." />
          <Feature title="Simple and intuitive" text="No learning curve – just start planning." />

        </div>
      </section>

      {/* 🧠 HOW IT WORKS */}
      <section className="px-6 pb-24 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">
          How it works
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <Step number="1" text="Create your event" />
          <Step number="2" text="Add guests and tables" />
          <Step number="3" text="Arrange seating visually" />
        </div>

      </section>

      {/* 🎯 CTA */}
      <section className="text-center pb-24 px-6">

        <h2 className="text-3xl font-semibold mb-6">
          Plan your seating with confidence
        </h2>

        <p className="text-white/70 mb-8">
          Simple. Visual. Stress-free.
        </p>

        <a href="https://apps.apple.com" className="inline-block hover:scale-105 transition">
          <Image src="/appstore.svg" alt="Download Modus app" width={180} height={60} className="h-14" />
        </a>

      </section>

      {/* 🔻 FOOTER */}
      <footer className="text-center py-10 text-sm text-white/70 space-x-6">
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/support">Support</Link>
        <Link href="/contact">Contact</Link>
      </footer>

    </main>
  );
}

/* 🔹 COMPONENTS */

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl p-6">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-white/70">{text}</p>
    </div>
  );
}

function Step({ number, text }: { number: string; text: string }) {
  return (
    <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl p-6">
      <div className="text-2xl font-semibold mb-2">{number}</div>
      <p className="text-white/80">{text}</p>
    </div>
  );
}
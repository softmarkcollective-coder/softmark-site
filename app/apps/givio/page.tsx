import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Givio – Gift Planner App for Birthdays & Ideas",
  description:
    "Givio is a simple gift planner app to track gift ideas, birthdays and what you've already given. Stay organized and never forget a gift again.",
};

export default function GivioPage() {
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
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
            Never forget a gift again
          </h1>

          <p className="text-lg text-white/80 mb-6">
            Givio is your personal gift planner app – helping you keep track of gift ideas,
            birthdays and what you’ve already given.
          </p>

          <p className="text-white/70 mb-8">
            No more last-minute stress. No more forgotten ideas.  
            Just a simple, clean system that helps you stay thoughtful all year round.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="hover:scale-105 transition">
              <Image
                src="/appstore.svg"
                alt="Download Givio on the App Store"
                width={180}
                height={60}
                className="w-[160px]"
              />
            </a>

            <Link
              href="/#apps"
              className="border border-white/30 px-6 py-3 rounded-xl hover:bg-white/10 transition"
            >
              Explore apps
            </Link>
          </div>

          <p className="text-white/60 text-sm mt-4">
            Available on iPhone • Gift planner • No subscription
          </p>
        </div>

        {/* PHONES */}
        <div className="relative h-[500px] flex justify-center items-center">
          <div className="absolute w-[350px] h-[350px] bg-purple-500 blur-3xl opacity-30 rounded-full"></div>

          <div className="w-[180px] h-[380px] rounded-[40px] overflow-hidden border border-white/20 shadow-2xl bg-black absolute left-0 top-20 rotate-[-10deg] opacity-80">
            <Image src="/IMG_2316.png" alt="Gift planner overview screen" width={180} height={380} className="w-full h-full object-cover" />
          </div>

          <div className="w-[200px] h-[420px] rounded-[40px] overflow-hidden border border-white/30 shadow-2xl bg-black relative z-10">
            <Image src="/IMG_2312.png" alt="Gift planner app showing people and birthdays" width={200} height={420} className="w-full h-full object-cover" />
          </div>

          <div className="w-[180px] h-[380px] rounded-[40px] overflow-hidden border border-white/20 shadow-2xl bg-black absolute right-0 top-20 rotate-[10deg] opacity-80">
            <Image src="/IMG_2311.png" alt="Gift tracking history and stats" width={180} height={380} className="w-full h-full object-cover" />
          </div>
        </div>

      </section>

      {/* ✨ FEATURES */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">
          Why use Givio?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <Feature 
            title="Never forget a birthday" 
            text="Keep track of birthdays and upcoming events in one simple overview." 
          />
          <Feature 
            title="All gift ideas in one place" 
            text="Save ideas instantly – no more notes, screenshots or forgotten tabs." 
          />
          <Feature 
            title="Track what you’ve given" 
            text="Avoid duplicate gifts and always know your gift history." 
          />
        </div>
      </section>

      {/* 🧠 VALUE / USE CASE */}
      <section className="px-6 pb-24 max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-semibold mb-6">
          A simple system that actually works
        </h2>

        <p className="text-white/70 mb-6">
          Most people try to keep track of gifts in notes, screenshots or memory.
          It works… until it doesn’t.
        </p>

        <p className="text-white/70 mb-6">
          Givio gives you one place for everything:
          people, ideas, history and upcoming occasions.
        </p>

        <p className="text-white/70">
          So instead of scrambling last minute, you’re already prepared.
        </p>

      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 pb-24 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">
          How it works
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <Step number="01" title="Add people" text="Create your list of friends and family with birthdays." />
          <Step number="02" title="Save ideas" text="Add gift ideas instantly whenever inspiration hits." />
          <Step number="03" title="Stay organized" text="Always know what to buy and what you've already given." />
        </div>
      </section>

      {/* 🎯 CTA */}
      <section className="text-center pb-24 px-6">

        <h2 className="text-3xl font-semibold mb-6">
          Start planning gifts the easy way
        </h2>

        <p className="text-white/70 mb-8">
          Simple. Thoughtful. Stress-free.
        </p>

        <a href="#" className="inline-block hover:scale-105 transition">
          <Image
            src="/appstore.svg"
            alt="Download Givio on the App Store"
            width={180}
            height={60}
            className="w-[160px]"
          />
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
    <div className="bg-white/10 border border-white/20 rounded-3xl p-6">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-white/70">{text}</p>
    </div>
  );
}

function Step({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-left">
      <div className="text-white/40 text-sm mb-2">{number}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-white/70">{text}</p>
    </div>
  );
}
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planly – Simple Meal Planner & Weekly Food Planning App",
  description:
    "Planly is a simple meal planner app that helps you plan your weekly meals, organize your food and reduce everyday stress.",
  keywords: [
    "meal planner app",
    "weekly meal planner",
    "food planning app",
    "madplan app",
    "plan meals app",
    "family meal planner",
  ],
  openGraph: {
    title: "Planly – Meal Planner App",
    description:
      "Plan your meals, organize your week and make everyday life easier.",
    url: "https://softmarkcollective.com/apps/planly",
    siteName: "Softmark Collective",
    type: "website",
  },
};

export default function PlanlyPage() {
  return (
    <main className="min-h-screen text-white bg-[#0a0f2c] relative overflow-hidden flex flex-col">

      {/* 🌫️ BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0a0f2c] via-[#1e293b] to-[#0f172a]" />

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
            Plan your meals.  
            <br /> Make everyday easier.
          </h1>

          <p className="text-lg text-white/80 mb-6">
            Planly is a simple meal planner app that helps you organize your weekly meals,
            keep track of what to cook and avoid last-minute stress.
          </p>

          <p className="text-white/70 mb-8">
            No more “what should we eat today?”  
            Just a clear plan for your week.
          </p>

          <div className="flex flex-wrap items-center gap-4">

            <a href="#" className="hover:scale-105 transition">
              <Image
                src="/appstore.svg"
                alt="Download Planly meal planner app"
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
            Meal planner • Weekly overview • No subscription
          </p>
        </div>

        {/* 📱 PHONES */}
        <div className="relative h-[500px] flex justify-center items-center">

          <div className="absolute w-[300px] h-[300px] bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

          <div className="w-[180px] h-[380px] rounded-[40px] overflow-hidden border border-white/20 shadow-2xl bg-black absolute left-0 top-20 rotate-[-8deg] opacity-80">
            <Image src="/1.png" alt="Meal planner weekly view" width={180} height={380} className="w-full h-full object-cover" />
          </div>

          <div className="w-[200px] h-[420px] rounded-[40px] overflow-hidden border border-white/30 shadow-2xl bg-black relative z-10">
            <Image src="/3.png" alt="Weekly meal plan overview" width={200} height={420} className="w-full h-full object-cover" />
          </div>

          <div className="w-[180px] h-[380px] rounded-[40px] overflow-hidden border border-white/20 shadow-2xl bg-black absolute right-0 top-20 rotate-[8deg] opacity-80">
            <Image src="/2.png" alt="Food planning and meals list" width={180} height={380} className="w-full h-full object-cover" />
          </div>

        </div>

      </section>

      {/* 💥 PROBLEM */}
      <section className="px-6 pb-24 max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-semibold mb-6">
          Meal planning shouldn’t be stressful
        </h2>

        <p className="text-white/70 mb-6">
          Figuring out what to cook every day can be exhausting.
        </p>

        <p className="text-white/70 mb-6">
          You forget what you planned, buy the wrong groceries,
          or end up making last-minute decisions.
        </p>

        <p className="text-white/70">
          Planly gives you a simple overview – so you always know what’s for dinner.
        </p>

      </section>

      {/* ✨ FEATURES */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">

        <h2 className="text-3xl font-semibold mb-12 text-center">
          A simple way to plan your meals
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <Feature title="Plan your week" text="Create a clear weekly meal plan in minutes." />
          <Feature title="Stay organized" text="Always know what you’re cooking each day." />
          <Feature title="Reduce stress" text="No more daily decisions about dinner." />
        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 pb-24 max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-semibold mb-12">
          How it works
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <Step number="01" title="Add meals" text="Plan what you want to eat during the week." />
          <Step number="02" title="Organize your days" text="Assign meals to each day." />
          <Step number="03" title="Stay on track" text="Always know what’s for dinner." />
        </div>

      </section>

      {/* VALUE */}
      <section className="px-6 pb-24 max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-semibold mb-6">
          More structure. Less stress.
        </h2>

        <p className="text-white/70">
          With a clear meal plan, everyday life becomes easier.
          Planly helps you stay organized, save time and avoid unnecessary stress.
        </p>

      </section>

      {/* CTA */}
      <section className="text-center pb-24 px-6">

        <h2 className="text-3xl font-semibold mb-6">
          Start planning your meals today
        </h2>

        <p className="text-white/70 mb-8">
          Simple meal planning. Done right.
        </p>

        <a href="#" className="inline-block hover:scale-105 transition">
          <Image
            src="/appstore.svg"
            alt="Download Planly meal planner"
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
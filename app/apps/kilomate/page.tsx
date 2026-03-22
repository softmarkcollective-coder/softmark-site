import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kilomate – Mileage Tracking App for Work & Business",
  description:
    "Kilomate is a simple mileage tracking app for logging trips, calculating reimbursement and exporting reports. Perfect for freelancers and business use.",
};

export default function KilomatePage() {
  return (
    <main className="min-h-screen text-white bg-[#0a0f2c] relative overflow-hidden flex flex-col">

      {/* 🌫️ BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0a0f2c] via-[#052e2b] to-[#022c22]" />

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
            Track your mileage.  
            <br /> Get paid back.
          </h1>

          <p className="text-lg text-white/80 mb-6">
            Kilomate is a simple mileage tracking app that helps you log trips,
            calculate reimbursement and keep full control of your driving.
          </p>

          <p className="text-white/70 mb-8">
            Whether you're a freelancer, employee or self-employed – 
            you’ll always know exactly how much you’ve driven and what you’re owed.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="hover:scale-105 transition">
              <Image
                src="/appstore.svg"
                alt="Download Kilomate mileage tracking app on the App Store"
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
            Mileage tracker • Freelancers • No subscription
          </p>
        </div>

        {/* 📱 PHONES */}
        <div className="relative h-[500px] flex justify-center items-center">

          <div className="absolute w-[300px] h-[300px] bg-green-500 blur-3xl opacity-20 rounded-full"></div>

          <div className="w-[180px] h-[380px] rounded-[40px] overflow-hidden border border-white/20 shadow-2xl bg-black absolute left-0 top-20 rotate-[-8deg] opacity-80">
            <Image src="/4.png" alt="Mileage tracking app trips overview" width={180} height={380} className="w-full h-full object-cover" />
          </div>

          <div className="w-[200px] h-[420px] rounded-[40px] overflow-hidden border border-white/30 shadow-2xl bg-black relative z-10">
            <Image src="/5.png" alt="Kilomate mileage logging screen" width={200} height={420} className="w-full h-full object-cover" />
          </div>

          <div className="w-[180px] h-[380px] rounded-[40px] overflow-hidden border border-white/20 shadow-2xl bg-black absolute right-0 top-20 rotate-[8deg] opacity-80">
            <Image src="/6.png" alt="Mileage report and statistics screen" width={180} height={380} className="w-full h-full object-cover" />
          </div>

        </div>

      </section>

      {/* ✨ FEATURES */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">

        <h2 className="text-3xl font-semibold mb-12 text-center">
          Why use a mileage tracking app?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <Feature 
            title="Track every trip" 
            text="Log drives quickly and keep a complete mileage overview." 
          />
          <Feature 
            title="Accurate calculations" 
            text="Automatically calculate distance and reimbursement rates." 
          />
          <Feature 
            title="Export your data" 
            text="Generate reports for taxes, work or documentation in seconds." 
          />
        </div>

      </section>

      {/* 🧠 VALUE / USE CASE */}
      <section className="px-6 pb-24 max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-semibold mb-6">
          Stop guessing your mileage
        </h2>

        <p className="text-white/70 mb-6">
          Many people underestimate how much they drive for work.
          And that often means losing money.
        </p>

        <p className="text-white/70 mb-6">
          Kilomate gives you a simple and reliable system to track everything –
          so you always have the documentation you need.
        </p>

        <p className="text-white/70">
          No spreadsheets. No manual calculations. No stress.
        </p>

      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 pb-24 max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-semibold mb-12">
          How it works
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <Step number="01" title="Start a trip" text="Log your drive in seconds." />
          <Step number="02" title="Save automatically" text="Distance and data are stored instantly." />
          <Step number="03" title="Export anytime" text="Download reports whenever you need them." />
        </div>

      </section>

      {/* 🎯 CTA */}
      <section className="text-center pb-24 px-6">

        <h2 className="text-3xl font-semibold mb-6">
          Start tracking your mileage today
        </h2>

        <p className="text-white/70 mb-8">
          Simple. Accurate. Built for real life.
        </p>

        <a href="#" className="inline-block hover:scale-105 transition">
          <Image
            src="/appstore.svg"
            alt="Download Kilomate on the App Store"
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
    <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-6">
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
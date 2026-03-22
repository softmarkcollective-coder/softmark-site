import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support – Help for Modus, Givio, Kilomate & Planly",
  description:
    "Get help and support for Softmark Collective apps including Modus, Givio, Kilomate and Planly. Find answers or contact support.",
  keywords: [
    "app support",
    "customer support apps",
    "help mobile apps",
    "modus support",
    "givio support",
    "kilomate support",
    "planly support",
  ],
  openGraph: {
    title: "Support – Softmark Collective",
    description:
      "Find help, FAQs and support for all Softmark Collective apps.",
    url: "https://softmarkcollective.com/support",
    siteName: "Softmark Collective",
    type: "website",
  },
};

export default function SupportPage() {
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

      {/* 🛟 CONTENT */}
      <section className="flex-1 px-6 py-24 max-w-5xl mx-auto text-center">

        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          Support & Help Center
        </h1>

        <p className="text-white/80 mb-6 text-lg">
          Need help with one of our apps?
        </p>

        <p className="text-white/70 mb-12">
          Find answers below or contact us directly. We support all apps built by
          Softmark Collective.
        </p>

        {/* 📦 APP SUPPORT */}
        <div className="grid gap-6 md:grid-cols-2 mb-20">

          <SupportCard
            title="Modus"
            text="Seating planning, guests, tables and layouts."
          />

          <SupportCard
            title="Givio"
            text="Gift ideas, birthdays and tracking gifts."
          />

          <SupportCard
            title="Kilomate"
            text="Mileage tracking, exports and calculations."
          />

          <SupportCard
            title="Planly"
            text="Meal planning, weekly plans and organization."
          />

        </div>

        {/* ❓ FAQ */}
        <div className="text-left max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Frequently asked questions
          </h2>

          <FAQ
            q="Do I need an account to use the apps?"
            a="No. Our apps are designed to be simple and privacy-friendly, so most features work without creating an account."
          />

          <FAQ
            q="Is my data stored online?"
            a="No. Most data is stored locally on your device, giving you full control and privacy."
          />

          <FAQ
            q="Do the apps require a subscription?"
            a="No. Our apps are designed without subscriptions. You pay once – or use free features depending on the app."
          />

          <FAQ
            q="Can I export my data?"
            a="Yes. Some apps like Kilomate allow you to export your data for documentation or reporting."
          />

          <FAQ
            q="What if something doesn’t work?"
            a="Just contact us by email and we’ll help you as quickly as possible."
          />
        </div>

        {/* 📧 CONTACT */}
        <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-8 max-w-xl mx-auto">

          <h2 className="text-xl font-semibold mb-4">
            Contact support
          </h2>

          <p className="text-white/70 mb-4">
            If you need help, feel free to reach out:
          </p>

          <a
            href="mailto:softmarkcollective@gmail.com"
            className="text-lg font-semibold underline hover:text-white"
          >
            softmarkcollective@gmail.com
          </a>

          <p className="text-white/50 text-sm mt-4">
            We usually respond within 24–48 hours
          </p>

        </div>

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

function SupportCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl p-6 text-left">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-white/70">{text}</p>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-white mb-2">{q}</h3>
      <p className="text-white/70">{a}</p>
    </div>
  );
}
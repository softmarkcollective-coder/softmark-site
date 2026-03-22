import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact – Softmark Collective Support & Inquiries",
  description:
    "Get in touch with Softmark Collective. Contact us for support, feedback or questions about our apps including Modus, Givio, Kilomate and Planly.",
  keywords: [
    "contact softmark collective",
    "app support contact",
    "customer support apps",
    "contact app developer",
    "support mobile apps",
  ],
  openGraph: {
    title: "Contact – Softmark Collective",
    description:
      "Reach out for support, feedback or questions about our apps.",
    url: "https://softmarkcollective.com/contact",
    siteName: "Softmark Collective",
    type: "website",
  },
};

export default function ContactPage() {
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

      {/* 📩 CONTENT */}
      <section className="flex-1 px-6 py-24 max-w-4xl mx-auto text-center">

        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          Contact Softmark Collective
        </h1>

        <p className="text-white/80 mb-6 text-lg">
          Need help with one of our apps or have a question?
        </p>

        <p className="text-white/70 mb-6">
          We provide support for all our apps including Modus (seating planner),
          Givio (gift planner), Kilomate (mileage tracking) and Planly (meal planner).
        </p>

        <p className="text-white/70 mb-12">
          Whether it’s feedback, feature ideas or technical support –
          feel free to reach out anytime.
        </p>

        {/* 💬 CONTACT CARD */}
        <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-8 max-w-xl mx-auto">

          <p className="text-white/70 mb-4">
            Email support:
          </p>

          <a
            href="mailto:softmarkcollective@gmail.com"
            className="text-xl font-semibold underline hover:text-white"
          >
            softmarkcollective@gmail.com
          </a>

        </div>

        {/* 🔽 TRUST / SEO TEXT */}
        <div className="mt-12 space-y-4">
          <p className="text-white/60 text-sm">
            We typically respond within 24–48 hours.
          </p>

          <p className="text-white/50 text-sm">
            Softmark Collective builds simple and powerful apps designed to make everyday life easier.
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
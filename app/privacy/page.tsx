import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Softmark Collective",
  description:
    "Read the Privacy Policy for Softmark Collective apps including Modus, Givio, Kilomate and Planly. Learn how we handle and protect your data.",
  keywords: [
    "privacy policy apps",
    "data protection mobile apps",
    "softmark collective privacy",
    "app data usage policy",
    "user data privacy apps",
  ],
  openGraph: {
    title: "Privacy Policy – Softmark Collective",
    description:
      "How we handle, store and protect your data across our apps.",
    url: "https://softmarkcollective.com/privacy",
    siteName: "Softmark Collective",
    type: "website",
  },
};

export default function PrivacyPage() {
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

      {/* 🔐 CONTENT */}
      <section className="flex-1 px-6 py-24 max-w-4xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-center">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-white/70 leading-relaxed">

          <p>
            This Privacy Policy explains how Softmark Collective (“we”, “our”, or “us”)
            handles your information when you use our apps, including Modus, Givio,
            Kilomate and Planly.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Data Collection
            </h2>
            <p>
              We collect only the minimum amount of data necessary to provide our services.
              Most data is stored locally on your device and is not transmitted to us.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Personal Information
            </h2>
            <p>
              We do not collect personal data unless you voluntarily provide it,
              for example when contacting support via email.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              How Your Data Is Used
            </h2>
            <p>
              Any data handled by our apps is used solely to provide functionality
              and improve user experience. We do not use your data for advertising
              or tracking purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Third-Party Services
            </h2>
            <p>
              We do not sell, trade or share your data with third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Data Security
            </h2>
            <p>
              We take reasonable measures to protect your data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Your Control
            </h2>
            <p>
              You are always in control of your data. Most data is stored locally and can be deleted anytime.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Contact
            </h2>
            <p>
              Questions? Contact us:
            </p>
            <p className="mt-2">
              📧{" "}
              <a href="mailto:softmarkcollective@gmail.com" className="underline">
                softmarkcollective@gmail.com
              </a>
            </p>
          </div>

          <p className="text-sm text-white/50 pt-6">
            Last updated: {new Date().getFullYear()}
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
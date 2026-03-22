import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use – Softmark Collective",
  description:
    "Read the terms of use for Softmark Collective apps including Modus, Givio, Kilomate and Planly.",
  keywords: [
    "terms of use",
    "app terms and conditions",
    "software terms",
    "softmark collective terms",
  ],
  openGraph: {
    title: "Terms of Use – Softmark Collective",
    description:
      "Terms and conditions for using Softmark Collective apps.",
    url: "https://softmarkcollective.com/terms",
    siteName: "Softmark Collective",
    type: "website",
  },
};

export default function TermsPage() {
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

      {/* 📜 CONTENT */}
      <section className="flex-1 px-6 py-24 max-w-4xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-center">
          Terms of Use
        </h1>

        <div className="space-y-8 text-white/70 leading-relaxed">

          <p>
            These Terms of Use (“Terms”) govern your use of apps and services
            provided by Softmark Collective (“we”, “our”, or “us”).
            By using our apps, you agree to these Terms.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Use of Services
            </h2>
            <p>
              You agree to use our apps only for lawful purposes and in a way that
              does not misuse, disrupt or interfere with the functionality of the services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Intellectual Property
            </h2>
            <p>
              All content, design, branding and functionality in our apps are the
              property of Softmark Collective and may not be copied, modified or
              distributed without prior permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              App Functionality
            </h2>
            <p>
              We aim to provide simple and reliable apps, but we do not guarantee
              that all features will always be available, uninterrupted or error-free.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Limitation of Liability
            </h2>
            <p>
              Softmark Collective is not responsible for any data loss, damages or
              issues arising from the use of our apps. You use the apps at your own risk.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Changes to Services
            </h2>
            <p>
              We may update, improve or modify our apps at any time to enhance
              functionality or fix issues.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Changes to Terms
            </h2>
            <p>
              These Terms may be updated from time to time. Continued use of our apps
              after updates means you accept the revised Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Contact
            </h2>
            <p>
              If you have any questions about these Terms, you can contact us at:
            </p>
            <p className="mt-2">
              📧{" "}
              <a
                href="mailto:softmarkcollective@gmail.com"
                className="underline"
              >
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
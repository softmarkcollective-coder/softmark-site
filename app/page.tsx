import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Softmark Collective – Simple Apps for Everyday Life",
  description:
    "Softmark Collective builds simple and powerful apps including seating planners, gift trackers, meal planners and mileage apps. Designed for real life – clean, useful and easy to use.",
  keywords: [
    "app development company",
    "simple apps for everyday life",
    "seating planner app",
    "gift tracker app",
    "meal planner app",
    "mileage tracking app",
    "productivity apps",
    "minimalist apps",
  ],
  openGraph: {
    title: "Softmark Collective – Simple Apps for Everyday Life",
    description:
      "Simple and powerful apps including seating planners, gift trackers, meal planners and mileage tools.",
    url: "https://softmarkcollective.com",
    siteName: "Softmark Collective",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Softmark Collective apps preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen text-white bg-[#0a0f2c] relative overflow-hidden flex flex-col">

      {/* 🔝 NAVBAR */}
      <nav className="w-full px-6 py-4 flex justify-between items-center max-w-6xl mx-auto relative z-20">
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
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">

        <img
          src="/hero.png"
          alt="Simple apps for everyday life including seating planner, gift tracker, meal planner and mileage tracker"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight">
            Simple apps for everyday life
          </h1>

          <p className="text-xl text-white/80 mb-6">
            We build clean and intuitive apps including seating planners, gift trackers,
            meal planners and mileage tracking tools – designed to solve real problems without complexity.
          </p>

          <p className="text-white/70 mb-8">
            No clutter. No subscriptions. Just simple tools that actually work.
          </p>

          <Link
            href="/#apps"
            className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition inline-block"
          >
            Explore apps
          </Link>
        </div>

      </section>

      {/* 🔽 APPS */}
      <section id="apps" className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Our apps
        </h2>

        <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">
          Explore our growing collection of simple and powerful apps designed for
          everyday use – from event planning to personal organization.
        </p>

        <div className="grid gap-8 md:grid-cols-2">

          <AppCard
            name="Modus"
            description="Seating planner app for weddings, events and table layouts."
            link="/apps/modus"
            icon="/modus-icon.png"
          />

          <AppCard
            name="Givio"
            description="Gift planner app to organize ideas, birthdays and presents."
            link="/apps/givio"
            icon="/givio-icon.png"
          />

          <AppCard
            name="Kilomate"
            description="Mileage tracking app for simple and accurate distance logging."
            link="/apps/kilomate"
            icon="/kilomate-icon.png"
          />

          <AppCard
            name="Planly"
            description="Meal planning app to organize your weekly meals and shopping."
            link="/apps/planly"
            icon="/planly-icon.png"
          />

        </div>
      </section>

      {/* 🧠 EXTRA SEO / TRUST SECTION */}
      <section className="px-6 pb-24 max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-semibold mb-6">
          Built for real life
        </h2>

        <p className="text-white/70 mb-6">
          Softmark Collective focuses on building apps that solve real everyday problems.
          Whether it’s planning a wedding, tracking gifts, organizing meals or logging mileage,
          every app is designed to be simple, useful and easy to use.
        </p>

        <p className="text-white/70">
          We believe the best apps are the ones you don’t have to think about.
        </p>

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

/* 🔹 APP CARD */
function AppCard({
  name,
  description,
  link,
  icon,
}: {
  name: string;
  description: string;
  link: string;
  icon: string;
}) {
  return (
    <Link href={link}>
      <div className="group bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-6 shadow-xl hover:scale-[1.02] hover:bg-white/15 transition duration-300 cursor-pointer">

        <div className="flex items-center gap-4 mb-4">
          <Image
            src={icon}
            alt={`${name} app icon`}
            width={50}
            height={50}
            className="rounded-xl group-hover:scale-110 transition"
          />

          <h3 className="text-xl font-semibold">{name}</h3>
        </div>

        <p className="text-white/80">
          {description}
        </p>

      </div>
    </Link>
  );
} 
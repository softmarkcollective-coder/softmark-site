import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Softmark Collective",
  description: "Simple apps for everyday life. No clutter. No subscriptions.",

  openGraph: {
    title: "Softmark Collective",
    description: "Simple apps for everyday life.",
    url: "https://softmarkcollective.com",
    siteName: "Softmark Collective",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
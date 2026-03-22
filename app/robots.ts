export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://softmarkcollective.com/sitemap.xml",
  };
}
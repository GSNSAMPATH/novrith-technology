/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://novrithtechnology.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/api/*", "/admin/*", "/thank-you"],
  generateIndexSitemap: false, // optional
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/*", "/admin/*"],
      },
    ],
  },
};

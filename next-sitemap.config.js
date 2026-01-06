/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.novrithtech.com",
  generateRobotsTxt: true, // generates robots.txt
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,

  exclude: ["/admin", "/dashboard"],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path === "/" ? "daily" : "weekly",
      priority: path === "/" ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    };
  },
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://teamtechneekx.netlify.app',
  generateRobotsTxt: false, // We maintain an optimized custom public/robots.txt
  generateIndexSitemap: false,
  outDir: 'out',
  changefreq: 'weekly',
  priority: 0.8,
  transform: async (config, path) => {
    // Custom priority for highest-intent pages
    const priorities = {
      '/': 1.0,
      '/team/': 0.95,
      '/girls-in-techneekx/': 0.95,
      '/projects/': 0.95,
      '/join/': 0.9,
      '/events/': 0.85,
      '/journey/': 0.85,
      '/partners/': 0.8,
      '/gallery/': 0.75,
    };

    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};

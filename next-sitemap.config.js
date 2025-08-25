/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://prismpalette.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: [
    '/api/*',
    '/admin/*',
    '/private/*',
    '/_next/*',
    '/404',
    '/500',
    '/_error',
    '/_document',
  ],
  changefreq: 'weekly', 
  priority: 0.8,
  trailingSlash: false,
  sourceMap: false,
  // Add more sitemap options
  additionalPaths: async (config) => {
    const result = [
      {
        loc: '/',
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/palettes',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/generator',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/inspiration',
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
    ];
    return result;
  },
};

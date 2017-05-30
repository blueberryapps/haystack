import express from 'express';

const app = express();

const pages = ['/'];

app.use('/sitemap.xml', (req, res) => {
  res.send(`
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map(page => `<url><loc>${page}</loc></url>`).join('\n')}
    </urlset>
  `);
});

app.on('mount', () => {
  console.log('Sitemap is available at %ssitemap.xml', app.mountpath);
});

export default app;

import express from 'express';

const app = express();

app.use('/robots.txt', (req, res) => {
  res.send(
    [
      'User-agent: *',
      process.env.ENABLE_SEARCH_BOTS ? 'Disallow:' : 'Disallow: /'
    ].join('\n')
  );
});

app.on('mount', () => {
  console.log(
    'Robots.txt is available at %srobots.txt and %s search bots',
    app.mountpath,
    process.env.ENABLE_SEARCH_BOTS ? 'enable' : 'disable'
  );
});

export default app;

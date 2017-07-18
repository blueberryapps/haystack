import express from 'express';

const app = express();

app.use('/*.map', (req, res, next) => {
  if (process.env.APP_ENV === 'production') {
    res.status(404).send('Not Found');
  } else {
    next();
  }
});

app.on('mount', () => {
  console.log('Disable Source Maps %s*.map %s', app.mountpath, process.env.APP_ENV === 'production' ? 'enabled' : 'disabled');
});

export default app;

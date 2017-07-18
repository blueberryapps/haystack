import express from 'express';
import path from 'path';
import PrettyError from 'pretty-error';
import React from 'react';
import InternalServerError from './errors/InternalServerError.react';
import { NotFound } from './errors/NotFound.react';
import App from '../../browser/App.react';
import render from './render';
import { getFeatures } from '../../common/featureToggl';

const app = express();
const prettyError = new PrettyError();

app.use('/assets', express.static(path.join(__dirname, '..', '..', '..', 'dist', 'public', 'assets')));
app.use('/', express.static(path.join(__dirname, '..', '..', '..', 'public')));

app.get('*', (req, res, next) => {
  try {
    if (req.path === '/unknown') {
      return res.status(404).send(render(req, <NotFound location={{ pathname: req.path }} />));
    }
    const staticContext = {};
    const html = render(req, <App />, { staticContext, features: getFeatures(req) });
    const status = staticContext.status || 200;

    if (staticContext.url) {
      res.writeHead(302, { Location: staticContext.url });
      return res.end();
    }

    return res.status(status).send(html);
  } catch (err) {
    return next(err);
  }
});

// Internal server error handled by nice formatted HTML
app.use((err, req, res, next) => {
  console.error('Internal server error at %s', req.path);
  console.error(prettyError.render(err));

  if (process.env.APP_ENV === 'production' || process.env.HTML_ERRORS) {
    // we need to disable JS for 500 so there will be no react rendering at all
    res.status(500).send(render(req, <InternalServerError />, { disableJS: true }));
  } else {
    // In development show errors that make sense to developer
    next(err);
  }
});

app.on('mount', () => {
  console.log('Frontend is available at %s', app.mountpath);
});

export default app;

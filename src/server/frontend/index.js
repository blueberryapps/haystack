import App from '../../browser/App.react.js';
import express from 'express';
import htmlErrorHandler from './htmlErrorHandler';
import InternalServerError from './errors/InternalServerError.react';
import NotFound from './errors/NotFound.react';
import React from 'react';
import render from './render';

const app = express();

app.get('*', (req, res, next) => {
  try {
    if (req.path === '/unknown') {
      res.status(200).send(render(<NotFound path={req.path} />));
    }
    return res.status(200).send(render(<App />));
  } catch (e) {
    return next(e);
  }
});

// Internal server error handled by nice formatted HTML
app.use((err, req, res, next) => {
  console.error('Internal server error at ', req.path);
  console.error(err);

  if (process.env.NODE_ENV === 'production' || process.env.HTML_ERRORS) {
    res.status(500).send(render(<InternalServerError />));
  } else {
    // In development show errors that make sense to developer
    next(e);
  }
});

app.on('mount', () => {
  console.log('Frontend is available at %s', app.mountpath);
});

export default app;

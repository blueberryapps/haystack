import InternalServerError from './errors/InternalServerError.react';
import React from 'react';
import render from './render';

export default function htmlErrorHandler(err, req, res, next) {
  console.error('Internal server error at ', req.path)
  console.error(err)
  res.status(500).send(render(<InternalServerError />));
}

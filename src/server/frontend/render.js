import Helmet from 'react-helmet';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Html from './Html.react';

export default function render(app, options = {}) {
  const appHtml = ReactDOMServer.renderToString(app);

  const { javascript: javascripts } = webpackIsomorphicTools.assets();

  const docHtml = ReactDOMServer.renderToStaticMarkup(
    <Html
      javascripts={javascripts}
      options={options}
      helmet={Helmet.rewind()}
      bodyHtml={`<div id="app">${appHtml}</div>`}
    />
  );
  return `<!DOCTYPE html>${docHtml}`;
}

import Helmet from 'react-helmet';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Html from './Html.react';

export default function render(app, generatedAssets = {}, options = {}) {
  const appHtml = ReactDOMServer.renderToString(app);

  const docHtml = ReactDOMServer.renderToStaticMarkup(
    <Html
      generatedAssets={generatedAssets}
      options={options}
      helmet={Helmet.rewind()}
      bodyHtml={`<div id="app">${appHtml}</div>`}
    />
  );
  return `<!DOCTYPE html>${docHtml}`;
}

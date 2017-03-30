// @flow

import Helmet from 'react-helmet';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Html from './Html.react';
import ServerProvider from './ServerProvider.react';

export default function render(app : Object, options : Object = {}) {
  const appHtml = ReactDOMServer.renderToString(<ServerProvider>{app}</ServerProvider>);

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

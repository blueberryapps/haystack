import Helmet from 'react-helmet';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import createStore from '../../common/createStore';
import Html from './Html.react';
import ServerProvider from './ServerProvider.react';

export default function render(req, app, options = {}) {
  const store = createStore({}, {});
  const appHtml = ReactDOMServer.renderToString(
    <ServerProvider
      url={req.url}
      context={options.staticContext || {}}
      store={store}
    >
      {app}
    </ServerProvider>
  );

  const { javascript: javascripts } = webpackIsomorphicTools.assets();

  const docHtml = ReactDOMServer.renderToStaticMarkup(
    <Html
      javascripts={javascripts}
      options={options}
      helmet={Helmet.rewind()}
      bodyHtml={`<div id="app">${appHtml}</div>`}
      reduxState={store.getState()}
    />
  );
  return `<!DOCTYPE html>${docHtml}`;
}

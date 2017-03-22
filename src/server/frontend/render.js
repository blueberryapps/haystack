import Helmet from 'react-helmet';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import createStore from '../../common/createStore';
import Html from './Html.react';
import ServerProvider from './ServerProvider.react';
import translate from '../../localization';

export default function render(req, app, options = {}) {
  const store = createStore({ translate }, {});
  const appHtml = ReactDOMServer.renderToString(
    <ServerProvider
      context={options.staticContext || {}}
      radiumConfig={{ userAgent: req.headers['user-agent'] }}
      store={store}
      url={req.url}
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

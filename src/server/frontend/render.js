import Helmet from 'react-helmet';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import mobxReact from 'mobx-react';
import Html from './Html.react';
import ServerProvider from './ServerProvider.react';
import createStores, { getState } from '../../common/createStores';

// https://github.com/mobxjs/mobx-react#server-side-rendering-with-usestaticrendering
mobxReact.useStaticRendering(true);

export default function render(app, options = {}) {
  const mobxStores = createStores({ sample: { count: 2 } });

  const appHtml = ReactDOMServer.renderToString(<ServerProvider stores={mobxStores}>{app}</ServerProvider>);

  const { javascript: javascripts } = webpackIsomorphicTools.assets();

  const docHtml = ReactDOMServer.renderToStaticMarkup(
    <Html
      javascripts={javascripts}
      options={options}
      helmet={Helmet.rewind()}
      bodyHtml={`<div id="app">${appHtml}</div>`}
      mobxState={getState(mobxStores)}
    />
  );
  return `<!DOCTYPE html>${docHtml}`;
}

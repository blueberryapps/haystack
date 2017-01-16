import Html from './Html.react';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

export default function render(appHtml) {
  const docHtml = ReactDOMServer.renderToStaticMarkup(
    <Html>
      <div id="app">
        {appHtml}
      </div>
    </Html>
  );
  return `<!DOCTYPE html>${docHtml}`;
}

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Html from './Html.react';

export default function render(appHtml, generatedAssets = {}) {
  const docHtml = ReactDOMServer.renderToStaticMarkup(
    <Html generatedAssets={generatedAssets}>
      <div id="app">
        {appHtml}
      </div>
    </Html>
  );
  return `<!DOCTYPE html>${docHtml}`;
}

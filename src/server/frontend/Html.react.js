/* eslint-disable react/no-danger */
import React, { PropTypes as RPT } from 'react';
import Rollbar from './scripts/Rollbar';
import Script from './Script.react';

const Html = ({ bodyHtml, generatedAssets = {}, helmet, options = { disableJS: false } }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta
        content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
        name="viewport"
      />
      <meta content="ie=edge" httpEquiv="x-ua-compatible" />
      {helmet.title.toComponent()}
      {helmet.base.toComponent()}
      {helmet.meta.toComponent()}
      {helmet.link.toComponent()}
      {helmet.script.toComponent()}
      <Rollbar />
    </head>
    <body>
      <div id="app" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      {!options.disableJS && <Script src={`/assets/${generatedAssets['vendor.js']}`} />}
      {!options.disableJS && <Script src={`/assets/${generatedAssets['app.js']}`} />}
    </body>
  </html>
);

Html.propTypes = {
  bodyHtml: RPT.string.isRequired,
  generatedAssets: RPT.shape({
    'vendor.js': RPT.string,
    'app.js': RPT.string
  }).isRequired,
  helmet: RPT.shape({
    title: RPT.shape({ toComponent: RPT.func }),
    base: RPT.shape({ toComponent: RPT.func }),
    meta: RPT.shape({ toComponent: RPT.func }),
    link: RPT.shape({ toComponent: RPT.func }),
    script: RPT.shape({ toComponent: RPT.func })
  }).isRequired,
  options: RPT.shape({
    disableJS: RPT.bool
  }).isRequired
};

export default Html;

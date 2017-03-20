import React, { PropTypes as RPT } from 'react';
import Rollbar from './scripts/Rollbar';
import Script from './Script.react';

const Html = ({ children, generatedAssets = {}, options = { disableJS: false } }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta
        content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
        name="viewport"
      />
      <meta content="ie=edge" httpEquiv="x-ua-compatible" />
      <Rollbar />
    </head>
    <body>
      {children}
      {!options.disableJS && <Script src={`/assets/${generatedAssets['vendor.js']}`} />}
      {!options.disableJS && <Script src={`/assets/${generatedAssets['app.js']}`} />}
    </body>
  </html>
);

Html.propTypes = {
  children: RPT.oneOfType([RPT.node, RPT.string, RPT.element]).isRequired,
  generatedAssets: RPT.shape({
    'vendor.js': RPT.string,
    'app.js': RPT.string
  }).isRequired,
  options: RPT.shape({
    disableJS: RPT.bool
  }).isRequired
};

export default Html;

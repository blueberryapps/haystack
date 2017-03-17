import React, { PropTypes as RPT } from 'react';
import manifestScripts from '../../../dist/manifest.json';
import Script from './Script.react';

const Html = ({ children }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta
        content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
        name="viewport"
      />
      <meta content="ie=edge" httpEquiv="x-ua-compatible" />
    </head>
    <body>
      {children}
      <Script src={manifestScripts['vendor.js']} />
      <Script src={manifestScripts['entry.js']} />
    </body>
  </html>
);

Html.propTypes = {
  children: RPT.oneOfType([RPT.node, RPT.string, RPT.element]).isRequired
};

export default Html;

/* eslint-disable react/no-danger */
import React, { PropTypes as RPT } from 'react';
import Rollbar from './scripts/Rollbar';
import Script from './Script.react';

const Html = ({ bodyHtml, javascripts = {}, helmet, options }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta
        content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
        name="viewport"
      />
      <meta content="ie=edge" httpEquiv="x-ua-compatible" />
      {helmet && helmet.title && helmet.title.toComponent()}
      {helmet && helmet.base && helmet.base.toComponent()}
      {helmet && helmet.meta && helmet.meta.toComponent()}
      {helmet && helmet.link && helmet.link.toComponent()}
      {helmet && helmet.script && helmet.script.toComponent()}
      <Rollbar />
    </head>
    <body>
      <div id="app" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      {!options.disableJS && javascripts.vendor && <Script src={javascripts.vendor} />}
      {!options.disableJS && javascripts.app && <Script src={javascripts.app} />}
    </body>
  </html>
);

Html.propTypes = {
  bodyHtml: RPT.string.isRequired,
  javascripts: RPT.shape({
    app: RPT.string,
    vendor: RPT.string
  }).isRequired,
  helmet: RPT.shape({
    title: RPT.shape({ toComponent: RPT.func }),
    base: RPT.shape({ toComponent: RPT.func }),
    meta: RPT.shape({ toComponent: RPT.func }),
    link: RPT.shape({ toComponent: RPT.func }),
    script: RPT.shape({ toComponent: RPT.func })
  }),
  options: RPT.shape({
    disableJS: RPT.bool
  })
};

Html.defaultProps = {
  helmet: {},
  options: { disableJS: false }
}

export default Html;

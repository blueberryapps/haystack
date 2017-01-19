import React, { PropTypes as RPT } from 'react';

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
    </body>
  </html>
);

Html.propTypes = {
  children: RPT.oneOfType([RPT.node, RPT.string, RPT.element]).isRequired
};

export default Html;

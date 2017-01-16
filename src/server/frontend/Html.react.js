import React, { Component, PropTypes as RPT } from 'react';

export default class Html extends Component {

  static propTypes = {
    children:  RPT.oneOfType([RPT.node, RPT.string, RPT.element]).isRequired
  };

  render() {
    const { children } = this.props;

    return (
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
  }
}

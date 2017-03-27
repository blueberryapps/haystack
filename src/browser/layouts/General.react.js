import Helmet from 'react-helmet';
import Footer from '../components/Footer.react';
import Header from '../components/Header.react';
import React, { PropTypes, PureComponent } from 'react';
import { StyleRoot, Style } from 'radium';
import AppStyle from '../components/style/AppStyle.react';
import reset from '../components/style/reset';

export default class General extends PureComponent {

  static propTypes = {
    children: PropTypes.any,
    headerColor: PropTypes.string
  }

  render() {
    const { children, headerColor } = this.props;

    return (
      <StyleRoot>
        <Helmet titleTemplate="%s | Blueberry.io" />
        <Style rules={reset} />
        <AppStyle />
        <Header color={headerColor} />
        <div style={{ overflow: 'hidden' }}>
          {children}
        </div>
        <Footer />
      </StyleRoot>
    );
  }

}

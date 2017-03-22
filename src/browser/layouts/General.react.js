import Footer from '../components/Footer.react';
import Header from '../components/Header.react';
import React, { PropTypes, PureComponent } from 'react';

export default class General extends PureComponent {

  static propTypes = {
    children: PropTypes.any,
    headerColor: PropTypes.string
  }

  render() {
    const { children, headerColor } = this.props;

    return (
      <div>
        <Header color={headerColor} />
        <div style={{ overflow: 'hidden' }}>
          {children}
        </div>
        <Footer />
      </div>
    );
  }

}

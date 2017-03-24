import Helmet from 'react-helmet';
import Intro from './Intro.react';
import Layout from '../layouts/General.react';
import Marketing from '../components/cards/DigitalMarketing.react';
import React, { PureComponent } from 'react';
import translate from 'ts-translate';
import WeDesign from './WeDesign.react';
import WeDevelop from './WeDevelop.react';

@translate('services.heading')
export default class Services extends PureComponent {

  static propTypes = {
    msg: React.PropTypes.func.isRequired
  }

  render() {
    const { msg } = this.props;

    return (
      <Layout>
        <Helmet title={msg('Services')} />
        <Intro />
        <WeDevelop />
        <WeDesign />
        <Marketing />
      </Layout>
    );
  }
}

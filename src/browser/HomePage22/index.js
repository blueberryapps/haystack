import Form from './Form.react';
import OurWork from './OurWork.react';
import Helmet from 'react-helmet';
import How from './How.react';
import Layout from '../layouts/General.react';
import Location from './Locations.react';
import Meet from './Meet.react';
import Intro from './Intro.react';
import Projects from './Projects.react';
import React, { PureComponent } from 'react';
import translate from 'ts-translate';
import Workflow from './Workflow.react';

@translate('homepage')
export default class Homepage extends PureComponent {

  static propTypes = {
    msg: React.PropTypes.func.isRequired
  }

  render() {
    const { msg } = this.props;

    return (
      <Layout>
        <Helmet title={msg('heading')} />
        <Intro />
        <How />
        <OurWork />
        <Meet />
        <Location showHeading />
        <Workflow />
        <Projects />
        <Form />
      </Layout>
    );
  }
}

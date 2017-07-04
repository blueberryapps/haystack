import React, { Component, PropTypes as RPT } from 'react';
import Helmet from 'react-helmet';
import { observer, inject } from 'mobx-react';
import logo from '../../assets/images/haystack_logo.png';

@inject('sample')
@observer
class App extends Component {
  handlePlus = () => this.props.sample.plus()
  handleMinus = () => this.props.sample.minus()

  render() {
    const { sample } = this.props;

    return (
      <div>
        <Helmet title="Haystack" />
        <button onClick={e => window.console.log(e)}>
          Haystack
          <img alt="logo" src={logo} />
        </button>

        <br /><br />

        <button onClick={this.handlePlus}>+</button>
        <button onClick={this.handleMinus}>-</button>

        <p>{sample.count}</p>

        <span dangerouslySetInnerHTML={{ __html: sample.special }} />
      </div>
    );
  }
}

App.wrappedComponent.propTypes = {
  sample: RPT.shape({
    count: RPT.number.isRequired,
    plus: RPT.func.isRequired,
    minus: RPT.func.isRequired,
  }).isRequired
};

export default App;

// @flow
import Helmet from 'react-helmet';
import React from 'react';
import logo from '../../assets/images/haystack_logo.png';

const App = () => (
  <div>
    <Helmet title="Haystack" />
    <button onClick={(e: Event) => window.console.log(e)}>
      Haystack
      <img alt="logo" src={logo} />
    </button>
  </div>
);

export default App;

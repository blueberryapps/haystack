import React, { PropTypes as RPT } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import logo from '../../assets/images/haystack_logo.png';
import asyncComponent from './components/asyncComponent';
import NotFound from './NotFound';

const SomeRedirect = ({ staticContext }) => {
  if (staticContext) staticContext.url = '/about'; // eslint-disable-line no-param-reassign
  return (<div>Redirecting to /about</div>);
};
SomeRedirect.propTypes = { staticContext: RPT.shape({ url: RPT.string }) };
SomeRedirect.defaultProps = { staticContext: {} };

const App = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <button onClick={e => window.console.log(e)}>
      Haystack
      <img alt="logo" src={logo} />
    </button>
    <Switch>
      <Route exact path="/" component={asyncComponent(() => import('./Feature/Home.react'))} />
      <Route path="/about" component={asyncComponent(() => import('./Feature/About.react'))} />
      <Route path="/someRedirect" component={SomeRedirect} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;

import { StyleRoot } from 'radium';
import Helmet from 'react-helmet';
import React, { PropTypes as RPT } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import logo from '../../assets/images/haystack_logo.png';
import NotFound from './NotFound';

const Home = () => (<h1><Helmet title="Haystack | Home" />Home</h1>);
const About = () => (<h1><Helmet title="Haystack | About" />About</h1>);
const SomeRedirect = ({ staticContext }) => {
  if (staticContext) staticContext.url = '/about'; // eslint-disable-line no-param-reassign
  return (<div>Redirecting to /about</div>);
};
SomeRedirect.propTypes = { staticContext: RPT.shape({ url: RPT.string }) };
SomeRedirect.defaultProps = { staticContext: {} };

const App = () => (
  <StyleRoot>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <button onClick={e => window.console.log(e)}>
      Haystack
      <img alt="logo" src={logo} />
    </button>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/someRedirect" component={SomeRedirect} />
      <Route component={NotFound} />
    </Switch>
  </StyleRoot>
);

export default App;

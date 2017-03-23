import { StyleRoot, Style } from 'radium';
import Helmet from 'react-helmet';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import { Provider as TranslateProvider } from 'ts-translate';
import HomePage from './homepage';
import OurTeam from './OurTeam';
import reset from './components/style/reset';
import AppStyle from './components/style/AppStyle.react';

const App = () => (
  <TranslateProvider>
    <StyleRoot>
      <Style rules={reset} />
      <AppStyle />
      <Helmet titleTemplate="%s | Blueberry.io" />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/our-team" component={OurTeam} />
        <Route component={NotFound} />
      </Switch>
    </StyleRoot>
  </TranslateProvider>
);

export default App;

import { StyleRoot, Style } from 'radium';
import Helmet from 'react-helmet';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import { Provider as TranslateProvider } from 'ts-translate';
import HomePage from './homepage';
import OurHistory from './OurHistory';
import OurTeam from './OurTeam';
import OurWork from './OurWork';
import Services from './Services';
import reset from './components/style/reset';
import AppStyle from './components/style/AppStyle.react';
import ScrollToTop from './components/ScrollToTop.react';

const App = () => (
  <TranslateProvider>
    <ScrollToTop>
      <StyleRoot>
        <Style rules={reset} />
        <AppStyle />
        <Helmet titleTemplate="%s | Blueberry.io" />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/our-team" component={OurTeam} />
          <Route path="/our-work" component={OurWork} />
          <Route path="/services" component={Services} />
          <Route path="/history" component={OurHistory} />
          <Route component={NotFound} />
        </Switch>
      </StyleRoot>
    </ScrollToTop>
  </TranslateProvider>
);

export default App;

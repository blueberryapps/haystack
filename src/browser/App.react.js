import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Error404 from './Errors/Error404.react';
import HomePage from './HomePage';
import Career from './Career';
import CareerDetail from './Career/Detail.react';
import Contact from './Contact';
import OurHistory from './OurHistory';
import OurTeam from './OurTeam';
import OurWork from './OurWork';
import Services from './Services';
import ScrollToTop from './components/ScrollToTop.react';

const App = () => (
  <ScrollToTop>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/career/:positionId" component={CareerDetail} />
      <Route path="/career" component={Career} />
      <Route path="/contacts" component={Contact} />
      <Route path="/our-team" component={OurTeam} />
      <Route path="/our-work" component={OurWork} />
      <Route path="/services" component={Services} />
      <Route path="/history" component={OurHistory} />
      <Route component={Error404} />
    </Switch>
  </ScrollToTop>
);

export default App;

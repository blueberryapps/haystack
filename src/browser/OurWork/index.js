import Elevate from './elevate';
import ItSounds from './itSounds';
import MeatAndBones from './meatAndBones';
import TaylorCox from './tcox';
import PPCBee from './ppcBee';
import React, { PropTypes as RPT } from 'react';
import ZaploDk from './zaploDk';
import { Route, Switch } from 'react-router-dom';
import List from './List.react';

const OurWork = ({ match: { url } }) => (
  <Switch>
    <Route component={Elevate} path={`${url}/elevate-hd`} />
    <Route component={ItSounds} path={`${url}/it-sounds`} />
    <Route component={MeatAndBones} path={`${url}/meat-and-bones`} />
    <Route component={PPCBee} path={`${url}/ppc-bee`} />
    <Route component={TaylorCox} path={`${url}/tcox`} />
    <Route component={ZaploDk} path={`${url}/zaplo-dk`} />
    <Route component={List} />
  </Switch>
);

OurWork.propTypes = {
  match: RPT.shape({
    url: RPT.string.isRequired
  }).isRequired
};

export default OurWork;

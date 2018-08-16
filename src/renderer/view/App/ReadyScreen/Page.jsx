import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {
  ROUTE_ALBUMS, ROUTE_ADD_ALBUM, ROUTE_DONATE, ROUTE_HOME,
} from '~data/constants';

import DiscoverPageConnected from './Page/DiscoverPageConnected';
import SharePageConnected from './Page/SharePageConnected';
import DonatePage from './Page/DonatePage';

const Page = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => <Redirect to={ROUTE_HOME} />}
    />
    <Route
      path={ROUTE_ALBUMS}
      component={DiscoverPageConnected}
    />
    <Route
      path={ROUTE_ADD_ALBUM}
      component={SharePageConnected}
    />
    <Route
      path={ROUTE_DONATE}
      component={DonatePage}
    />
  </Switch>
);

export default Page;

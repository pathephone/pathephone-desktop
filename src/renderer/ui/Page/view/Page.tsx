import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';

import {
  ROUTE_ADD_ALBUM, ROUTE_ALBUMS, ROUTE_DONATE, ROUTE_HOME
} from '~shared/data/constants';

import { DonatePage } from '~renderer/ui/DonatePage';
import { SharePageConnected } from '~renderer/ui/SharePage';
import DiscoverPageConnected from '~renderer/view/App/ReadyScreen/Page/DiscoverPageConnected';

const RedirectHome: React.SFC<RouteComponentProps<{}>> = (
): React.ReactElement<RouteComponentProps<{}>> => <Redirect to={ROUTE_HOME} />;

export const Page: React.SFC = (): React.ReactElement<{}> => (
  <Switch>
    <Route
      exact
      path='/'
      render={RedirectHome}
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

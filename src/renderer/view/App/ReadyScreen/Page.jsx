import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { ROUTE_ALBUMS, ROUTE_ADD_ALBUM, ROUTE_DONATE, ROUTE_HOME } from '~data/constants'

import DiscoverPageConnected from './Page/DiscoverPageConnected'
import SharePage from './Page/SharePageConnected'

import './Page.css'

const Page = () => (
  <div id='page-container'>
    <Switch>
      <Route
        exact
        path='/'
        render={() => <Redirect to={ROUTE_HOME} />}
      />
      <Route
        path={ROUTE_ALBUMS}
        component={DiscoverPageConnected}
      />
      <Route
        path={ROUTE_ADD_ALBUM}
        component={SharePage}
      />
      <Route
        path={ROUTE_DONATE}
        component={SharePage}
      />
    </Switch>
  </div>
)

export default Page

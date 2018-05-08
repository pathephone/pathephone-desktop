import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { ROUTE_ALBUMS, ROUTE_ADD_ALBUM, ROUTE_DONATE, ROUTE_HOME } from '~data/constants'

import AlbumsPageConnected from './Page/AlbumsPageConnected'
import AddAlbumPage from './Page/AddAlbumPageConnected'

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
        component={AlbumsPageConnected}
      />
      <Route
        path={ROUTE_ADD_ALBUM}
        component={AddAlbumPage}
      />
      <Route
        path={ROUTE_DONATE}
        component={AddAlbumPage}
      />
    </Switch>
  </div>
)

export default Page

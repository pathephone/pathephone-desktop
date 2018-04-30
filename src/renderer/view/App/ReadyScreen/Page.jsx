import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { ROUTE_ALBUMS, ROUTE_ADD_ALBUM, ROUTE_DONATE, ROUTE_HOME } from '~data/constants'

import AlbumsPage from './Page/AlbumsPage.jsx'
import AddAlbumPage from './Page/AddAlbumPage.jsx'

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
        component={AlbumsPage}
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

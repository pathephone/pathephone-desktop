import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { ALBUMS_PAGE_ROUTE, ADD_ALBUM_PAGE_ROUTE, DONATE_PAGE_ROUTE } from '~/constants/routes'

import AlbumsPage from './Page/AlbumsPage'
import AddAlbumPage from './Page/AddAlbumPage'
import './Page/Page.css'

const Page = () => (
  <div id='page-container'>
    <Switch>
      <Route
        path={ALBUMS_PAGE_ROUTE}
        component={AlbumsPage}
      />
      <Route
        path={ADD_ALBUM_PAGE_ROUTE}
        component={AddAlbumPage}
      />
      <Route
        path={DONATE_PAGE_ROUTE}
        component={AddAlbumPage}
      />
    </Switch>
  </div>
)

export default Page

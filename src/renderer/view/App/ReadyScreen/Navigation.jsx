import React from 'react'

import { ALBUMS_PAGE_ROUTE, ADD_ALBUM_PAGE_ROUTE } from '~constants/routes'

import NavigationItem from './Navigation/NavigationItem'
import './Navigation/Navigation.css'

const Navigation = () => (
  <nav className='navigation'>
    <NavigationItem
      path={ALBUMS_PAGE_ROUTE}
      title='Albums found'
    />
    <NavigationItem
      path={ADD_ALBUM_PAGE_ROUTE}
      title='Albums found'
    />
  </nav>
)

export default Navigation

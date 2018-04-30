import React from 'react'

import { ROUTE_ADD_ALBUM, ROUTE_ALBUMS } from '~data/constants'

import NavigationItem from './Navigation/NavigationItem.jsx'

import './Navigation.css'

const Navigation = () => (
  <nav className='navigation'>
    <NavigationItem
      path={ROUTE_ALBUMS}
      title='Albums found'
    />
    <NavigationItem
      path={ROUTE_ADD_ALBUM}
      title='Add album'
    />
  </nav>
)

export default Navigation

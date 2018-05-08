import React from 'react'

import UploadIcon from 'react-icons/lib/md/cloud-upload'
import DiscoverIcon from 'react-icons/lib/fa/globe'

import { ROUTE_ADD_ALBUM, ROUTE_ALBUMS } from '~data/constants'

import NavigationItem from './Navigation/NavigationItem.jsx'

import './Navigation.css'

const Navigation = () => (
  <nav className='navigation'>
    <NavigationItem
      path={ROUTE_ALBUMS}
      title='Discover albums'
      icon={<DiscoverIcon />}
    />
    <NavigationItem
      path={ROUTE_ADD_ALBUM}
      title='Share album'
      icon={<UploadIcon />}
    />
  </nav>
)

export default Navigation

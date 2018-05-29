import React from 'react'

import UploadIcon from 'react-icons/lib/md/cloud-upload'
import DiscoverIcon from 'react-icons/lib/fa/globe'
import CardIcon from 'react-icons/lib/md/card-giftcard'

import { ROUTE_ADD_ALBUM, ROUTE_ALBUMS, ROUTE_DONATE } from '~data/constants'

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
    <NavigationItem
      path={ROUTE_DONATE}
      title='Donate'
      icon={<CardIcon />}
    />
  </nav>
)

export default Navigation

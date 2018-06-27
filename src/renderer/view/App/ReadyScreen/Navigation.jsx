import React from 'react'

import UploadIcon from 'react-icons/lib/md/share'
import DiscoverIcon from 'react-icons/lib/md/search'
import InfoIcon from 'react-icons/lib/md/info'

import { ROUTE_ADD_ALBUM, ROUTE_ALBUMS, ROUTE_DONATE } from '~data/constants'
import { E2E_NAV_SHARE_LINK_ID, E2E_NAV_DISCOVER_LINK_ID } from '~data/e2eConstants'

import NavigationItem from './Navigation/NavigationItem.jsx'

import './Navigation.css'

const Navigation = () => (
  <nav className='navigation'>
    <NavigationItem
      id={E2E_NAV_DISCOVER_LINK_ID}
      path={ROUTE_ALBUMS}
      title='Discover'
      icon={<DiscoverIcon />}
    />
    <NavigationItem
      id={E2E_NAV_SHARE_LINK_ID}
      path={ROUTE_ADD_ALBUM}
      title='Share'
      icon={<UploadIcon />}
    />
    <NavigationItem
      path={ROUTE_DONATE}
      title='About'
      icon={<InfoIcon />}
    />
  </nav>
)

export default Navigation

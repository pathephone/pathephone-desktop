import React from 'react'

import UploadIcon from 'react-icons/lib/md/cloud-upload'
import LibraryIcon from 'react-icons/lib/md/library-music'

import { ROUTE_ADD_ALBUM, ROUTE_ALBUMS } from '~data/constants'

import NavigationItem from './Navigation/NavigationItem.jsx'

import './Navigation.css'

const Navigation = () => (
  <nav className='navigation'>
    <NavigationItem
      path={ROUTE_ALBUMS}
      title='Albums found'
      icon={<LibraryIcon />}
    />
    <NavigationItem
      path={ROUTE_ADD_ALBUM}
      title='Share album'
      icon={<UploadIcon />}
    />
  </nav>
)

export default Navigation

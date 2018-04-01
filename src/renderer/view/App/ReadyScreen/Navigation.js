import React from 'react'
import pageState from '~/state/page'
import bind from '~/utils/recallReact'

import AddAlbum from './Navigation/AddAlbum'
import Donate from './Navigation/Donate'
import NavigationContainer from './Navigation/NavigationContainer'

import './Navigation/Navigation.css'

const Navigation = () => (
  <NavigationContainer>
    <AddAlbum />
    <Donate />
  </NavigationContainer>
)

export default bind({ page: pageState }, Navigation)

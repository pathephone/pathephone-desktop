// @flow
import React from 'react'
import Navigation from './Navigation'
import Playlist from './Playlist/Playlist'
import Page from './Page'

const App = () => (
  <div className='app izi-vw-scale-factor-5 izi--adaptive izi-fill izi-xs'>
    <Navigation />
    <Page />
    <Playlist />
  </div>
)

export default App

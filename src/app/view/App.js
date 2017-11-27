// @flow
import React from 'react'
import Navigation from './Navigation'
import Playlist from './Playlist/Playlist'
import Player from './Player/Player'
import Page from './Page'

const App = () => (
  <div id='app' className='izi-fill izi-ys'>
    <div className='app izi-xs'>
      <Navigation />
      <Page />
      <Playlist />
    </div>
    <Player />
  </div>
)

export default App

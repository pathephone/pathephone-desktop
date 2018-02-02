// @flow
import React from 'react'
import Navigation from './Navigation'
import Playlist from './Playlist'
import Player from './Player'
import Page from './Page'

import './App.css'

const App = () => (
  <div id='app' className='izi-fill izi-ys'>
    <Navigation />
    <Page />
    <Playlist />
    <Player />
  </div>
)

export default App

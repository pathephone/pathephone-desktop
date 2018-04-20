// @flow
import React from 'react'

import Navigation from './ReadyScreen/Navigation'
import Playlist from './ReadyScreen/Playlist'
import Player from './ReadyScreen/PlayerConnected'
import Page from './ReadyScreen/Page'

import './ReadyScreen.css'

const ReadyScreen = () => (
  <div id='app' className='izi-fill izi-ys'>
    <Navigation />
    <Page />
    <Playlist />
    <Player />
  </div>
)

export default ReadyScreen

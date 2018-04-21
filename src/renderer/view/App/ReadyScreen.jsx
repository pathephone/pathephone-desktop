// @flow
import React from 'react'

import Navigation from './ReadyScreen/Navigation.jsx'
import Playlist from './ReadyScreen/Playlist.jsx'
import PlayerConnected from './ReadyScreen/PlayerConnected'
import Page from './ReadyScreen/Page.jsx'

import './ReadyScreen.css'

const ReadyScreen = () => (
  <div id='app' className='izi-fill izi-ys'>
    <Navigation />
    <Page />
    <Playlist />
    <PlayerConnected />
  </div>
)

export default ReadyScreen

import React from 'react'

import Navigation from './ReadyScreen/Navigation.jsx'
import Page from './ReadyScreen/Page.jsx'
import PlaylistConnected from './ReadyScreen/PlaylistConnected'
import PlayerConnected from './ReadyScreen/PlayerConnected'
import NotificationsConnected from './ReadyScreen/NotificationsConnected'

import './ReadyScreen.css'

const ReadyScreen = () => (
  <div id='readyScreen'>
    <Navigation />
    <Page />
    <PlaylistConnected />
    <PlayerConnected />
    <NotificationsConnected />
  </div>
)

export default ReadyScreen

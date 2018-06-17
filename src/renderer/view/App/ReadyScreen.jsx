import React from 'react'

import { E2E_READY_SCREEN_ID } from '~data/e2eConstants'

import Navigation from './ReadyScreen/Navigation.jsx'
import Page from './ReadyScreen/Page.jsx'
import PlaylistConnected from './ReadyScreen/PlaylistConnected'
import PlayerConnected from './ReadyScreen/PlayerConnected'
import NotificationsConnected from './ReadyScreen/NotificationsConnected'

import './ReadyScreen.css'

const ReadyScreen = () => (
  <div id={E2E_READY_SCREEN_ID} className='readyScreen'>
    <Navigation />
    <Page />
    <PlaylistConnected />
    <PlayerConnected />
    <NotificationsConnected />
  </div>
)

export default ReadyScreen

import React from 'react'

import { E2E_READY_SCREEN_ID } from '~data/e2eConstants'

import Page from './ReadyScreen/Page.jsx'
import PlaylistConnected from './ReadyScreen/PlaylistConnected'
import PlayerConnected from './ReadyScreen/PlayerConnected'
import NavigationConnected from './ReadyScreen/NavigationConnected'
import NotificationsConnected from './ReadyScreen/NotificationsConnected'

import './ReadyScreen.css'

const ReadyScreen = () => (
  <div id={E2E_READY_SCREEN_ID} className='readyScreen'>
    <NavigationConnected />
    <Page />
    <PlaylistConnected />
    <PlayerConnected />
    <NotificationsConnected />
  </div>
)

export default ReadyScreen

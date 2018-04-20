import React from 'react'
import propTypes from 'prop-types'

import AudioConnected from './Player/AudioConnected'
import ActivePlayerConnected from './Player/ActivePlayerConnected'
import PendingPlayer from './Player/PendingPlayer'

import './Player.css'

const Player = ({ isActive }) => {
  if (isActive) {
    return (
      <AudioConnected>
        <ActivePlayerConnected />
      </AudioConnected>
    )
  }
  return <PendingPlayer />
}

Player.propTypes = {
  isActive: propTypes.bool.isRequired
}

export default Player

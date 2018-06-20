import React from 'react'
import propTypes from 'prop-types'

import ActivePlayerConnected from './Player/ActivePlayerConnected'
import PendingPlayer from './Player/PendingPlayer.jsx'

import './Player.css'

const Player = ({ isActive }) => {
  if (isActive) {
    return (
      <ActivePlayerConnected />
    )
  }
  return <PendingPlayer />
}

Player.propTypes = {
  isActive: propTypes.bool.isRequired
}

export default Player

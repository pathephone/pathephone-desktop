import React from 'react'
import bind from '~/utils/recallReact'
import playlistState from '~/state/playlist'
import playerState from '~/state/player'
import ActivePlayer from './ActivePlayer'
// import PendingPlayer from './PendingPlayer'

class Player extends React.Component {
  render () {
    const { playlistStateValue, playerStateValue } = this.props
    if (playlistStateValue.length === 0) {
      return null
    }
    const currentTrack = playlistStateValue.find(
      ({ current }) => current === true
    )
    return (
      <ActivePlayer
        {...currentTrack}
        {...playerStateValue}
      />
    )
  }
}

export default bind(
  {
    playlistStateValue: playlistState,
    playerStateValue: playerState
  },
  Player
)

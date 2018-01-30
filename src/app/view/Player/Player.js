import React from 'react'
import bind from '~/utils/recallReact'
import playlistState from '~/state/playlist'
import playerState from '~/state/player'
import ActivePlayer from './ActivePlayer'

// import PendingPlayer from './PendingPlayer'

const ActivePlayerConnected = bind({ playerStateValue: playerState }, ActivePlayer)

class Player extends React.Component {
  state = {
    track: null
  }
  handleProps = async (props) => {
    const { playlistStateValue } = props
    if (playlistStateValue.length === 0) {
      this.setState({
        track: null
      })
      return
    }
    const track = playlistStateValue.find(
      ({ current }) => current === true
    )
    this.setState({ track })
  }
  componentWillMount () {
    this.handleProps(this.props)
  }
  componentWillReceiveProps (next) {
    this.handleProps(next)
  }
  render () {
    const { track } = this.state
    if (!track) return null
    return (
      <ActivePlayerConnected
        track={track}
      />
    )
  }
}

export default bind(
  {
    playlistStateValue: playlistState
  },
  Player
)

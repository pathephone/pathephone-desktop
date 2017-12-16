import React from 'react'
import bind from '../../utils/recallReact'
import playlistState from '../../state/playlist'
import currentTrackState from '../../state/currentTrack'
import PlayerView from './PlayerView'
import playNextTrack from '../../scripts/playNextTrack'
import playPrevTrack from '../../scripts/playPrevTrack'
import multihashToUrl from '../../scripts/multihashToUrl'
import downloadPlaylist from '../../scripts/downloadPlaylist'
import Async from '../_/Async'

class Playlist extends React.Component {
  render () {
    const { playlist } = this.props
    let currentIndex;
    const currentTrack = playlist.find(
      ({ current }, index) => { 
        currentIndex = index;
        return current 
      }
    )
    if (!currentTrack) {
      return null
    }
    const { hash } = currentTrack
    if(currentIndex > 0)
      downloadPlaylist(playlist, currentIndex)

    const ErrorView = ({ error }) => {
      return <h1>{error.message}</h1>
    }
    const ReadyView = ({ data }) => {
      return (
        <PlayerView
          {...currentTrack}
          src={data}
          onPlayNextTrack={playNextTrack}
          onPlayPrevTrack={playPrevTrack}
        />
      )
    }
    return (
      <Async
        call={() => multihashToUrl(hash)}
        errorView={ErrorView}
        readyView={ReadyView}
      />
    )
  }
}

export default bind({ playlist: playlistState, currentTrack: currentTrackState }, Playlist)

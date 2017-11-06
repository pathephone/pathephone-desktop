import React from 'react'
import bind from 'utils/recallReact'
import { state as playlistData } from 'state/playlist'
import playerState from 'state/player'
import currentTrackState from 'state/currentTrack'
import IpfsGetFile from 'components/Ipfs/GetImage'
import PlayerView from './PlayerView'
import startPlaying from 'scripts/startPlaying'
import stopPlaying from 'scripts/stopPlaying'

class Playlist extends React.Component {
  render () {
    const { player, currentTrack } = this.props
    const { status } = player
    const currentTrackObj = playlistData.find(({ id }) => id === currentTrack.id)
    const viewProps = {
      playerStatus: status,
      currentTrack: currentTrackObj
    }
    if (status === 'PLAYING') {
      viewProps.onPlayStop = stopPlaying
    } else {
      viewProps.onPlayStop = startPlaying
    }
    return (
      <PlayerView {...viewProps} />
    )
  }
}
/*
        <IpfsGetFile
          hash={currentTrack}
          view={({ data }) => {
            const url = URL.createObjectURL(data);
            console.log(url);
            return <audio src={url} controls autoPlay />;
          }}
        />
        */

export default bind({ player: playerState, currentTrack: currentTrackState }, Playlist)

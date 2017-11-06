import React from 'react'
import bind from 'utils/recallReact'
import playlistState from 'state/playlist'
import playerState from 'state/player'
import currentTrackState from 'state/currentTrack'
import IpfsGetFile from 'components/Ipfs/GetImage'
import PlaylistView from './PlaylistView'

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

export default bind(
  {
    playlist: playlistState,
    player: playerState,
    currentTrack: currentTrackState
  },
  PlaylistView
)

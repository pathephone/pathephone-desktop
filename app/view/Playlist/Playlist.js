import React from 'react'
import bind from 'utils/recallReact'
import playlistState from 'state/playlist'
import playerState from 'state/player'
import IpfsGetFile from 'components/Ipfs/GetImage'
import PlaylistView from './PlaylistView'
import fakePlaylist from './fakePlaylist'

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
playlistState('ADD_TRACKS', ...fakePlaylist)

export default bind({ playlist: playlistState, player: playerState }, PlaylistView)

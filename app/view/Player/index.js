import React from 'react';
import bind from 'utils/recallReact';
import playlistState from 'state/playlist';
import playerState from 'state/player';
import IpfsGetFile from 'components/Ipfs/GetImage';

class Playlist extends React.Component {
  render() {
    const { playlist, player } = this.props;
    console.log(playlist);
    console.log(player);
    const { current, play } = player;
    if (current === null) {
      return null;
    }
    const currentTrack = playlist.find(({ id }) => id === current);
    return (
      <div id='player' className='izi-fixed izi-bottom'>
        <IpfsGetFile
          hash={currentTrack}
          view={({ data }) => {
            const url = URL.createObjectURL(data);
            console.log(url);
            return <audio src={url} controls autoPlay />;
          }}
        />
      </div>
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
        
export default bind({ playlist: playlistState, player: playerState }, Playlist);
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
    const { current } = player;
    return (
      <div id='playlist' className='izi-ys'>
        {
          playlist.map(({ key, albumCid, trackIndex }) => (
            <a
              key={key}
              className={
                `izi-padding track ${key === current ? 'track-current' : ''}`
              }
              onClick={() => {
                playerState('SET_CURRENT', key);
              }}
            >
              {albumCid}
            </a>
          ))
        }
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
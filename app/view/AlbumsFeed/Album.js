import React from 'react'
import noCoverImg from './no-cover.png'
import playTracks from 'scripts/playTracks'

const Album = (album) => {
  const { title, artist, coverURL, id, tracks } = album
  const playThisAlbum = () => {
    playTracks(tracks)
  }
  return (
    <div className='album' key={id}>
      <div
        className='album_cover-area izi-yr'
        style={{
          background: `url(${coverURL || noCoverImg})`,
          backgroundSize: 'cover'
        }}
      >
        <button
          className='album_play-button izi-margin-top-auto'
          onClick={playThisAlbum}>
          >
        </button>
      </div>
      <h4 className='album_title'>{title}</h4>
      <h5 className='album_artist'>{artist}</h5>
    </div>
  )
}

export default Album

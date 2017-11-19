import React from 'react'
import noCoverImg from './no-cover.png'
import playTracks from 'scripts/playTracks'
import removeAlbumFromDb from 'scripts/removeAlbumFromDb'
import Async from '../_/Async'
import multihashToUrl from 'scripts/multihashToUrl'
import MdPlay from 'react-icons/lib/md/play-arrow'
import MdDelete from 'react-icons/lib/md/delete'

const Album = (album) => {
  const { cid, data } = album
  const { title, artist, cover, tracks } = data
  const playThisAlbum = () => {
    playTracks(tracks)
  }
  const removeThisAlbum = () => {
    removeAlbumFromDb(cid)
  }
  const ReadyView = ({ data }) => (
    <div className='album'>
      <div
        className='album_cover-area izi-yr'
        style={{
          background: `url(${data})`,
          backgroundSize: 'cover'
        }}
      >
        <button
          className='album_play-button izi-margin-top-auto'
          onClick={removeThisAlbum}
        >
          <MdDelete />
        </button>
        <button
          className='album_play-button izi-margin-top-auto'
          onClick={playThisAlbum}
        >
          <MdPlay />
        </button>
      </div>
      <h4 className='album_title'>{title}</h4>
      <h5 className='album_artist'>{artist}</h5>
    </div>
  )
  return (
    <Async
      key={cid}
      call={() => multihashToUrl(cover)}
      readyView={ReadyView}
    />
  )
}

export default Album

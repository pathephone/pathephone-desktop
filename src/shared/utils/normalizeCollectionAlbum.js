const normalizeCollectionAlbum = ({ cid, data: { cover, artist, title, tracks } }) =>
  ({
    albumCid: cid,
    albumArtist: artist,
    albumTitle: title,
    albumCoverCid: cover.image
  })

export default normalizeCollectionAlbum


const normalizeCollectionAlbum = ({ cid, data: { cover, title, tracks } }) =>
  ({
    albumCid: cid,
    albumArtist: tracks[0].artist,
    albumTitle: title,
    albumCoverCid: cover,
    lowestQuality: tracks[0].bitrate
  })

export default normalizeCollectionAlbum

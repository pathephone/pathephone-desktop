import getQualityCode from './getQualityCode'

const getLowestAlbumQuality = tracks => {
  const handleReduce = (acc, { bitrate }) => {
    if (!acc) return bitrate
    if (bitrate < acc) return bitrate
  }
  return tracks.reduce(handleReduce)
}

const normalizeCollectionAlbum = ({ cid, data: { cover, artist, title, tracks } }) =>
  ({
    albumCid: cid,
    albumArtist: artist,
    albumTitle: title,
    albumCoverCid: cover.image,
    qualityCode: getQualityCode(getLowestAlbumQuality(tracks))
  })

export default normalizeCollectionAlbum

import getQualityCode from './getQualityCode'

const getLowestAlbumQuality = tracks => {
  const handleReduce = (acc, { bitrate }) => {
    if (!acc) return bitrate
    if (bitrate < acc) return bitrate
  }
  return tracks.reduce(handleReduce)
}

const normalizeCollectionAlbum = ({ cid, data: { cover, title, tracks } }) =>
  ({
    albumCid: cid,
    albumArtist: tracks[0].artist,
    albumTitle: title,
    albumCoverCid: cover,
    qualityCode: getQualityCode(getLowestAlbumQuality(tracks))
  })

export default normalizeCollectionAlbum

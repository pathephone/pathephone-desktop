import normalizeAlbumTrackForPlaylist from '~utils/normalizeAlbumTrackForPlaylist'

const getPlaylistTracksFromAlbums = async ({ albumsCollection }, cids) => {
  const query = {
    cid: {
      $in: cids
    }
  }
  const docs = await albumsCollection
    .find(query)
    .exec()
  const handleReduce = (acc, { data }) => {
    const handleEach = track => {
      acc.push(normalizeAlbumTrackForPlaylist(track))
    }
    data.tracks.forEach(handleEach)
    return acc
  }
  return docs.reduce(handleReduce, [])
}

export default getPlaylistTracksFromAlbums

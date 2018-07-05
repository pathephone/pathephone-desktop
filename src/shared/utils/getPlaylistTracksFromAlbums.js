import normalizeAlbumTrackForPlaylist from '~utils/normalizeAlbumTrackForPlaylist'

const getPlaylistTracksFromAlbums = async ({ findAlbumsInCollectionByCids }, cids) => {
  const docs = await findAlbumsInCollectionByCids(cids)
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

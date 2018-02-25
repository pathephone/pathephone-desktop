import playlistState from '~/state/playlist'
import getIpfsNode from '~/api/ipfs'

const markAsDownloaded = hash => {
  playlistState('SET_DOWNLOADED', hash)
}

const downloadPlaylist = async (playlist) => {
  const ipfsNode = getIpfsNode()
  const tracksToDownload = playlist.filter(t => !t.downloaded)
  const pendingTracks = tracksToDownload
    .map(song => song.hash)
  // const localTracks = await ipfsNode.files.exists(pendingTracks)
  let tracksToGet = pendingTracks
  /*
  if (localTracks) {
    localTracks.forEach(markAsDownloaded)
    tracksToGet = pendingTracks.filter(
      hash => !localTracks.includes(hash)
    )
  }
  */
  tracksToGet.forEach(async (hash, i) => {
    ipfsNode.files.get(hash, (err, data) => {
      if (err) {
        console.error(err)
      } else {
        markAsDownloaded(hash)
      }
    })
  })
}

export default downloadPlaylist

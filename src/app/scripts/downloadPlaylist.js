import getIpfsNode from '../api/ipfs'

export default async (playlist) => {
  const ipfsNode = await getIpfsNode()
  const pendingTracks = playlist
    .filter(({ current }) => !current)
    .map(song => song.hash)
  const localTracks = await ipfsNode.files.exists(pendingTracks)
  const tracksToGet = pendingTracks.filter(
    hash => !localTracks.includes(hash)
  )
  tracksToGet.forEach(async (hash, i) => {
    ipfsNode.files.get(hash, (err) => {
      if (!err) { console.log('downloaded', playlist[i].title, 'track') }
    })
  })
}

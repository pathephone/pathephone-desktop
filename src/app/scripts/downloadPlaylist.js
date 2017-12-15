import getIpfsNode from '../api/ipfs'

export default async (playlist, ignoreIndex) => {
  const ipfsNode = getIpfsNode()
  if(typeof ignoreIndex !== 'undefined') {
    playlist = playlist.filter((song, idx) => idx !== ignoreIndex) 
  }
  let hashes = playlist.map(song => song.hash)
  const existsHashes = await ipfsNode.files.exists(hashes)
  hashes = hashes.filter(el => existsHashes.indexOf(el) === -1)
  hashes.forEach(async (hash, i) => {
    ipfsNode.files.get(hash, (err) => {
      if(!err)
        console.log('downloaded', playlist[i].title, 'track')
    })
  })
}

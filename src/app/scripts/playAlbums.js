import playTracks from './playTracks'
import albums from '../data/albums'

const playAlbums = async (cids) => {
  const tracks = []
  const docs = await albums
    .collection
    .find({ cid: { $in: cids } })
    .exec()
  docs.forEach(
    doc => { tracks.push(...doc.data.tracks) }
  )
  console.log(tracks)
  playTracks(tracks)
}

export default playAlbums

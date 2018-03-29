import albums from '~app/data/albums'

const getAlbumsTracks = async (cids) => {
  const tracks = []
  const docs = await albums
    .collection
    .find({ cid: { $in: cids } })
    .exec()
  docs.forEach(
    doc => { tracks.push(...doc.data.tracks) }
  )
  return tracks
}

export default getAlbumsTracks

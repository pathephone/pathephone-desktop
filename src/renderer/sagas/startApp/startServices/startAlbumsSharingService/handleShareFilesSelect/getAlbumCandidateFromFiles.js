import getTracksFromFiles from '~utils/getTracksFromFiles'
import getCoverFromFiles from '~utils/getCoverFromFiles'

const extractInfoFromTracks = tracks => {
  let title
  let artist
  for (let track of tracks) {
    if (title === undefined) {
      title = track.album
    } else
    if (title !== track.album) {
      title = null
    }
    if (artist === undefined) {
      artist = track.artist
    } else
    if (artist !== track.artist) {
      artist = null
    }
    if (title === null && artist === null) break
  }
  return { title, artist }
}

async function getAlbumCandidateFromFiles (files) {
  const [ tracks, cover = null ] = await Promise.all([
    getTracksFromFiles(files),
    getCoverFromFiles(files)
  ])
  if (!tracks) return
  const { title, artist } = extractInfoFromTracks(tracks)
  return { tracks, cover, artist, title }
}

export default getAlbumCandidateFromFiles

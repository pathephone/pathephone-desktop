
import getCoverFromFiles from './getCandidatesFromFiles/getCoverFromFiles'
import extractAlbumInfoFromTracks from './getCandidatesFromFiles/extractAlbumInfoFromTracks'
import getTracksFromFiles from './getCandidatesFromFiles/getTracksFromFiles'

async function getCandidateFromFiles (files) {
  if (files.length === 0) return
  const [ tracks, coverImage = null ] = await Promise.all([
    getTracksFromFiles(files),
    getCoverFromFiles(files)
  ])
  if (!tracks) return
  const { title, artist } = extractAlbumInfoFromTracks(tracks)
  return { tracks, cover: { image: coverImage }, artist, title }
}

export default getCandidateFromFiles

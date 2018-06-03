import getTracksFromFiles from '~utils/getTracksFromFiles'
import getCoverFromFiles from '~utils/getCoverFromFiles'

async function getAlbumCandidateFromFiles (files) {
  const [ tracks, cover ] = await Promise.all([
    getTracksFromFiles(files),
    getCoverFromFiles(files)
  ])
  if (!tracks) return
  return { tracks, cover, title: tracks[0].album }
}

export default getAlbumCandidateFromFiles

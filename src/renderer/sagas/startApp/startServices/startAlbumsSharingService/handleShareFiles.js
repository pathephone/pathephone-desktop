import { call, put, all } from 'redux-saga/effects'
import { systemShareCandidatesRecieved } from '#actions-system'

import getTracksFromFiles from './getTracksFromFiles'
import getCoverFromFiles from './getCoverFromFiles'

function * getAlbumCandidate ([ folderPath, files ]) {
  const [ tracks, cover ] = yield all([
    call(getTracksFromFiles, files),
    call(getCoverFromFiles, files)
  ])
  if (!tracks) return
  return { tracks, cover, title: tracks[0].album }
}

function * getAlbumCandidatesFromFiles (files) {
  const handleReduce = (acc, file) => {
    const folderPath = file.webkitRelativePath.replace(file.name, '')
    if (!acc[folderPath]) acc[folderPath] = []
    acc[folderPath].push(file)
    return acc
  }
  const filesByFolder = files.reduce(handleReduce, {})
  const candidates = yield all(
    Object.entries(filesByFolder)
      .map(entry => call(getAlbumCandidate, entry))
  )
  return candidates.filter(candidate => !!candidate)
}

function * handleShareFiles (apis, { payload }) {
  try {
    const selectedFiles = Array.from(payload)
    const albumCandidates = yield call(getAlbumCandidatesFromFiles, selectedFiles)
    yield put(systemShareCandidatesRecieved(albumCandidates))
  } catch (e) {
    console.error(e)
  }
}

export default handleShareFiles

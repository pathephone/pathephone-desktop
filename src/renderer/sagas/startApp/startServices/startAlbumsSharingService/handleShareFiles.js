import { call, put, all } from 'redux-saga/effects'
import { systemShareCandidatesRecieved } from '#actions-system'

import getTracksFromFiles from './getTracksFromFiles'
import getCoverFromFiles from './getCoverFromFiles'

function * getCandidatesFromFiles (files) {
  const [ tracks, cover ] = yield all([
    call(getTracksFromFiles, files),
    call(getCoverFromFiles, files)
  ])
  const title = tracks && tracks[0].album
  const albumData = { tracks, cover, title }
  return [ albumData ]
}

function * handleShareFiles ({ payload }) {
  try {
    const selectedFiles = Array.from(payload)
    const albumCandidates = yield call(getCandidatesFromFiles, selectedFiles)
    yield put(systemShareCandidatesRecieved(albumCandidates))
  } catch (e) {
    console.error(e)
  }
}

export default handleShareFiles

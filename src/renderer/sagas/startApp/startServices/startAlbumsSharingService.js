import { call, take, put, all } from 'redux-saga/effects'

import { systemShareFilesProcessed } from '#actions-system'
import { uiShareFilesSelected } from '#actions-ui'

import getTracksFromFiles from './startAlbumsSharingService/getTracksFromFiles'
import getCoverFromFiles from './startAlbumsSharingService/getCoverFromFiles'

function * startAlbumsSharingService (args) {
  const { shareObjectToIpfs, saveAlbumToCollection } = args
  try {
    while (true) {
      const { payload } = yield take(uiShareFilesSelected)
      const selectedFiles = Array.from(payload)
      const nextArgs = { ...args, selectedFiles }
      const [ tracks, cover ] = yield all([
        call(getTracksFromFiles, nextArgs),
        call(getCoverFromFiles, nextArgs)
      ])
      const albumData = { tracks, cover, title: tracks[0].album }
      const albumCid = yield call(shareObjectToIpfs, albumData)
      yield call(saveAlbumToCollection, { data: albumData, cid: albumCid })
      yield put(systemShareFilesProcessed())
    }
  } catch (e) {
    console.error(e)
  }
}

export default startAlbumsSharingService

import { call, take, put, all } from 'redux-saga/effects'

import { dagParams } from '~data/config'

import { systemShareFilesProcessed } from '#actions-system'
import { uiShareFilesSelected } from '#actions-ui'

import getTracksFromFiles from './startAlbumsSharingService/getTracksFromFiles'
import getCoverFromFiles from './startAlbumsSharingService/getCoverFromFiles'

function * startAlbumsSharingService (args) {
  const { incomingAlbumsChannel, ipfsApi } = args
  try {
    while (true) {
      const { payload } = yield take(uiShareFilesSelected)
      const selectedFiles = Array.from(payload)
      const nextArgs = { ...args, selectedFiles }
      const [ tracks, cover ] = yield all([
        call(getTracksFromFiles, nextArgs),
        call(getCoverFromFiles, nextArgs)
      ])
      const album = { tracks, cover, title: tracks[0].album }
      const cidObj = yield call(ipfsApi.dag.put, album, dagParams)
      yield put(systemShareFilesProcessed())
      yield put(incomingAlbumsChannel, { data: album, cid: cidObj.toBaseEncodedString() })
    }
  } catch (e) {
    console.error(e)
  }
}

export default startAlbumsSharingService

import { put, call, takeEvery } from 'redux-saga/effects'

import { systemAlbumsCollectionInfoRecieved } from '~actions/system'
import reduxSagaTicker from '~utils/reduxSagaTicker'

function * updateAlbumsCollectionInfo ({ getAlbumsCollectionInfo }) {
  const dbInfo = yield call(getAlbumsCollectionInfo)
  yield put(systemAlbumsCollectionInfoRecieved(dbInfo))
}

function * startAlbumsCollectionInfo (apis) {
  yield updateAlbumsCollectionInfo(apis)
  const channel = yield call(reduxSagaTicker, 10000)
  yield takeEvery(channel, updateAlbumsCollectionInfo, apis)
}

export default startAlbumsCollectionInfo

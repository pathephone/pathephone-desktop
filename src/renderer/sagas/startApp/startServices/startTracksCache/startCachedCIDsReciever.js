import { call, put, take } from 'redux-saga/effects'
import { systemCacheTrackSucceed } from '~actions/system'

function * startCachedCIDsReciever (api) {
  const { getCachedCIDsChannel, openCachedCIDsStream } = api
  try {
    yield call(openCachedCIDsStream)
    const channel = yield call(getCachedCIDsChannel)
    while (true) {
      const { errorMessage, payload } = yield take(channel)
      if (!errorMessage) {
        yield put(systemCacheTrackSucceed(payload))
      } else {
        throw new Error(errorMessage)
      }
    }
  } catch (e) {
    console.error(e)
  }
}

export default startCachedCIDsReciever

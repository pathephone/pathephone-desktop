import { take, call, put } from 'redux-saga/effects'
import reduxSagaTicker from '~utils/reduxSagaTicker'
import { systemMetabinPeersRecieved } from '~actions/system'

function * startMetabinPeersRetriever ({ getMetabinPeersCount }) {
  const ticker = yield call(reduxSagaTicker, 10000)
  try {
    while (true) {
      yield take(ticker)
      const peersCount = yield call(getMetabinPeersCount)
      yield put(systemMetabinPeersRecieved({ metabinPeersCount: peersCount }))
    }
  } catch (e) {
    console.error(e)
    yield put(systemMetabinPeersRecieved({ metabinPeersCount: null }))
    ticker.close()
  }
}

export default startMetabinPeersRetriever

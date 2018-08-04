import { take, call, put } from 'redux-saga/effects'
import reduxSagaTicker from '~utils/reduxSagaTicker'
import formatBytes from '~utils/formatBytes'
import { systemIpfsStatsRecieved } from '~actions/system'

const normalizeStats = ({ repoStat, bandwidthStat, peersCount } = {}) => ({
  repoStat: repoStat ? {
    used: formatBytes(repoStat.repoSize, 2),
    limit: formatBytes(repoStat.storageMax, 2)
  } : null,
  bandwidthStat: bandwidthStat ? {
    in: formatBytes(bandwidthStat.totalIn, 2),
    out: formatBytes(bandwidthStat.totalOut, 2)
  } : null,
  peersCount: peersCount || null
})

function * startIPFSStatsRetriever ({ getIPFSStats }) {
  const ticker = yield call(reduxSagaTicker, 10000)
  try {
    while (true) {
      yield take(ticker)
      const stats = yield call(getIPFSStats)
      yield put(systemIpfsStatsRecieved(normalizeStats(stats)))
    }
  } catch (e) {
    console.error(e)
    yield put(systemIpfsStatsRecieved())
    ticker.close()
  }
}

export default startIPFSStatsRetriever

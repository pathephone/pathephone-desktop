import { fork } from 'redux-saga/effects'
import startMetabinPeersRetriever from './startIndicatorBarService/startMetabinPeersRetriever'
import startIPFSStatsRetriever from './startIndicatorBarService/startIPFSStatsRetriever'

function * startIndicatorsBarService (args) {
  yield fork(startIPFSStatsRetriever, args)
  yield fork(startMetabinPeersRetriever, args)
}

export default startIndicatorsBarService

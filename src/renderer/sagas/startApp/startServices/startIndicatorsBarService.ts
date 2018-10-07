import { fork } from 'redux-saga/effects';

import { startIPFSStatsRetriever } from '~renderer/sagas/startApp/startServices/startIndicatorBarService/startIPFSStatsRetriever';
import { startMetabinPeersRetriever } from '~renderer/sagas/startApp/startServices/startIndicatorBarService/startMetabinPeersRetriever';

export function* startIndicatorsBarService(): Generator {
  yield fork(startIPFSStatsRetriever);
  yield fork(startMetabinPeersRetriever);
}

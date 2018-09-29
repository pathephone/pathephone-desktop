import { take, call, put } from 'redux-saga/effects';
import reduxSagaTicker from '~shared/utils/reduxSagaTicker';
import actions from '#actions';
import printRenderer from '~shared/utils/printRenderer';

function* startMetabinPeersRetriever({ getMetabinPeersCount }) {
  const ticker = yield call(reduxSagaTicker, 10000);
  try {
    while (true) {
      yield take(ticker);
      const peersCount = yield call(getMetabinPeersCount);
      yield put(actions.systemMetabinPeersRecieved({ metabinPeersCount: peersCount }));
    }
  } catch (e) {
    printRenderer.error(e);
    yield put(actions.systemMetabinPeersRecieved({ metabinPeersCount: null }));
    ticker.close();
  }
}

export default startMetabinPeersRetriever;

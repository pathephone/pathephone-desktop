import { call, put, take } from 'redux-saga/effects';

import { Channel } from 'redux-saga';
import { albumsGateApi } from '~renderer/api/intex';
import { actions } from '~renderer/state/actions';
import reduxSagaTicker from '~shared/utils/reduxSagaTicker';

export function* startMetabinPeersRetriever(): Generator  {
  const ticker: Channel<boolean> = yield call(reduxSagaTicker, 10000);
  try {
    // tslint:disable-next-line no-constant-condition
    while (true) {
      yield take(ticker);
      const peersCount: number = yield call(albumsGateApi.getMetabinPeersCount);
      yield put(actions.systemMetabinPeersRecieved({ metabinPeersCount: peersCount }));
    }
  } catch (e) {
    console.error(e);
    yield put(actions.systemMetabinPeersRecieved({ metabinPeersCount: null }));
    ticker.close();
  }
}

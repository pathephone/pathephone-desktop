import { Channel } from 'redux-saga';

import { call, put, take } from 'redux-saga/effects';
import { customIpfsApi } from '~renderer/api/intex';
import actions from '~renderer/state/actions';
import { IIpfsStat } from '~renderer/types/api';
import formatBytes from '~shared/utils/formatBytes';
import reduxSagaTicker from '~shared/utils/reduxSagaTicker';

interface IIpfsStatNormalized {
  repoStat: null | {
    used: string;
    limit: string;
  };
  bandwidthStat: null | {
    in: string;
    out: string;
  };
  peersCount: null | number;
}

const normalizeStats: (s: IIpfsStat) => IIpfsStatNormalized = (
  { repoStat, bandwidthStat, peersCount }: IIpfsStat
): IIpfsStatNormalized => ({
  repoStat: repoStat ? {
    used: formatBytes(repoStat.repoSize, 2),
    limit: formatBytes(repoStat.storageMax, 2)
  } : null,
  bandwidthStat: bandwidthStat ? {
    in: formatBytes(bandwidthStat.totalIn, 2),
    out: formatBytes(bandwidthStat.totalOut, 2)
  } : null,
  peersCount: peersCount || null
});

export function* startIPFSStatsRetriever(): Generator {
  const ticker: Channel<boolean> = yield call(reduxSagaTicker, 10000);
  try {
    // tslint:disable-next-line no-constant-condition
    while (true) {
      yield take(ticker);
      const stats: IIpfsStat = yield call(customIpfsApi.getIpfsStats);
      yield put(actions.systemIpfsStatsRecieved(normalizeStats(stats)));
    }
  } catch (e) {
    console.error(e);
    yield put(actions.systemIpfsStatsRecieved());
    ticker.close();
  }
}

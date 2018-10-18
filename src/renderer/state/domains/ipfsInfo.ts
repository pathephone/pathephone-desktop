import { AnyAction, Reducer } from 'redux';
import { Selector } from 'reselect';

import { actions } from '~renderer/state/actions';
import { IRootState } from '~renderer/state/rootState';
import { IIpfsBandwidthStat, IIpfsRepoStat } from '~renderer/types/api';

interface IIpfsInfoState {
  isOffline: boolean;
  gateway: null | string;
  apiEndpoint: null | string;
  peersCount: null | number;
  metabinPeersCount: null | number;
  repoStat: null | IIpfsRepoStat;
  bandwidthStat: null | IIpfsBandwidthStat;
}

const DOMAIN: string = 'ipfsInfo';

const initialState: IIpfsInfoState = {
  isOffline: false,
  gateway: null,
  apiEndpoint: null,
  peersCount: null,
  metabinPeersCount: null,
  repoStat: null,
  bandwidthStat: null
};

export const getIpfsIsOffline: Selector<IRootState, boolean> = (
  state: IRootState
): boolean => state[DOMAIN].isOffline;
export const getIpfsGateway: Selector<IRootState, null | string> = (
  state: IRootState
): null | string => state[DOMAIN].gateway;
export const getIpfsApiEndpoint: Selector<IRootState, null | string> = (
  state: IRootState
): null | string => state[DOMAIN].apiEndpoint;
export const getIpfsPeers: Selector<IRootState, null | number> = (
  state: IRootState
): null | number => state[DOMAIN].peersCount;
export const getMetabinPeers: Selector<IRootState, null | number> = (
  state: IRootState
): null | number => state[DOMAIN].metabinPeersCount;
export const getIPFSRepoStat: Selector<IRootState, null | IIpfsRepoStat> = (
  state: IRootState
): null | IIpfsRepoStat => state[DOMAIN].repoStat;
export const getIPFSBandwidthStat: Selector<IRootState, null | IIpfsBandwidthStat> = (
  state: IRootState
): IIpfsBandwidthStat => state[DOMAIN].bandwidthStat;

const ipfsInfoReducer: Reducer<IIpfsInfoState> = (
  state: IIpfsInfoState = initialState, action: AnyAction
): IIpfsInfoState => {
  const { type, payload } = action;
  switch (type) {
    case actions.systemIpfsInfoRecieved.toString():
    case actions.systemIpfsStatsRecieved.toString():
    case actions.systemMetabinPeersRecieved.toString():
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export default ipfsInfoReducer;

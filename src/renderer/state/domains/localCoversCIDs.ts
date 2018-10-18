import { AnyAction, Reducer } from 'redux';
import { Selector } from 'reselect';

import { actions } from '~renderer/state/actions';
import { IRootState } from '~renderer/state/rootState';
import { IDiscoverPageAlbum } from '~renderer/ui/DiscoverPage/types';

interface ILocalCoversCids {
  [key: string]: boolean;
}

const DOMAIN: string = 'localCoversCIDs';

const initialState: ILocalCoversCids = {};

export const getLocalCoversCIDs: Selector<IRootState, ILocalCoversCids> = (
  state: IRootState
): ILocalCoversCids => state[DOMAIN];

const handleReduce: (acc: ILocalCoversCids, album: IDiscoverPageAlbum) => ILocalCoversCids = (
  acc: ILocalCoversCids, album: IDiscoverPageAlbum
): ILocalCoversCids => {
  acc[album.albumCoverCid] = false;

  return acc;
};

const localcCoversCidsReducer: Reducer<ILocalCoversCids> = (
  state: ILocalCoversCids = initialState, action: AnyAction
): ILocalCoversCids => {
  const { type, payload } = action;
  switch (type) {
    case actions.systemIPFSFileCached.toString():
      if (state[payload] === false) {
        return { ...state, [payload]: true };
      }

      return state;
    case actions.systemDiscoverAlbumsFetchSucceed.toString():
      return payload.reduce(handleReduce, {});
    case actions.uiDiscoverPageClosed.toString():
      return {};
    default:
      return state;
  }
};

export default localcCoversCidsReducer;

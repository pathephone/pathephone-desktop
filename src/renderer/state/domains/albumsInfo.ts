import { AnyAction, Reducer } from 'redux';
import { getType } from 'typesafe-actions';

import { actions } from '~renderer/state/actions';

export interface IAlbumsInfoState {
  albumsCount: number | null;
}

const initialState: IAlbumsInfoState = {
  albumsCount: null
};

export const albumsInfoReducer: Reducer<IAlbumsInfoState, AnyAction> = (
  state: IAlbumsInfoState = initialState, action: AnyAction
): IAlbumsInfoState => {
  const { type, payload } = action;
  switch (type) {
    case getType(actions.systemAlbumsCollectionInfoRecieved):
    case getType(actions.systemShareCandidateSaveSucceed):
    case getType(actions.systemAlbumsRecievedCacheTransited):
      return { albumsCount: payload.albumsCount };
    case getType(actions.systemDiscoverSelectedActionSucceed):
      if (payload) {
        return { albumsCount: payload.albumsCount };
      }

      return state;
    default:
      return state;
  }
};

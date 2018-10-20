import { AnyAction, Reducer } from 'redux';

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
    case actions.systemAlbumsCollectionInfoRecieved.toString():
    case actions.systemShareCandidateSaveSucceed.toString():
    case actions.systemAlbumsRecievedCacheTransited.toString():
      return { albumsCount: payload.albumsCount };
    case actions.systemDiscoverSelectedActionSucceed.toString():
      if (payload) {
        return { albumsCount: payload.albumsCount };
      }

      return state;
    default:
      return state;
  }
};

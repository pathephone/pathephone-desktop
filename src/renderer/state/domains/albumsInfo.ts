import { AnyAction, Reducer } from 'redux';
import { actions } from '~renderer/state/actions';
import { IRootState } from '~renderer/state/rootState';

interface IAlbumsInfoState {
  albumsCount: number | null;
}

const DOMAIN: string = 'albumsInfo';

const initialState: IAlbumsInfoState = {
  albumsCount: null
};

export const getAlbumsCount: (s: IRootState) => number | null = (
  state: IRootState
 ): number | null => state[DOMAIN].albumsCount;

const reducer: Reducer<IAlbumsInfoState, AnyAction> = (
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

export default reducer;

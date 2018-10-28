import { AnyAction, Reducer } from 'redux';
import { getType } from 'typesafe-actions';

import { actions } from '~renderer/state/actions';
import { IDiscoverPageAlbum } from '~renderer/ui/DiscoverPage/types';

export interface IDiscoverPageState {
  albums: null | IDiscoverPageAlbum[];
  searchValue: string;
  isFailed: boolean;
  isProcessing: boolean;
  isAlbumsOutdated: boolean;
}

const initialState: IDiscoverPageState = {
  albums: null,
  searchValue: '',
  isFailed: false,
  isProcessing: false,
  isAlbumsOutdated: false
};

export const discoverPageReducer: Reducer<IDiscoverPageState> = (
  state: IDiscoverPageState = initialState, action: AnyAction
): IDiscoverPageState => {
  const { type, payload } = action;
  switch (type) {
    case getType(actions.systemDiscoverAlbumsFetch):
      return { ...initialState, isProcessing: true };
    case getType(actions.uiDiscoverPageClosed):
      return { ...initialState };
    case getType(actions.uiDiscoverSearchPerformed):
      return {
        ...initialState,
        searchValue: payload,
        isProcessing: true
      };
    case getType(actions.uiDiscoverSearchCleared):
      return { ...initialState, isProcessing: true };
    case getType(actions.systemDiscoverAlbumsFetchSucceed):
      return {
        ...state,
        albums: payload,
        isProcessing: false,
        isAlbumsOutdated: false
      };
    case getType(actions.systemShareCandidateSaveSucceed):
      if (state.albums) {
        return {
          ...state,
          isAlbumsOutdated: true
        };
      }

      return state;
    case getType(actions.systemAlbumsRecievedCacheTransited): {
      const { latestCid } = payload;
      if (state.albums && state.albums[0].albumCid !== latestCid) {
        return {
          ...state,
          isAlbumsOutdated: true
        };
      }

      return state;
    }
    case getType(actions.systemDiscoverAlbumsFetchFailed):
      return { ...state, isFailed: true, isProcessing: false };
    default:
      return state;
  }
};

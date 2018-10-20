import { AnyAction, Reducer } from 'redux';

import { actions } from '~renderer/state/actions';

export type IDiscoverSelectedState = number[];

const initialState: IDiscoverSelectedState = [];

export const discoverSelectedReducer: Reducer<IDiscoverSelectedState> = (
  state: IDiscoverSelectedState = initialState, action: AnyAction
): IDiscoverSelectedState => {
  const { type, payload } = action;
  switch (type) {
    case actions.uiDiscoverAlbumSelected.toString():
      return [...state, payload];
    case actions.uiDiscoverAlbumDeselected.toString():
      return state.filter((index: number) => index !== payload);
    case actions.systemDiscoverSelectedActionSucceed.toString():
    case actions.uiDiscoverSelectedCanceled.toString():
      return [];
    default:
      return state;
  }
};

import { AnyAction, Reducer } from 'redux';
import { getType } from 'typesafe-actions';

import { actions } from '~renderer/state/actions';

export type IDiscoverSelectedState = number[];

const initialState: IDiscoverSelectedState = [];

export const discoverSelectedReducer: Reducer<IDiscoverSelectedState> = (
  state: IDiscoverSelectedState = initialState, action: AnyAction
): IDiscoverSelectedState => {
  const { type, payload } = action;
  switch (type) {
    case getType(actions.uiDiscoverAlbumSelected):
      return [...state, payload];
    case getType(actions.uiDiscoverAlbumDeselected):
      return state.filter((index: number) => index !== payload);
    case getType(actions.systemDiscoverSelectedActionSucceed):
    case getType(actions.uiDiscoverSelectedCanceled):
      return [];
    default:
      return state;
  }
};

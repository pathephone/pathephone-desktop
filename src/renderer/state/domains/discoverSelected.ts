import { AnyAction, Reducer } from 'redux';
import { Selector } from 'reselect';

import { actions } from '~renderer/state/actions';
import { IRootState } from '~renderer/state/rootState';

type IDiscoverSelectedState = string[];

const DOMAIN: string = 'discoverSelected';

const initialState: IDiscoverSelectedState = [];

// SELECTORS

export const getDiscoverSelectedIds: Selector<IRootState, IDiscoverSelectedState> = (
  state: IRootState
): IDiscoverSelectedState => state[DOMAIN];

// ACTIONS

const discoverSelectedReducer: Reducer<IDiscoverSelectedState> = (
  state: IDiscoverSelectedState = initialState, action: AnyAction
): IDiscoverSelectedState => {
  const { type, payload } = action;
  switch (type) {
    case actions.uiDiscoverAlbumSelected.toString():
      return [...state, payload];
    case actions.uiDiscoverAlbumDeselected.toString():
      return state.filter((cid: string) => cid !== payload);
    case actions.systemDiscoverSelectedActionSucceed.toString():
    case actions.uiDiscoverSelectedCanceled.toString():
      return [];
    default:
      return state;
  }
};

export default discoverSelectedReducer;

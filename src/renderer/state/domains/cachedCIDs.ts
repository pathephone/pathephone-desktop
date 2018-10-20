import { AnyAction, Reducer } from 'redux';

import { actions } from '~renderer/state/actions';

export interface ICachedCIDsState {
  [key: string]: boolean;
}

const initialState: ICachedCIDsState = {};

export const cachedCidsReducer: Reducer<ICachedCIDsState, AnyAction> = (
  state: ICachedCIDsState = initialState, action: AnyAction
): ICachedCIDsState => {
  const { type, payload } = action;
  switch (type) {
    case actions.systemIPFSFileCached.toString():
      return {
        ...state,
        [payload]: true
      };
    default:
      return state;
  }
};

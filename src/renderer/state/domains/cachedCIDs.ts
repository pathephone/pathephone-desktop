import { AnyAction, Reducer } from 'redux';
import { actions } from '~renderer/state/actions';
import { IRootState } from '~renderer/state/rootState';

interface ICachedCIDsState {
  [key: string]: boolean;
}

const DOMAIN: string = 'cachedCIDs';

const initialState: ICachedCIDsState = {};

export const getCachedCIDs: (s: IRootState) => ICachedCIDsState = (
  (state: IRootState): ICachedCIDsState => state[DOMAIN]
);

const cachedCidsReducer: Reducer<ICachedCIDsState, AnyAction> = (
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

export default cachedCidsReducer;

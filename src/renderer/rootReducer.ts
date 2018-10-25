import { combineReducers, Reducer } from 'redux';

import * as reducers from '~renderer/state/reducers';
import { IRootState } from '~renderer/state/rootState';
import { appReducer } from '~renderer/ui/App/reducer';

export const rootReducer: Reducer<IRootState> = combineReducers<IRootState>({
  ...reducers,
  app: appReducer,
});

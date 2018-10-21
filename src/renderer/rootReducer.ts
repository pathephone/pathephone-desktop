import { combineReducers, Reducer } from 'redux';

import * as reducers from '~renderer/state/reducers';
import { IRootState } from '~renderer/state/rootState';
import { appReducer } from '~renderer/ui/App/reducer';
import { notificationsReducer } from '~renderer/ui/Notifications/reducer';

export const rootReducer: Reducer<IRootState> = combineReducers<IRootState>({
  ...reducers,
  app: appReducer,
  notifications: notificationsReducer,
});

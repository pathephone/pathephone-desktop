import { AnyAction, Reducer } from 'redux';
import { getType } from 'typesafe-actions';

import { actions } from '~renderer/state/actions';
import { initialAppState } from '~renderer/ui/App/state/initial';
import { IAppState } from '~renderer/ui/App/types';

export const appReducer: Reducer<IAppState> = (
  state: IAppState = initialAppState,
  action: AnyAction
) : IAppState => {
  const { type, payload } = action;
  switch (type) {
    case getType(actions.systemAppStartProceed):
      return { ...state, progress: payload };
    case getType(actions.systemAppStartFailed):
      return { ...state, errorMessage: payload };
    case getType(actions.systemUiLocked):
      return { ...state, isLocked: true };
    case getType(actions.systemUiUnlocked):
      return { ...state, isLocked: false };
    default:
      return state;
  }
};

import { AnyAction, Reducer } from 'redux';

import { actions } from '~renderer/state/actions';
import { initialAppState } from '~renderer/ui/App/state/initial';
import { IAppState } from '~renderer/ui/App/types';

export const appReducer: Reducer<IAppState> = (
  state: IAppState = initialAppState,
  action: AnyAction
) : IAppState => {
  const { type, payload } = action;
  switch (type) {
    case actions.systemAppStartProceed.toString():
      return { ...state, progress: payload };
    case actions.systemAppStartFailed.toString():
      return { ...state, errorMessage: payload };
    case actions.systemUiLocked.toString():
      return { ...state, isLocked: true };
    case actions.systemUiUnlocked.toString():
      return { ...state, isLocked: false };
    default:
      return state;
  }
};

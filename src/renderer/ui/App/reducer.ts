import { AnyAction, Reducer } from 'redux';

import { systemActions } from '~renderer/state/actions';
import { initialAppState } from '~renderer/ui/App/state/initial';
import { IAppState } from '~renderer/ui/App/types';

export const appReducer: Reducer<IAppState> = (
  state: IAppState = initialAppState,
  action: AnyAction
) : IAppState => {
  const { type, payload } = action;
  switch (type) {
    case systemActions.systemAppStartProceed.toString():
      return { ...state, progress: payload };
    case systemActions.systemAppStartFailed.toString():
      return { ...state, errorMessage: payload };
    case systemActions.systemUiLocked.toString():
      return { ...state, isLocked: true };
    case systemActions.systemUiUnlocked.toString():
      return { ...state, isLocked: false };
    default:
      return state;
  }
};

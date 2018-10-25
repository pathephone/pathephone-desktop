import { AnyAction, Reducer } from 'redux';

import { actions } from '~renderer/state/actions';
import { IGithubRelease } from '~renderer/types/api';

export type INewReleaseState = null | IGithubRelease;

const initialState: INewReleaseState = null;

export const newReleaseReducer: Reducer<INewReleaseState> = (
  state: INewReleaseState = initialState, action: AnyAction
): INewReleaseState => {
  const { type, payload } = action;
  switch (type) {
    case actions.systemNewRelaseDetected.toString():
      return payload;
    default:
      return state;
  }
};

import { AnyAction, Reducer } from 'redux';
import { Selector } from 'reselect';

import { actions } from '~renderer/state/actions';
import { IRootState } from '~renderer/state/rootState';
import { IGithubRelease } from '~renderer/types/api';

type INewReleaseState = null | IGithubRelease;

const DOMAIN: string = 'newRelease';

const initialState: INewReleaseState = null;

export const getNewRelease: Selector<IRootState, INewReleaseState> = (
  state: IRootState
): INewReleaseState => state[DOMAIN];

const newReleaseReducer: Reducer<INewReleaseState> = (
  state: INewReleaseState = initialState, action: AnyAction
): INewReleaseState => {
  const { type, payload } = action;
  switch (type) {
    case actions.systemNewRelaseDetected.toString():
      return payload.release;
    default:
      return state;
  }
};

export default newReleaseReducer;

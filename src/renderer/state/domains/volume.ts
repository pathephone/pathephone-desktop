import { AnyAction, Reducer } from 'redux';
import { Selector } from 'reselect';

import { actions } from '~renderer/state/actions';

type IVolumeState = number;

const DOMAIN: string = 'volume';

const initialState: IVolumeState = 0.7;

export const getVolume: Selector<IVolumeState, number> = (
  state: IVolumeState
): number => state[DOMAIN];

const volumeReducer: Reducer<IVolumeState> = (
  state: IVolumeState = initialState, action: AnyAction
): IVolumeState => {
  const { type, payload } = action;
  switch (type) {
    case actions.uiVolumeChanged.toString():
      return payload;
    default:
      return state;
  }
};

export default volumeReducer;

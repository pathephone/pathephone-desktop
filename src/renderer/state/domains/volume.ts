import { AnyAction, Reducer } from 'redux';

import { actions } from '~renderer/state/actions';

export type IVolumeState = number;

const initialState: IVolumeState = 0.7;

export const volumeReducer: Reducer<IVolumeState> = (
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

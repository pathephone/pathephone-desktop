import { Action, Reducer } from 'redux';

import { initialStartScreenState } from '~renderer/ui/StartScreen/reducer/initial';
import { IStartScreenState } from '~renderer/ui/StartScreen/types';

const startScreenReducer: Reducer<> = (
  state: IStartScreenState = initialStartScreenState,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export { startScreenReducer };

import { Action } from 'redux';

import { intialState, IStartScreenState } from './shape';

const startScreenReducer = (state: IStartScreenState = intialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default startScreenReducer;

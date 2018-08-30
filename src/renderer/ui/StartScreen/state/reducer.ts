import { Action } from 'redux';

import shape from './shape';
import { IStartScreenState } from './types';

const startScreenReducer = (state: IStartScreenState = shape, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default startScreenReducer;

import { Action } from 'redux';

import { IStartScreenState } from '../types';
import shape from './shape';

const startScreenReducer = (state: IStartScreenState = shape, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default startScreenReducer;

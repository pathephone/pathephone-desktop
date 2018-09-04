import { Action } from 'redux';

import { IStartScreenState } from '../types';
import initialState from './initialState';

const startScreenReducer = (state: IStartScreenState = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default startScreenReducer;

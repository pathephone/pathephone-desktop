import { Action } from 'redux';

import { default as actions } from '#actions';

import { INotificationsState } from '../types';
import initialState from './initialState';

const reducer = (state: INotificationsState = initialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.systemNotificationRecieved.toString():
      return [...state, payload];
    case actions.systemNotificationExpired.toString():
    case actions.uiNotificationToastRemoved.toString():
      return state.filter(n => n.id !== payload);
    default:
      return state;
  }
};

export default reducer;

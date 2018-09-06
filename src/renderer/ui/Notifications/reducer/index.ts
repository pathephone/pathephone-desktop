import { Action } from 'redux';

import actions from '~renderer/state/actions';
import { initialNotificationsState } from '~renderer/ui/Notifications/reducer/initial';
import { INotificationsState } from '~renderer/ui/Notifications/types';

export const notificationsReducer = (
  state: INotificationsState = initialNotificationsState,
  action: Action,
) => {
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

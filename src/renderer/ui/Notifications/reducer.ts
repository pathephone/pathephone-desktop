import { AnyAction, Reducer } from 'redux';

import actions from '~renderer/state/actions';
import { notificationsSetters } from '~renderer/ui/Notifications';
import { initialNotificationsState } from '~renderer/ui/Notifications/state/initial';
import { INotificationsState } from '~renderer/ui/Notifications/types';

export const notificationsReducer: Reducer<INotificationsState> = (
  state: INotificationsState = initialNotificationsState,
  action: AnyAction
) : INotificationsState => {
  const { type, payload } = action;
  switch (type) {
    case actions.systemNotificationRecieved.toString():
      return notificationsSetters.addNotification(state, payload);
    case actions.systemNotificationExpired.toString():
    case actions.uiNotificationToastRemoved.toString():
      return notificationsSetters.removeNotification(state, payload);
    default:
      return state;
  }
};

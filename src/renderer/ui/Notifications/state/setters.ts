import { INotification, INotificationsState } from '~renderer/ui/Notifications/types';

type IAddNotification = (state: INotificationsState, payload: INotification) => INotificationsState;

export const addNotification: IAddNotification = (
  state: INotificationsState,
  payload: INotification
) : INotificationsState => (
  [...state, payload]
);

type IRemoveNotification = (state: INotificationsState, payload: number) => INotificationsState;

export const removeNotification: IRemoveNotification = (
  state: INotificationsState,
  payload: number
) : INotificationsState => (
  state.filter((n: INotification) => n.id !== payload)
);

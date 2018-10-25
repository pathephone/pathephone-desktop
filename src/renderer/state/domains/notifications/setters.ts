import { INotificationsState, INotification } from "~renderer/state/domains/notifications/types";

let counter = 0

export const addSuccessNotification = (
  state: INotificationsState,
  text: string
) : INotificationsState => (
  [...state, { 
    notificationType: 'SUCCESS',
    id: counter += 1,
    text,
  }]
);

export const addWarningNotification = (
  state: INotificationsState,
  text: string
) : INotificationsState => (
  [...state, { 
    notificationType: 'WARNING',
    id: counter += 1,
    text,
  }]
);

export const addErrorNotification = (
  state: INotificationsState,
  text: string
) : INotificationsState => (
  [...state, { 
    notificationType: 'ERROR',
    id: counter += 1,
    text,
  }]
);

type IRemoveNotification = (state: INotificationsState, payload: number) => INotificationsState;

export const removeNotification: IRemoveNotification = (
  state: INotificationsState,
  payload: number
) : INotificationsState => (
  state.filter((n: INotification) => {
    return n.id !== payload;
  })
);

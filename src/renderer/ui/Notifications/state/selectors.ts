import { Selector } from 'reselect';

import { IRootState } from '~renderer/state/rootState';
import { INotificationsState } from '~renderer/ui/Notifications/types';

export const getNotifications: Selector<IRootState, INotificationsState> = (
  state: IRootState
): INotificationsState => state.notifications;

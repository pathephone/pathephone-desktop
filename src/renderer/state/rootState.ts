import { IAppState } from '~renderer/ui/App/types';
import { INotificationsState } from '~renderer/ui/Notifications/types';

export interface IRootState {
  notifications: INotificationsState;
  app: IAppState;
  [x: string]: {};
}

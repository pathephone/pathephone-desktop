import { IAppState } from '~renderer/ui/App/types';
import { INotificationsState } from '~renderer/ui/Notifications/types';
import { IPlaylistState } from '~renderer/ui/Playlist/types';

export interface IRootState {
  notifications: INotificationsState;
  app: IAppState;
  playlist: IPlaylistState;
  [x: string]: {};
}

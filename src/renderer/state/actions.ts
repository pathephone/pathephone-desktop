import { playerEvents } from '~renderer/ui/Player';
import { playlistEvents } from '~renderer/ui/Playlist';
import * as sharedActions from './creators';
import { discoverPageEvents } from '~renderer/ui/DiscoverPage';
import { sharePageEvents } from '~renderer/ui/SharePage';
import { notificationsEvents } from '~renderer/ui/Notifications';

export const actions = {
  ...sharedActions,
  ...playlistEvents,
  ...playerEvents,
  ...discoverPageEvents,
  ...sharePageEvents,
  ...notificationsEvents
};

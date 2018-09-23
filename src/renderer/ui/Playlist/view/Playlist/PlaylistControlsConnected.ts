import { connect, MapDispatchToProps } from 'react-redux';

import { playlistEvents } from '~renderer/ui/Playlist';
import { PlaylistControls } from '~renderer/ui/Playlist/view/Playlist/PlaylistControls';

interface IDispatchProps {
  onClearPlaylist(p: void): void;
}

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, {}> = {
  onClearPlaylist: playlistEvents.uiPlaylistCleared
};

export const PlaylistControlsConnected: React.ComponentClass = (
  connect<void, IDispatchProps>(
    null, mapDispatchToProps
  )(PlaylistControls)
);

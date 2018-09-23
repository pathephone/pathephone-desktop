import { connect, MapStateToProps } from 'react-redux';

import { IRootState } from '~renderer/state/rootState';
import selectors from '~renderer/state/selectors';
import { Playlist } from '~renderer/ui/Playlist/view/Playlist';

interface IStateProps {
  hasTracklist: boolean;
}

const mapStateToProps: MapStateToProps<IStateProps, {}, IRootState> = (
  (state: IRootState): IStateProps => ({
    hasTracklist: !selectors.isPlaylistEmpty(state)
  })
);

export const PlaylistConnected: React.ComponentClass = connect<IStateProps>(mapStateToProps)(Playlist);

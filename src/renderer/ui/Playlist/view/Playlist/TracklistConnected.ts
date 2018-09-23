import { connect, MapStateToProps } from 'react-redux';

import { IRootState } from '~renderer/state/rootState';
import selectors from '~renderer/state/selectors';
import { Tracklist } from '~renderer/ui/Playlist/view/Playlist/Tracklist';

interface IStateProps {
  tracksIndexes: string[];
}

const mapStateToProps: MapStateToProps<IStateProps, {}, IRootState> = (
  (state: IRootState): IStateProps => ({
    tracksIndexes: selectors.getPlaylistTracksIndexes(state)
  })
);

export const TracklistConnected: React.ComponentClass = connect<IStateProps>(mapStateToProps)(Tracklist);

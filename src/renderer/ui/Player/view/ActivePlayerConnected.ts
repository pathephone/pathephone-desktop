import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';

import { IRootState } from '~renderer/state/rootState';
import selectors from '~renderer/state/selectors';
import { ActivePlayer } from '~renderer/ui/Player/view/ActivePlayer';
import { playerEvents } from '~renderer/ui/Player';

interface IStateProps {
  title: string;
  artist: string;
  source: string;
  volume: number;
  isPaused: boolean;
}

const mapStateToProps: MapStateToProps<IStateProps, {}, IRootState> = (
  state: IRootState
) : IStateProps => {
  const { title, artist } = selectors.getCurrentTrackStrict(state);

  return {
    title,
    artist,
    source: selectors.getCurrentTrackSource(state),
    volume: selectors.getVolume(state),
    isPaused: selectors.isPaused(state)
  };
};

interface IDispatchProps {
  onAudioEnded(): void;
}

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, {}> = {
  onAudioEnded: playerEvents.systemAudioEnded,
};

export const ActivePlayerConnected: React.ComponentClass = connect<IStateProps, IDispatchProps>(
  mapStateToProps, mapDispatchToProps
)(ActivePlayer);

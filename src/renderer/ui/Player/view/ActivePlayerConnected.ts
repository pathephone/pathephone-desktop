import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';

import { actions } from '~renderer/state/actions';
import { IRootState } from '~renderer/state/rootState';
import selectors from '~renderer/state/selectors';
import { ActivePlayer } from '~renderer/ui/Player/view/ActivePlayer';

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
  onAudioPlayed(): void;
  onAudioPaused(): void;
}

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, void> = {
  onAudioEnded: actions.systemAudioEnded,
  onAudioPlayed: actions.systemAudioPlayed,
  onAudioPaused: actions.systemAudioPaused
};

export const ActivePlayerConnected: React.ComponentClass = connect<IStateProps, IDispatchProps>(
  mapStateToProps, mapDispatchToProps
)(ActivePlayer);

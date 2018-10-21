import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';

import { IRootState } from '~renderer/state/rootState';
import selectors from '~renderer/state/selectors';
import { ControlsLeft } from '~renderer/ui/Player/view/ActivePlayer/ControlsLeft';
import { playerEvents } from '~renderer/ui/Player';

interface IStateProps {
  hasPauseIcon: boolean;
}

const mapStateToProps: MapStateToProps<IStateProps, void, IRootState> = (
  state: IRootState
) : IStateProps => ({
  hasPauseIcon: !selectors.isPaused(state)
});

interface IDispatchProps {
  onPlayNextClick(): void;
  onPlayPreviousClick(): void;
  onPlaybackToggle(): void;
}

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, void> = {
  onPlayNextClick: playerEvents.uiNextTrackPlayed,
  onPlayPreviousClick: playerEvents.uiPreviousTrackPlayed,
  onPlaybackToggle: playerEvents.uiPlaybackToggled
};

export const ControlsLeftConnected: React.ComponentClass = connect(mapStateToProps, mapDispatchToProps)(ControlsLeft);

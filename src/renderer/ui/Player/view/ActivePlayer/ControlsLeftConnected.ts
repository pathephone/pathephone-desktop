import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';

import actions from '~renderer/state/actions';
import { IRootState } from '~renderer/state/rootState';
import selectors from '~renderer/state/selectors';
import { ControlsLeft } from '~renderer/ui/Player/view/ActivePlayer/ControlsLeft';

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
  onPlayNextClick: actions.uiNextTrackPlayed,
  onPlayPreviousClick: actions.uiPreviousTrackPlayed,
  onPlaybackToggle: actions.uiPlaybackToggled
};

export const ControlsLeftConnected: React.ComponentClass = connect(mapStateToProps, mapDispatchToProps)(ControlsLeft);

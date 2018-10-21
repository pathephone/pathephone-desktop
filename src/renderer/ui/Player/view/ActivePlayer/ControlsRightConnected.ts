import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';

import { IRootState } from '~renderer/state/rootState';
import { ControlsRight } from '~renderer/ui/Player/view/ActivePlayer/ControlsRight';
import { playlistSelectors } from '~renderer/ui/Playlist';
import { playerEvents } from '~renderer/ui/Player';

interface IStateProps {
  isShuffleTurnedOn: boolean;
  isRepeatTurnedOn: boolean;
}

const mapStateToProps: MapStateToProps<IStateProps, {}, IRootState> = (
  state: IRootState
) : IStateProps => ({
  isShuffleTurnedOn: playlistSelectors.isShuffleTurnedOn(state),
  isRepeatTurnedOn: playlistSelectors.isRepeatTurnedOn(state)
});

interface IDispatchProps {
  onToggleShuffle(): void;
  onToggleRepeat(): void;
}

const mapDispatchToProps : MapDispatchToProps<IDispatchProps, IRootState> = {
  onToggleShuffle: playerEvents.uiShuffleToggled,
  onToggleRepeat: playerEvents.uiRepeatToggled
};

export const ControlsRightConnected: React.ComponentClass = connect<IStateProps, IDispatchProps>(
  mapStateToProps, mapDispatchToProps
)(ControlsRight);

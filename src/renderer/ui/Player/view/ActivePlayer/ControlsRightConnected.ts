import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';

import { IRootState } from '~renderer/state/rootState';
import { ControlsRight } from '~renderer/ui/Player/view/ActivePlayer/ControlsRight';
import { playerEvents } from '~renderer/ui/Player';
import selectors from '~renderer/state/selectors';

interface IStateProps {
  isShuffleTurnedOn: boolean;
  isRepeatTurnedOn: boolean;
}

const mapStateToProps: MapStateToProps<IStateProps, {}, IRootState> = (
  state: IRootState
) : IStateProps => ({
  isShuffleTurnedOn: selectors.isShuffleTurnedOn(state),
  isRepeatTurnedOn: selectors.isRepeatTurnedOn(state)
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

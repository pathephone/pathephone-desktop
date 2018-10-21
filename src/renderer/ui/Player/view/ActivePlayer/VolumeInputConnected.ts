import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';

import { IRootState } from '~renderer/state/rootState';
import selectors from '~renderer/state/selectors';
import { VolumeInput } from '~renderer/ui/Player/view/ActivePlayer/VolumeInput';
import { playerEvents } from '~renderer/ui/Player';

interface IStateProps {
  currentVolume: number;
}

const mapStateToProps : MapStateToProps<IStateProps, {}, IRootState> = (
  state: IRootState
) : IStateProps => ({
  currentVolume: selectors.getVolume(state)
});

interface IDispatchProps {
  onVolumeChange(): void;
}

const mapDispatchToProps : MapDispatchToProps<IDispatchProps, IRootState> = {
  onVolumeChange: playerEvents.uiVolumeChanged
};

export const VolumeInputConnected: React.ComponentClass = connect<IStateProps, IDispatchProps>(
  mapStateToProps, mapDispatchToProps
)(VolumeInput);

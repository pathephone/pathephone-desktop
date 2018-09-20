import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';

import actions from '~renderer/state/actions';
import { IRootState } from '~renderer/state/rootState';
import selectors from '~renderer/state/selectors';
import { VolumeInput } from '~renderer/ui/Player/view/ActivePlayer/VolumeInput';

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
  onVolumeChange: actions.uiVolumeChanged
};

export const VolumeInputConnected: React.ComponentClass = connect<IStateProps, IDispatchProps>(
  mapStateToProps, mapDispatchToProps
)(VolumeInput);

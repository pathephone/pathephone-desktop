import { connect, MapStateToProps } from 'react-redux';

import { IRootState } from '~renderer/state/rootState';
import selectors from '~renderer/state/selectors';
import { Player } from '~renderer/ui/Player/view/Player';

interface IStateProps {
  isActive: boolean;
}

const mapStateToProps: MapStateToProps<IStateProps, {}, IRootState> = (
  state: IRootState
) : IStateProps => ({
  isActive: selectors.isPlayerActive(state)
});

export const PlayerConnected: React.ComponentClass = connect<IStateProps>(mapStateToProps)(Player);

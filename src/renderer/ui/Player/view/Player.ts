import { connect, MapStateToProps } from 'react-redux';

import { IRootState } from '~renderer/state/rootState';
import selectors from '~renderer/state/selectors';
import { PlayerContainer } from '~renderer/ui/Player/view/PlayerContainer';

interface IStateProps {
  isActive: boolean;
}

const mapStateToProps: MapStateToProps<IStateProps, {}, IRootState> = (
  state: IRootState
) : IStateProps => ({
  isActive: selectors.isPlayerActive(state)
});

export const Player: React.ComponentClass = connect<IStateProps>(mapStateToProps)(PlayerContainer);

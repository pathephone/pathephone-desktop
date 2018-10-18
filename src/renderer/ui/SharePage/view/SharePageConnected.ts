import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';

import { actions } from '~renderer/state/actions';
import { IRootState } from '~renderer/state/rootState';
import selectors from '~renderer/state/selectors';
import { SharePage } from '~renderer/ui/SharePage/view/SharePage';

interface IStateProps {
  hasProcessingScreen: boolean;
  hasEditForm: boolean;
}

const mapStateToProps: MapStateToProps<IStateProps, {}, IRootState> = (
  state: IRootState
): IStateProps => ({
  hasProcessingScreen: selectors.isShareProcessing(state),
  hasEditForm: selectors.isShareCandidatesRecieved(state)
});

interface IDispatchProps {
  onFilesSelect(): void;
}

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, {}> = {
  onFilesSelect: actions.uiShareItemsSelected
};

export const SharePageConnected: React.ComponentClass = (
  connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(SharePage)
);

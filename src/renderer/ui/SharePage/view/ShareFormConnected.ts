import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';

import { actions } from '~renderer/state/actions';
import { IRootState } from '~renderer/state/rootState';
import selectors from '~renderer/state/selectors';
import { IShareFormValues } from '~renderer/ui/SharePage/types';
import { ShareForm } from '~renderer/ui/SharePage/view/ShareForm';
import { sharePageEvents } from '~renderer/ui/SharePage';

interface IStateProps {
  values: IShareFormValues;
  coverSrc: string | null;
  isDisabled: boolean;
}

const mapStateToProps: MapStateToProps<IStateProps, {}, IRootState> = (
  state: IRootState
): IStateProps => ({
  values: selectors.getShareFormValue(state),
  coverSrc: selectors.getShareCoverSrc(state),
  isDisabled: selectors.isShareProcessing(state)
});

interface IDispatchProps {
  onSubmit(): void;
  onCancel(): void;
  onChange(v: IShareFormValues): void;
  onReset(): void;
}

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, {}> = {
  onSubmit: sharePageEvents.uiShareFormSubmited,
  onCancel: sharePageEvents.uiShareFormCanceled,
  onChange: sharePageEvents.uiShareFormChanged,
  onReset: sharePageEvents.uiShareFormReseted
};

export const ShareFormConnected: React.ComponentClass = (
  connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(ShareForm)
);

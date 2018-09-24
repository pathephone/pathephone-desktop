import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';

import actions from '~renderer/state/actions';
import { IRootState } from '~renderer/state/rootState';
import selectors from '~renderer/state/selectors';
import { IShareFormValues } from '~renderer/ui/SharePage/types';
import ShareForm from './ShareForm';

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
  onSubmit: actions.uiShareFormSubmited,
  onCancel: actions.uiShareFormCanceled,
  onChange: actions.uiShareFormChanged,
  onReset: actions.uiShareFormReseted
};

export const ShareFormConnected: React.ComponentClass = (
  connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(ShareForm)
);

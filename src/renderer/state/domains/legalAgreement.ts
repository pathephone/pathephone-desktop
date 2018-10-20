import { AnyAction, Reducer } from 'redux';

import { actions } from '~renderer/state/actions';

export type ILegalAgreementState = boolean;

const initialState: ILegalAgreementState = false;

export const legalAgreementReducer: Reducer<ILegalAgreementState> = (
  state: ILegalAgreementState = initialState, action: AnyAction
): ILegalAgreementState => {
  const { type } = action;
  switch (type) {
    case actions.uiLegalAgreementGranted.toString():
      return true;
    default:
      return state;
  }
};

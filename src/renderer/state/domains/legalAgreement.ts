import { AnyAction, Reducer } from 'redux';
import { getType } from 'typesafe-actions';

import { actions } from '~renderer/state/actions';

export type ILegalAgreementState = boolean;

const initialState: ILegalAgreementState = false;

export const legalAgreementReducer: Reducer<ILegalAgreementState> = (
  state: ILegalAgreementState = initialState, action: AnyAction
): ILegalAgreementState => {
  const { type } = action;
  switch (type) {
    case getType(actions.uiLegalAgreementGranted):
      return true;
    default:
      return state;
  }
};

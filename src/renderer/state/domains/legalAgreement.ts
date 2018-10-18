import { AnyAction, Reducer } from 'redux';
import { Selector } from 'reselect';
import { actions } from '~renderer/state/actions';
import { IRootState } from '~renderer/state/rootState';

type ILegalAgreementState = boolean;

const DOMAIN: string = 'legalAgreement';

const initialState: ILegalAgreementState = false;

export const isLegalAgreementGranted: Selector<IRootState, boolean> = (
  state: IRootState
): boolean => state[DOMAIN];

const legalAgreementReducer: Reducer<ILegalAgreementState> = (
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

export default legalAgreementReducer;

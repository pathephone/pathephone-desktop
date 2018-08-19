import actions from '#actions';

const DOMAIN = 'legalAgreement';

const initialState = false;

export const isLegalAgreementGranted = state => state[DOMAIN];

const reducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case actions.uiLegalAgreementGranted.toString():
      return true;
    default:
      return state;
  }
};

export default reducer;

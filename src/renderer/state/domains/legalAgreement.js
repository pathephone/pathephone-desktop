import { uiLegalAgreementGranted } from '~actions/ui'

const DOMAIN = 'legalAgreement'

const initialState = false

export const isLegalAgreementGranted = state => state[DOMAIN]

const reducer = (state = initialState, action) => {
  const { type } = action
  switch (type) {
    case uiLegalAgreementGranted.toString():
      return true
    default:
      return state
  }
}

export default reducer


import { systemAppStartProceed, systemAppStartFailed, systemUiLocked, systemUiUnlocked } from '~actions/system'

const DOMAIN = 'appStart'

export const getAppStartErrorMessage = state => state[DOMAIN].errorMessage
export const getAppStartProgress = state => state[DOMAIN].progress
export const isAppLocked = state => state[DOMAIN].isLocked

const initialState = {
  progress: 0,
  errorMessage: null,
  isLocked: false
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case systemAppStartProceed.toString():
      return { ...state, progress: payload }
    case systemAppStartFailed.toString():
      return { ...state, errorMessage: payload }
    case systemUiLocked.toString():
      return { ...state, isLocked: true }
    case systemUiUnlocked.toString():
      return { ...state, isLocked: false }
    default:
      return state
  }
}

export default reducer

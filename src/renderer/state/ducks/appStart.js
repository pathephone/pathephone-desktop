
import { systemAppStartProceed, systemAppStartFailed, systemUiLocked, systemUiUnlocked } from '#actions-system'

const DOMAIN = 'appStart'

export const getAppStartErrorMessage = state => state[DOMAIN].errorMessage
export const getAppStartProgress = state => state[DOMAIN].progress
export const isAppLocked = state => state[DOMAIN].isLocked

const initialState = {
  progress: 0,
  errorMessage: null,
  isLocked: false
}

const actionHandlers = {
  [systemAppStartProceed] ({ state, payload }) {
    return { ...state, progress: payload }
  },
  [systemAppStartFailed] ({ state, payload }) {
    return { ...state, errorMessage: payload }
  },
  [systemUiLocked] ({ state }) {
    return { ...state, isLocked: true }
  },
  [systemUiUnlocked] ({ state }) {
    return { ...state, isLocked: false }
  }
}

export default { actionHandlers, initialState, DOMAIN }

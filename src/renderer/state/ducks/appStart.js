
import { systemAppStartProceed, systemAppStartFailed } from '#actions-system'

const DOMAIN = 'appStart'

export const getAppStartErrorMessage = state => state[DOMAIN].errorMessage
export const getAppStartProgress = state => state[DOMAIN].progress

const initialState = {
  progress: 0,
  errorMessage: null
}

const actionHandlers = {
  [systemAppStartProceed] ({ state, payload }) {
    return { ...state, progress: payload }
  },
  [systemAppStartFailed] ({ state, payload }) {
    return { ...state, errorMessage: payload }
  }
}

export default { actionHandlers, initialState, DOMAIN }

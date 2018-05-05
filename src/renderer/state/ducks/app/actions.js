
export const reportAppReady = () => ({
  statusCode: APP_STATUS_READY, errorMessage: null
})

export const reportAppError = ({ state, payload }) => ({
  ...state, errorMessage: payload
})

export const reportAppProgress = ({ state, payload }) => {
  return { ...state, progress: payload }
}

export const initAppClose = () => {
  return { statusCode: APP_STATUS_CLOSE, errorMessage: null }
}

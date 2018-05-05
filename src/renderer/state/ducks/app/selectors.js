import domain from './domain'

export const getAppStatusCode = state => state[domain].statusCode
export const getAppStatusErrorMessage = state => state[domain].errorMessage
export const getAppStatusProgress = state => state[domain].progress

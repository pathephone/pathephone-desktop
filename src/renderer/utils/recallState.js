
const createBucket = require('recall-bucket')
const objectConstructor = {}.constructor

const recallStateFactory = (getStateData, proxyMethods) => {
  const getStateDataWrapper = () => {
    const stateData = getStateData()
    if (!stateData || stateData.constructor !== objectConstructor) {
      throw new Error('~/state data must be an object.')
    }
    return stateData
  }
  const proxyIsObj = proxyMethods.constructor === objectConstructor
  const proxyIsFn = typeof proxyMethods === 'function'
  if (!proxyIsObj && !proxyIsFn) {
    throw new Error('Second argument must be an object or a function.')
  }
  const bucket = createBucket()
  const recallState = (...params) => {
    const firstParamType = typeof params[0]
    if (firstParamType === 'undefined') {
      return getStateDataWrapper()
    }
    if (firstParamType === 'function') {
      if (typeof state !== 'undefined') {
        params[0](getStateData(), true)
      }
      return bucket(params[0])
    }
    if (proxyIsObj) {
      throw new Error('You have passed a new value to a state with proxy methods defined. You should use them instead.')
    } else {
      proxyMethods(getStateDataWrapper(), ...params)
      bucket(getStateDataWrapper())
    }
  }
  if (proxyMethods && proxyMethods.constructor === objectConstructor) {
    Object.keys(proxyMethods)
      .forEach((methodName) => {
        recallState[methodName] = (...params) => {
          console.log(methodName)
          proxyMethods[methodName](getStateDataWrapper(), ...params)
          bucket(getStateDataWrapper())
        }
      })
  }
  return recallState
}

module.exports = recallStateFactory

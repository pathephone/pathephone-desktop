
export const reducerFactory = ({ initialState, actionHandlers }) =>
  (state = initialState, action) => {
    const { type, payload } = action
    const actionHandler = actionHandlers[type]
    if (actionHandler) {
      return actionHandler({ payload, state })
    }
    return state
  }

export const creatorFactory = (type) => {
  const creator = payload => ({ type, payload })
  creator.toString = () => type
  Object.freeze(creator)
  return creator
}

export const newDomainTypeFactory = (domain) => (type) => `@@${domain}/${type}`

const handleReduce = (state, field) => field ? state[field] : state
export const newDomainSelectorFactory =
  domain => pathString => {
    const path = pathString.split('.').filter(key => !!key)
    return (state) => path.reduce(handleReduce, state[domain])
  }


const reducerFactory = ({ initialState, actionHandlers }) =>
  (state = initialState, action) => {
    const { type, ...payload } = action
    const actionHandler = actionHandlers[type]
    if (actionHandler) {
      return actionHandler(state, payload)
    }
    return state
  }

export default reducerFactory


const reducerFactory = ({ initialState, actionHandlers }) =>
  (state = initialState, action) => {
    const actionHandler = actionHandlers[action.type]
    if (actionHandler) {
      return actionHandler(state, action.payload)
    }
    return state
  }

export default reducerFactory

import { systemNotificationRecieved, systemNotificationExpired } from '~actions/system'

import { uiNotificationToastRemoved } from '~actions/ui'

const DOMAIN = 'notifications'

const initialState = []

export const getNotifications = state => state[DOMAIN]

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case systemNotificationRecieved.toString():
      return [ ...state, payload ]
    case systemNotificationExpired.toString():
    case uiNotificationToastRemoved.toString():
      console.log(payload)
      return state.filter(n => n.id !== payload)
    default:
      return state
  }
}

export default reducer

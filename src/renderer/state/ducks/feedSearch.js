import { uiAlbumsSearchPerformed, uiAlbumsSearchCleared } from '#actions-ui'

const DOMAIN = 'feedSearch'

const initialState = ''

export const getFeedSearchValue = state => state[DOMAIN]

const actionHandlers = {
  [uiAlbumsSearchPerformed] ({ payload }) {
    return payload
  },
  [uiAlbumsSearchCleared] (state) {
    return initialState
  }
}

export default { actionHandlers, initialState, DOMAIN }

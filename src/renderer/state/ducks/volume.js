import { uiVolumeChanged } from '#actions-ui'

const DOMAIN = 'volume'

const initialState = 0.7

export const getVolume = state => state[DOMAIN]

const actionHandlers = {
  [uiVolumeChanged] ({ payload }) {
    return payload
  }
}

export default { initialState, actionHandlers, DOMAIN }

import { uiVolumeChanged } from '#actions-ui'

const DOMAIN = 'volume'

const initialState = 0.7

export const getVolume = state => state[DOMAIN]

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case uiVolumeChanged.toString():
      return payload
    default:
      return state
  }
}

export default reducer

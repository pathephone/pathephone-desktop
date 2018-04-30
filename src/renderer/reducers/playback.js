import { reducerFactory } from '~utils/reduxTools'
import { toggleRepeat, toggleShuffle } from '#actions'

const DOMAIN = 'playback'

const initialState = {
  shuffle: false,
  repeat: false
}

export const isShuffleTurnedOn = state => state[DOMAIN].shuffle
export const isRepeatTurnedOn = state => state[DOMAIN].repeat

const actionHandlers = {
  [toggleRepeat] ({ state }) {
    return { ...state, shuffle: !state.shuffle }
  },
  [toggleShuffle] ({ state }) {
    return { ...state, repeat: !state.repeat }
  }
}

const reducer = reducerFactory({ initialState, actionHandlers })

export default { [DOMAIN]: reducer }

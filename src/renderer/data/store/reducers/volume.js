
import { reducerFactory } from '../utils/reduxTools'
import { changeVolume } from '../actions'

const DOMAIN = 'volume'

const initialState = 0.7

export const getVolume = (state) => state[DOMAIN]

const actionHandlers = {
  [changeVolume] ({ nextValue }) {
    return nextValue
  }
}

const reducer = reducerFactory({ initialState, actionHandlers })

export default { [DOMAIN]: reducer }

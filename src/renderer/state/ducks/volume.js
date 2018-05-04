
import { reducerFactory, getBasicSelectors } from '~utils/reduxTools'
import { changeVolume } from '../methods/actions'

const DOMAIN = 'volume'

const initialState = 0.7

export const {
  getVolume
} = getBasicSelectors(DOMAIN)(initialState)

const actionHandlers = {
  [changeVolume] ({ nextValue }) {
    return nextValue
  }
}

const reducer = reducerFactory({ initialState, actionHandlers })

export default { [DOMAIN]: reducer }

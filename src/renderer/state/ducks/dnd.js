import { DND_STATUS_PENDING, DND_STATUS_ACTIVE, DND_STATUS_PROCESSING } from '~data/constants'
import { uiDndActivated, uiDndDataRecieved } from '#actions-ui'
import { systemDndDataHandled } from '#actions-system'

const DOMAIN = 'dnd'

const initialState = {
  status: DND_STATUS_PENDING
}

export const isDndPending = state => state[DOMAIN].status === DND_STATUS_PENDING
export const isDndActive = state => state[DOMAIN].status === DND_STATUS_ACTIVE
export const isDndProcessing = state => state[DOMAIN].status === DND_STATUS_PROCESSING

const actionHandlers = {
  [uiDndActivated] () {
    return { status: DND_STATUS_ACTIVE }
  },
  [uiDndDataRecieved] () {
    return { status: DND_STATUS_PROCESSING }
  },
  [systemDndDataHandled] () {
    return { state: DND_STATUS_PENDING }
  }
}

export default { actionHandlers, initialState, DOMAIN }

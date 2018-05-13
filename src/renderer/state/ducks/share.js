import { uiShareFilesSelected } from '#actions-ui'
import { systemShareFilesProcessed } from '#actions-system'

const DOMAIN = 'share'

const initialState = {
  files: null
}

export const getSharedFiles = state => state[DOMAIN].files

const actionHandlers = {
  [uiShareFilesSelected] (payload) {
    return { files: payload }
  },
  [systemShareFilesProcessed] () {
    return { files: null }
  }
}

export default { actionHandlers, initialState, DOMAIN }

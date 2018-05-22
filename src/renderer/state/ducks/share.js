import { uiShareFilesSelected } from '#actions-ui'
import { systemShareFilesProcessed } from '#actions-system'

const DOMAIN = 'share'

const initialState = {
  files: null
}

export const getSharedFiles = state => state[DOMAIN].files

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case uiShareFilesSelected.toString():
      return { files: payload }
    case systemShareFilesProcessed.toString():
      return { files: null }
    default:
      return state
  }
}

export default reducer

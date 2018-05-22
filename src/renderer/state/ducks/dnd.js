import { DND_STATUS_PENDING, DND_STATUS_FILES } from '~data/constants'
import { uiFilesDragStarted, uiFilesDragEnded } from '#actions-ui'

const DOMAIN = 'dnd'

const initialState = {
  status: DND_STATUS_PENDING,
  files: null
}

export const isNothingDragged = state => state[DOMAIN].status === DND_STATUS_PENDING
export const isFilesDragged = state => state[DOMAIN].status === DND_STATUS_FILES
export const getDropedFiles = state => state[DOMAIN].files
export const isDropedFilesProcessed = state => !!getDropedFiles(state)

const reducer = (state = initialState, action) => {
  const { type } = action
  switch (type) {
    case uiFilesDragStarted.toString():
      return { status: DND_STATUS_FILES }
    case uiFilesDragEnded.toString():
      return { state: DND_STATUS_PENDING }
    default:
      return state
  }
}

export default reducer

import { uiShareFilesSelected, uiShareFormSubmited, uiShareFormCanceled } from '#actions-ui'
import { systemShareCandidatesRecieved, systemShareCandidatesSaveSucceed, systemShareFormChanged } from '#actions-system'

const DOMAIN = 'share'

const initialState = {
  candidates: null,
  isProcessing: false
}

export const getShareCandidates = state => state[DOMAIN].candidates
export const isShareProcessing = state => state[DOMAIN].isProcessing

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case uiShareFilesSelected.toString():
      return { ...state, isProcessing: true }
    case systemShareCandidatesRecieved.toString():
      return { candidates: payload, isProcessing: false }
    case uiShareFormSubmited.toString():
      return { ...state, isProcessing: true }
    case systemShareCandidatesSaveSucceed.toString():
    case uiShareFormCanceled.toString():
      return { ...state, isProcessing: false, candidates: null }
    case systemShareFormChanged.toString():
      return { ...state, candidates: [ { ...payload } ] }
    default:
      return state
  }
}

export default reducer

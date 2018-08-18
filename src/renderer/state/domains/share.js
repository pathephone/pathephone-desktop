import actions from '#actions';

const DOMAIN = 'share';

const initialState = {
  candidates: [],
  isProcessing: false,
};

export const getShareCandidates = state => state[DOMAIN].candidates;
export const isShareProcessing = state => state[DOMAIN].isProcessing;

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.uiShareItemsSelected.toString():
      return { ...state, isProcessing: true };
    case actions.systemShareCandidatesRecieved.toString():
      return { candidates: payload, isProcessing: false };
    case actions.uiShareFormSubmited.toString():
      return { ...state, isProcessing: true };
    case actions.systemShareCandidateSaveSucceed.toString():
    case actions.uiShareFormCanceled.toString(): {
      const candidates = state.candidates
        .filter((candidate, index) => index !== 0);
      return { ...state, isProcessing: false, candidates };
    }
    case actions.systemShareCandidateSaveFailed.toString(): {
      return { ...state, isProcessing: false };
    }
    case actions.uiShareFormReseted.toString(): {
      const handleMap = (candidate, index) => {
        if (index === 0) {
          return {
            title: '',
            artist: '',
            cover: { image: '' },
            tracks: [],
          };
        }
        return candidate;
      };
      const candidates = state.candidates
        .map(handleMap);
      return { ...state, candidates };
    }
    case actions.systemShareFormChanged.toString(): {
      const candidates = state.candidates
        .map((candidate, index) => {
          if (index === 0) return payload;
          return candidate;
        });
      return { ...state, candidates };
    }
    case actions.systemShareCandidatesNotFound.toString():
    case actions.systemShareFilesProcessingFailed.toString(): {
      return {
        ...state,
        isProcessing: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;

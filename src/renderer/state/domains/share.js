import {
  uiShareItemsSelected, uiShareFormSubmited, uiShareFormCanceled, uiShareFormReseted,
} from '~actions/ui';
import {
  systemShareCandidatesRecieved,
  systemShareCandidateSaveSucceed,
  systemShareFormChanged,
  systemShareFilesProcessingFailed,
  systemShareCandidatesNotFound,
  systemShareCandidateSaveFailed,
} from '~actions/system';

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
    case uiShareItemsSelected.toString():
      return { ...state, isProcessing: true };
    case systemShareCandidatesRecieved.toString():
      return { candidates: payload, isProcessing: false };
    case uiShareFormSubmited.toString():
      return { ...state, isProcessing: true };
    case systemShareCandidateSaveSucceed.toString():
    case uiShareFormCanceled.toString(): {
      const candidates = state.candidates
        .filter((candidate, index) => index !== 0);
      return { ...state, isProcessing: false, candidates };
    }
    case systemShareCandidateSaveFailed.toString(): {
      return { ...state, isProcessing: false };
    }
    case uiShareFormReseted.toString(): {
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
    case systemShareFormChanged.toString(): {
      const candidates = state.candidates
        .map((candidate, index) => {
          if (index === 0) return payload;
          return candidate;
        });
      return { ...state, candidates };
    }
    case systemShareCandidatesNotFound.toString():
    case systemShareFilesProcessingFailed.toString(): {
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

import { AnyAction, Reducer } from 'redux';

import { actions } from '~renderer/state/actions';
import { IMetabinAlbum } from '~shared/types/domains/album';

export interface IShareState {
  candidates: IMetabinAlbum[];
  isProcessing: boolean;
}

const initialState: IShareState = {
  candidates: [],
  isProcessing: false
};

export const shareReducer: Reducer<IShareState> = (
  state: IShareState = initialState, action: AnyAction
): IShareState => {
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
      const candidates: IMetabinAlbum[] = state.candidates
        .filter((_: IMetabinAlbum, index: number) => index !== 0);

      return { ...state, isProcessing: false, candidates };
    }
    case actions.systemShareCandidateSaveFailed.toString(): {
      return { ...state, isProcessing: false };
    }
    case actions.uiShareFormReseted.toString(): {
      const handleMap: (c: IMetabinAlbum, i: number) => IMetabinAlbum = (
        candidate: IMetabinAlbum, index: number
      ): IMetabinAlbum => {
        if (index === 0) {
          return {
            title: '',
            artist: '',
            cover: { image: '' },
            tracks: []
          };
        }

        return candidate;
      };
      const candidates: IMetabinAlbum[] = state.candidates
        .map(handleMap);

      return { ...state, candidates };
    }
    case actions.systemShareFormChanged.toString(): {
      const candidates: IMetabinAlbum[] = state
        .candidates
        .map((candidate: IMetabinAlbum, index: number) => {
          if (index === 0) { return payload; }

          return candidate;
        });

      return { ...state, candidates };
    }
    case actions.systemShareCandidatesNotFound.toString():
    case actions.systemShareFilesProcessingFailed.toString(): {
      return {
        ...state,
        isProcessing: false
      };
    }
    default:
      return state;
  }
};

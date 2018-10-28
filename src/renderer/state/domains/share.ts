import { getType } from 'typesafe-actions';
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
    case getType(actions.uiShareItemsSelected):
      return { ...state, isProcessing: true };
    case getType(actions.systemShareCandidatesRecieved):
      return { candidates: payload, isProcessing: false };
    case getType(actions.uiShareFormSubmited):
      return { ...state, isProcessing: true };
    case getType(actions.systemShareCandidateSaveSucceed):
    case getType(actions.uiShareFormCanceled): {
      const candidates: IMetabinAlbum[] = state.candidates
        .filter((_: IMetabinAlbum, index: number) => index !== 0);

      return { ...state, isProcessing: false, candidates };
    }
    case getType(actions.systemShareCandidateSaveFailed): {
      return { ...state, isProcessing: false };
    }
    case getType(actions.uiShareFormReseted): {
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
    case getType(actions.systemShareFormChanged): {
      const candidates: IMetabinAlbum[] = state
        .candidates
        .map((candidate: IMetabinAlbum, index: number) => {
          if (index === 0) { return payload; }

          return candidate;
        });

      return { ...state, candidates };
    }
    case getType(actions.systemShareCandidatesNotFound):
    case getType(actions.systemShareFilesProcessingFailed): {
      return {
        ...state,
        isProcessing: false
      };
    }
    default:
      return state;
  }
};

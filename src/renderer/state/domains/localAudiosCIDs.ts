import { AnyAction, Reducer } from 'redux';
import { Selector } from 'reselect';

import { actions } from '~renderer/state/actions';
import { IRootState } from '~renderer/state/rootState';
import { IMetabinAlbumTrack } from '~shared/types/domains/album';

interface ILocalAudiosCids {
  [key: string]: boolean;
}

const DOMAIN: string = 'localAudiosCIDs';

const initialState: ILocalAudiosCids = {};

export const getLocalAudiosCIDs: Selector<IRootState, ILocalAudiosCids> = (
  state: IRootState
): ILocalAudiosCids => state[DOMAIN];

const handleReduceTracks: (a: ILocalAudiosCids , t: IMetabinAlbumTrack) => ILocalAudiosCids = (
  acc: ILocalAudiosCids, track: IMetabinAlbumTrack
): ILocalAudiosCids => {
  acc[track.audio] = false;

  return acc;
};

const localAudiosCidsReducer: Reducer<ILocalAudiosCids> = (
  state: ILocalAudiosCids = initialState, action: AnyAction
): ILocalAudiosCids => {
  const { type, payload } = action;
  switch (type) {
    case actions.systemIPFSFileCached.toString():
      if (state[payload] === false) {
        return { ...state, [payload]: true };
      }

      return state;
    case actions.systemPlayedTracksRecieved.toString():
      return payload.reduce(handleReduceTracks, {});
    case actions.systemQueuedTracksRecieved.toString(): {
      const newCids: ILocalAudiosCids = payload.reduce(handleReduceTracks, {});

      return {
        ...newCids,
        ...state
      };
    }
    case actions.uiPlaylistCleared.toString():
      return {};
    default:
      return state;
  }
};

export default localAudiosCidsReducer;

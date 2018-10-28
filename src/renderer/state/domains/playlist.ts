import { getType } from 'typesafe-actions';
import { AnyAction, Reducer } from 'redux';

import { actions } from '~renderer/state/actions';
import { playlistEvents } from '~renderer/ui/Playlist';
import * as playlistSetters from './playlist/setters'
import { initialPlaylistState } from '~renderer/state/domains/playlist/initial';
import { IPlaylistState } from '~renderer/state/domains/playlist/types';

export const playlistReducer: Reducer<IPlaylistState> = (
  (state: IPlaylistState = initialPlaylistState, action: AnyAction): IPlaylistState => {
    const { type, payload } = action;
    switch (type) {

      case getType(actions.systemPlayedTracksRecieved):
        return playlistSetters.replaceTracks(state, payload);

      case getType(actions.systemQueuedTracksRecieved):
        return playlistSetters.addTracks(state, payload);

      case getType(actions.uiNextTrackPlayed):
      case getType(actions.systemAudioEnded):
        return playlistSetters.playNextTrack(state);

      case getType(actions.uiPreviousTrackPlayed):
        return playlistSetters.playPreviousTrack(state);

      case getType(playlistEvents.uiPlaylistTrackRemoved):
        return playlistSetters.removeTrack(state, payload);

      case getType(playlistEvents.uiPlaylistTrackPlayed):
        return playlistSetters.playTrack(state, payload);

      case getType(actions.uiRepeatToggled):
        return playlistSetters.toggleRepeat(state);

      case getType(actions.uiShuffleToggled):
        return playlistSetters.toggleShuffle(state);

      case getType(playlistEvents.uiPlaylistCleared):
        return playlistSetters.clearPlaylist(state);

      default:
        return state;
    }
  }
);

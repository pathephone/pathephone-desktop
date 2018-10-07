import { AnyAction } from 'redux';
import { all, call, put } from 'redux-saga/effects';

import { mainProcessApi } from '~renderer/api/intex';
import actions from '~renderer/state/actions';
import { IMetabinAlbum, IMetabinAlbumTrack } from '~shared/types/domains/album';

function* handleMap(track: IMetabinAlbumTrack): Generator {
  if (track.artist === undefined && track.title === undefined) {
    const tracks: IMetabinAlbumTrack[] = yield call(mainProcessApi.getTracksFromFsFiles, [track.audio]);

    return tracks[0];
  }

  return track;
}

export function* handleShareFormChange({ payload }: AnyAction): Generator {
  yield put(actions.systemUiLocked());
  try {
    const tracks: IMetabinAlbumTrack[] = yield all(
      payload.tracks.map(handleMap)
    );
    const album: IMetabinAlbum = {
      ...payload,
      tracks
    };

    yield put(actions.systemShareFormChanged(album));
  } catch (e) {
    console.error(e);
  }
  yield put(actions.systemUiUnlocked());
}

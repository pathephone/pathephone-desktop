import { all, call, put } from 'redux-saga/effects';

import { systemShareFormChanged, systemUiLocked, systemUiUnlocked } from '~actions/system';

function* handleMap(api, track) {
  const { getTracksFromFsFiles } = api;
  if (track.artist === undefined && track.title === undefined) {
    const tracks = yield call(getTracksFromFsFiles, [track.audio]);
    return tracks[0];
  }
  return track;
}

function* handleShareFormChange(apis, { payload }) {
  yield put(systemUiLocked());
  try {
    const tracks = yield all(
      payload.tracks.map(track => handleMap(apis, track)),
    );
    const album = {
      ...payload,
      tracks,
    };

    yield put(systemShareFormChanged(album));
  } catch (e) {
    console.error(e);
  }
  yield put(systemUiUnlocked());
}

export default handleShareFormChange;

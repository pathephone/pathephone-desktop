import { all, call, put } from 'redux-saga/effects';

import actions from '#actions';
import printRenderer from '~shared/utils/printRenderer';

function* handleMap(api, track) {
  const { getTracksFromFsFiles } = api;
  if (track.artist === undefined && track.title === undefined) {
    const tracks = yield call(getTracksFromFsFiles, [track.audio]);
    return tracks[0];
  }
  return track;
}

function* handleShareFormChange(apis, { payload }) {
  yield put(actions.systemUiLocked());
  try {
    const tracks = yield all(
      payload.tracks.map(track => handleMap(apis, track)),
    );
    const album = {
      ...payload,
      tracks,
    };

    yield put(actions.systemShareFormChanged(album));
  } catch (e) {
    printRenderer.error(e);
  }
  yield put(actions.systemUiUnlocked());
}

export default handleShareFormChange;

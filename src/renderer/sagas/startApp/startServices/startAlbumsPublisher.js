import { call, takeEvery } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import { IS_OFFLINE } from '~shared/config';

import { ALBUMS_PUBLISH_INTERVAL, ALBUMS_APPEARENCE_INTERVAL } from '~shared/data/constants';

function getOutdatedAlbumsChannel(apis) {
  const { findOutdatedAlbumsInCollection } = apis;
  return eventChannel((emit) => {
    const handleTick = async () => {
      const period = new Date().getTime() - ALBUMS_APPEARENCE_INTERVAL;
      const albums = await findOutdatedAlbumsInCollection(period);
      emit(albums);
    };
    const interval = setInterval(handleTick, ALBUMS_PUBLISH_INTERVAL);
    return () => {
      clearInterval(interval);
    };
  });
}

function* publishAlbum({ publishAlbumsByCIDs }, albums) {
  yield call(publishAlbumsByCIDs, albums);
}

function* startAlbumsPublisher(apis) {
  if (!IS_OFFLINE) {
    const outdatedAlbumsChannel = yield call(getOutdatedAlbumsChannel, apis);
    yield takeEvery(outdatedAlbumsChannel, publishAlbum, apis);
  }
}

export default startAlbumsPublisher;

import { call } from 'redux-saga/effects';

const handleMap = ({ albumCoverCid }) => albumCoverCid;

const getAlbumsCoversCIDs = albums => albums.map(handleMap);

function* cacheDiscoverAlbumsCovers(api, { payload }) {
  const { cacheIpfsFilesByCids } = api;
  const uncachedCIDs = getAlbumsCoversCIDs(payload);
  try {
    yield call(cacheIpfsFilesByCids, uncachedCIDs);
  } catch (e) {
    console.error(e);
  }
}

export default cacheDiscoverAlbumsCovers;

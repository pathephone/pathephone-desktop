import { call } from 'redux-saga/effects'

const handleMap = ({ albumCoverCid }) => albumCoverCid

const getAlbumsCoversCIDs = (albums) => {
  return albums.map(handleMap)
}

function * cacheDiscoverAlbumsCovers (api, { payload }) {
  const { cacheIPFSFilesByCIDs } = api
  const uncachedCIDs = getAlbumsCoversCIDs(payload)
  try {
    yield call(cacheIPFSFilesByCIDs, uncachedCIDs)
  } catch (e) {
    console.error(e)
  }
}

export default cacheDiscoverAlbumsCovers

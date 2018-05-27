import { call, all, put } from 'redux-saga/effects'
import { systemShareCandidatesSaveSucceed } from '#actions-system'

function * handleShareCandidate (
  { shareFsFileToIpfs, shareObjectToIpfs, saveAlbumToCollection }, { payload }
) {
  try {
    const cover = yield call(shareFsFileToIpfs, payload.cover.path)
    const tracks = yield all(
      payload.tracks.map(
        async ({ file, ...rest }) => {
          const hash = await shareFsFileToIpfs(file.path)
          return {
            ...rest, hash
          }
        }
      )
    )
    const album = {
      ...payload,
      cover,
      tracks
    }
    const albumCid = yield call(shareObjectToIpfs, album)
    try {
      yield call(saveAlbumToCollection, { data: album, cid: albumCid })
    } catch (e) {
      if (e.status !== 409) {
        throw e
      }
    }
    yield put(systemShareCandidatesSaveSucceed())
  } catch (e) {
    console.error(e)
  }
}

export default handleShareCandidate

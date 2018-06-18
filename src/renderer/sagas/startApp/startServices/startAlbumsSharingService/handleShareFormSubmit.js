import { call, all, put } from 'redux-saga/effects'
import {
  systemShareCandidateSaveSucceed,
  systemShareCandidateSaveFailed
} from '~actions/system'
import {
  MESSAGE_SHARE_FORM_SUBMIT_SUCCEED, MESSAGE_SHARE_FORM_SUBMIT_FAILED
} from '~data/textMessages'

function * shareTracksToIpfs (apis, tracks) {
  const { shareFsFileToIpfs } = apis
  function * shareSingleTrack ({ file, ...rest }) {
    const hash = yield call(shareFsFileToIpfs, file)
    return {
      ...rest, hash
    }
  }
  const sharedTracks = yield all(
    tracks.map(shareSingleTrack)
  )
  return sharedTracks
}

function * handleShareFormSubmit (apis, { payload }) {
  const { shareFsFileToIpfs, shareObjectToIpfs, saveAlbumToCollection } = apis
  try {
    const [ cover, tracks ] = yield all([
      call(shareFsFileToIpfs, payload.cover),
      call(shareTracksToIpfs, apis, payload.tracks)
    ])
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
    yield put(
      systemShareCandidateSaveSucceed({
        successMessage: MESSAGE_SHARE_FORM_SUBMIT_SUCCEED
      })
    )
  } catch (e) {
    console.error(e)
    yield put(systemShareCandidateSaveFailed({
      errorMessage: MESSAGE_SHARE_FORM_SUBMIT_FAILED
    }))
  }
}

export default handleShareFormSubmit

import { call, all, put } from 'redux-saga/effects'
import {
  systemShareCandidateSaveSucceed,
  systemShareCandidateSaveFailed
} from '~actions/system'
import {
  MESSAGE_SHARE_FORM_SUBMIT_SUCCEED,
  MESSAGE_SHARE_ALBUM_ALREADY_EXISTS
} from '~data/textMessages'

function * shareTracksToIpfs (apis, tracks) {
  const { shareFsFileToIpfs } = apis
  function * shareSingleTrack ({ audio, ...rest }) {
    const audioCid = yield call(shareFsFileToIpfs, audio)
    return {
      ...rest, audio: audioCid
    }
  }
  const sharedTracks = yield all(
    tracks.map(shareSingleTrack)
  )
  return sharedTracks
}

function * handleShareFormSubmit (apis, { payload }) {
  const { shareFsFileToIpfs, shareObjectToIpfs, saveAlbumIfNotExists } = apis
  try {
    const [ coverImage, tracks ] = yield all([
      call(shareFsFileToIpfs, payload.cover.image),
      call(shareTracksToIpfs, apis, payload.tracks)
    ])
    const album = {
      ...payload,
      cover: { image: coverImage },
      tracks
    }
    const albumCid = yield call(shareObjectToIpfs, album)
    yield call(saveAlbumIfNotExists, { data: album, cid: albumCid })
    yield put(
      systemShareCandidateSaveSucceed({
        successMessage: MESSAGE_SHARE_FORM_SUBMIT_SUCCEED
      })
    )
  } catch (e) {
    console.error(e)
    if (e.name === 'ConstraintError') {
      yield put(systemShareCandidateSaveFailed({
        warningMessage: MESSAGE_SHARE_ALBUM_ALREADY_EXISTS
      }))
    } else {
      yield put(systemShareCandidateSaveFailed({
        errorMessage: e.message
      }))
    }
  }
}

export default handleShareFormSubmit

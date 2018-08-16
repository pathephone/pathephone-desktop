import { call, all, put } from 'redux-saga/effects';
import {
  systemShareCandidateSaveSucceed,
  systemShareCandidateSaveFailed,
} from '~actions/system';
import {
  i18n,
} from '~data';

function* shareTracksToIpfs(apis, tracks) {
  const { shareFsFileToIpfs } = apis;
  function* shareSingleTrack({ audio, ...rest }) {
    const audioCid = yield call(shareFsFileToIpfs, audio);
    return {
      ...rest, audio: audioCid,
    };
  }
  const sharedTracks = yield all(
    tracks.map(shareSingleTrack),
  );
  return sharedTracks;
}

function* handleShareFormSubmit(apis, { payload }) {
  const { shareFsFileToIpfs, shareObjectToIpfs, saveAlbumIfNotExists } = apis;
  try {
    const [coverImage, tracks] = yield all([
      call(shareFsFileToIpfs, payload.cover.image),
      call(shareTracksToIpfs, apis, payload.tracks),
    ]);
    const album = {
      ...payload,
      cover: { image: coverImage },
      tracks,
    };
    const albumCid = yield call(shareObjectToIpfs, album);
    const collectionStat = yield call(saveAlbumIfNotExists, { data: album, cid: albumCid });
    yield put(
      systemShareCandidateSaveSucceed({
        successMessage: i18n.SHARE_FORM_SUBMIT_SUCCEED,
        ...collectionStat,
      }),
    );
  } catch (e) {
    console.error(e);
    if (e.message === 'Key already exists in the object store.') {
      yield put(systemShareCandidateSaveFailed({
        warningMessage: i18n.SHARE_ALBUM_ALREADY_EXISTS,
      }));
    } else {
      yield put(systemShareCandidateSaveFailed({
        errorMessage: e.message,
      }));
    }
  }
}

export default handleShareFormSubmit;

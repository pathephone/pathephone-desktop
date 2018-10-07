import actions from '#actions';
import { AnyAction } from 'redux';
import { all, call, put } from 'redux-saga/effects';
import { albumsCollectionApi, customIpfsApi } from '~renderer/api/intex';
import { ICollectionStat } from '~renderer/types/api';
import i18n from '~shared/data/i18n';
import { IMetabinAlbum, IMetabinAlbumTrack } from '~shared/types/domains/album';

function* shareTracksToIpfs(tracks: IMetabinAlbumTrack[]): Generator {
  function* shareSingleTrack({ audio, ...rest }: IMetabinAlbumTrack): Generator {
    const audioCid: string = yield call(customIpfsApi.shareFsFileToIpfs, audio);

    return {
      ...rest, audio: audioCid
    };
  }

  return yield all(
    tracks.map(shareSingleTrack)
  );
}

export function* handleShareFormSubmit({ payload }: AnyAction): Generator {
  try {
    const [coverImage, tracks] = yield all([
      call(customIpfsApi.shareFsFileToIpfs, payload.cover.image),
      call(shareTracksToIpfs, payload.tracks)
    ]);
    const album: IMetabinAlbum = {
      ...payload,
      cover: { image: coverImage },
      tracks
    };
    const albumCid: string = yield call(customIpfsApi.shareObjectToIpfs, album);
    const collectionStat: ICollectionStat = yield call(
      albumsCollectionApi.saveAlbumIfNotExists, { data: album, cid: albumCid });
    yield put(
      actions.systemShareCandidateSaveSucceed({
        successMessage: i18n.SHARE_FORM_SUBMIT_SUCCEED,
        ...collectionStat
      })
    );
  } catch (e) {
    console.error(e);
    if (e.message === 'Key already exists in the object store.') {
      yield put(actions.systemShareCandidateSaveFailed({
        warningMessage: i18n.SHARE_ALBUM_ALREADY_EXISTS
      }));
    } else {
      yield put(actions.systemShareCandidateSaveFailed({
        errorMessage: e.message
      }));
    }
  }
}

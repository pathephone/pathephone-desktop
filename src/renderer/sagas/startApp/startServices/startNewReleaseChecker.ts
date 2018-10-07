import { Channel } from 'redux-saga';
import {
  call, put, select, takeEvery
} from 'redux-saga/effects';
import semver, { SemVer } from 'semver';

import { getLatestRelease } from '~renderer/api/githubApi';
import actions from '~renderer/state/actions';
import selectors from '~renderer/state/selectors';
import { IGithubRelease } from '~renderer/types/api';
import { IS_PRODUCTION } from '~shared/config';
import { CHECK_FOR_UPDATE_INTERVAL } from '~shared/data/constants';
import i18n from '~shared/data/i18n';
import getMyAppVersion from '~shared/utils/getMyAppVersion';
import reduxSagaTicker from '~shared/utils/reduxSagaTicker';

function* checkForNewRelease(): Generator {
  try {
    const release: IGithubRelease = yield call(getLatestRelease);
    if (release.prerelease) { return; }
    const releaseSemVer: SemVer | null = semver.coerce(release.tag_name);
    if (!releaseSemVer) { return; }
    let isGreater: boolean = false;
    const previousNewRelease: IGithubRelease = yield select(selectors.getNewRelease);
    if (!previousNewRelease) {
      const appSemVer: SemVer | null = semver.coerce(getMyAppVersion());
      if (appSemVer) {
        isGreater = semver.gt(releaseSemVer, appSemVer);
      }
    } else {
      const previousNewReleaseSemVer: SemVer | null = semver.coerce(previousNewRelease.tag_name);
      if (previousNewReleaseSemVer) {
        isGreater = semver.gt(releaseSemVer, previousNewReleaseSemVer);
      }
    }
    if (isGreater) {
      yield put(
        actions.systemNewRelaseDetected({
          release,
          successMessage: i18n.NEW_RELEASE_NOTIFICATION
        })
      );
    }
  } catch (e) {
    console.error(e);
  }
}

export function* startNewReleaseChecker(): Generator {
  if (IS_PRODUCTION) {
    yield checkForNewRelease();
    const ticker: Channel<boolean> = yield call(reduxSagaTicker, CHECK_FOR_UPDATE_INTERVAL);
    yield takeEvery(ticker, checkForNewRelease);
  }
}

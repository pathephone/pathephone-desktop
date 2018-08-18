import {
  call, takeEvery, put, select,
} from 'redux-saga/effects';
import semver from 'semver';

import reduxSagaTicker from '~shared/utils/reduxSagaTicker';
import getLatestRelease from '~shared/utils/getLatestRelease';
import getMyAppVersion from '~shared/utils/getMyAppVersion';

import actions from '#actions';
import { CHECK_FOR_UPDATE_INTERVAL } from '~shared/data/constants';
import i18n from '~shared/data/i18n';

import { getNewRelease } from '#selectors';
import { IS_PRODUCTION } from '~shared/config';

function* checkForNewRelease() {
  try {
    const release = yield call(getLatestRelease);
    if (release.prerelease) return;
    const releaseSemVer = semver.coerce(release.tag_name);
    let isGreater;
    const previousNewRelease = yield select(getNewRelease);
    if (!previousNewRelease) {
      const appSemVer = semver.coerce(getMyAppVersion());
      isGreater = semver.gt(releaseSemVer, appSemVer);
    } else {
      const previousNewReleaseSemVer = semver.coerce(previousNewRelease.tag_name);
      isGreater = semver.gt(releaseSemVer, previousNewReleaseSemVer);
    }
    if (isGreater) {
      yield put(
        actions.systemNewRelaseDetected({
          release,
          successMessage: i18n.NEW_RELEASE_NOTIFICATION,
        }),
      );
    }
  } catch (e) {
    console.error(e);
  }
}

function* startNewReleaseChecker(apis) {
  if (IS_PRODUCTION) {
    yield checkForNewRelease();
    const ticker = yield call(reduxSagaTicker, CHECK_FOR_UPDATE_INTERVAL);
    yield takeEvery(ticker, checkForNewRelease, apis);
  }
}

export default startNewReleaseChecker;

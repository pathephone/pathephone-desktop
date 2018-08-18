
import { select, put } from 'redux-saga/effects';

import { IS_TESTING } from '~shared/config';
import i18n from '~shared/data/i18n';

import actions from '#actions';
import selectors from '#selectors';

/* eslint-disable global-require, no-alert */

function* checkLegalAgreement() {
  const isGranted = yield select(selectors.isLegalAgreementGranted);
  if (!IS_TESTING && !isGranted) {
    if (window.confirm(i18n.LEGAL_NOTICE)) {
      yield put(actions.uiLegalAgreementGranted());
    } else {
      require('electron').remote.app.quit();
    }
  }
}

export default checkLegalAgreement;

import { select, put } from 'redux-saga/effects';

import { IS_TESTING } from '#config';
import { isLegalAgreementGranted } from '#selectors';

import { LOCAL_LEGAL_NOTICE } from '~data/i18nConstants';
import { uiLegalAgreementGranted } from '~actions/ui';

function* checkLegalAgreement() {
  const isGranted = yield select(isLegalAgreementGranted);
  if (!IS_TESTING && !isGranted) {
    if (confirm(LOCAL_LEGAL_NOTICE)) {
      yield put(uiLegalAgreementGranted());
    } else {
      require('electron').remote.app.quit();
    }
  }
}

export default checkLegalAgreement;


import { put, select } from 'redux-saga/effects';

import actions from '~renderer/state/actions';
import selectors from '~renderer/state/selectors';
import { IS_TESTING } from '~shared/config';
import i18n from '~shared/data/i18n';

export function* checkLegalAgreement(): Generator {
  const isGranted: boolean = yield select(selectors.isLegalAgreementGranted);
  if (!IS_TESTING && !isGranted) {
    if (window.confirm(i18n.LEGAL_NOTICE)) {
      yield put(actions.uiLegalAgreementGranted());
    } else {
      // tslint:disable no-require-imports
      require('electron').remote.app.quit();
    }
  }
}

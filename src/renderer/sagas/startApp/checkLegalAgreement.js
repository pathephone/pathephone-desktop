import { select, put } from 'redux-saga/effects'

import { IS_TESTING } from '#config'
import { isLegalAgreementGranted } from '#selectors'

import { LEGAL_NOTICE } from '~data/textMessages'
import { uiLegalAgreementGranted } from '~actions/ui'

function * checkLegalAgreement () {
  const isGranted = yield select(isLegalAgreementGranted)
  if (!IS_TESTING && !isGranted) {
    if (confirm(LEGAL_NOTICE)) {
      yield put(uiLegalAgreementGranted())
    } else {
      require('electron').remote.app.quit()
    }
  }
}

export default checkLegalAgreement

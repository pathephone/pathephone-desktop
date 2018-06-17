/* eslint-env mocha */

import {
  E2E_SHARE_DROP_ZONE_ID,
  E2E_SHARE_FORM_ID
} from '~data/e2eConstants'

import {
  flacTrack
} from '~data/assets'

describe('select audio file', () => {
  it('edit form appears', async function () {
    const { app } = this
    await app.client.chooseFile(E2E_SHARE_DROP_ZONE_ID, flacTrack.audio)
    await app.client.waitForExist(E2E_SHARE_FORM_ID)
  })

  // VALIDATE FORM

  require('./selectAudioAndSave/validateForm')

  // CLICK SAVE FIRST TIME

  require('./selectAudioAndSave/clickSaveFirstTime')

  // ADD COVER

  require('./selectAudioAndSave/selectCoverFile')
})

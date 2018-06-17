/* eslint-env mocha */
import { expect } from 'chai'

import {
  E2E_SHARE_FORM_SAVE_BUTTON_ID,
  E2E_SHARE_FORM_COVER_INPUT_ID
} from '~data/e2eConstants'

describe('click save first time', () => {
  it('throws no error', async function () {
    const { app } = this
    await app.client.click(E2E_SHARE_FORM_SAVE_BUTTON_ID)
  })
  it('cover input has focus', async function () {
    const { app } = this
    const isInFocus = await app.client.hasFocus(E2E_SHARE_FORM_COVER_INPUT_ID)
    expect(isInFocus).equal(true)
  })
})

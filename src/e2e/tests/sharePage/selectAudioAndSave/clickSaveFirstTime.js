import {
  E2E_SHARE_FORM_SAVE_BUTTON_ID
} from '~data/e2eConstants'

describe('click save first time', () => {
  it('throws no error', async function () {
    const { app } = this
    await app.client.click(E2E_SHARE_FORM_SAVE_BUTTON_ID)
  })
})

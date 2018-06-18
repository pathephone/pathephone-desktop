import {
  E2E_SHARE_FORM_COVER_INPUT_ID, E2E_SHARE_FORM_COVER_PREVIEW_ID
} from '~data/e2eConstants'

import { trash } from '~data/assets'

trash.forEach(filePath => {
  describe('select wrong file as cover', function () {
    it('no preview image appears', async function () {
      const { app } = this
      await app.client.chooseFile(E2E_SHARE_FORM_COVER_INPUT_ID, filePath)
      const isPreviewExists = await app.client.isExisting(`${E2E_SHARE_FORM_COVER_PREVIEW_ID} > img`)
      expect(isPreviewExists).equal(false)
    })
  })
})

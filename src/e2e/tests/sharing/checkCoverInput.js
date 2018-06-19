import {
  shareDropZoneSelect,
  coverPreviewHasIamge,
  cancelShareForm,
  shareDropZoneExists
} from '~reusable/sharePage'

import {
  E2E_SHARE_FORM_COVER_INPUT_ID
} from '~data/e2eConstants'

import { txtFile } from '~data/assets/files'
import album1 from '~data/assets/album2'

const testTrack = album1.tracks[0]

describe('check cover input', () => {
  before(async function () {
    await shareDropZoneSelect.call(this, testTrack.file)
  })

  describe('select NOT an image', () => {
    it('throws no error', async function () {
      const { app } = this
      return app.client.chooseFile(E2E_SHARE_FORM_COVER_INPUT_ID, txtFile)
    })
    it('cover preview remains empty', async function () {
      const hasImage = await coverPreviewHasIamge.call(this)
      expect(hasImage).equal(false)
    })
    it('cover input DOES marked as invalid', function () {
      return expect(
        this.app.client
          .isExisting(`${E2E_SHARE_FORM_COVER_INPUT_ID}:invalid`)
      ).to.eventually.equal(true)
    })
  })

  describe('select an image', () => {
    it('throws no error', async function () {
      const { app } = this
      return app.client.chooseFile(E2E_SHARE_FORM_COVER_INPUT_ID, album1.cover)
    })
    it('cover preview contains image', async function () {
      const hasImage = await coverPreviewHasIamge.call(this)
      expect(hasImage).equal(true)
    })
    it('cover input DOES NOT marked as invalid', function () {
      return expect(
        this.app.client
          .isExisting(`${E2E_SHARE_FORM_COVER_INPUT_ID}:invalid`)
      ).to.eventually.equal(false)
    })
  })

  after(async function () {
    await cancelShareForm.call(this)
    await shareDropZoneExists.call(this)
  })
})

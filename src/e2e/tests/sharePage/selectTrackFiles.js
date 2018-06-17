/* eslint-env mocha */
import { cancelShareForm, shareDropZoneExists, selectFile, shareFormExists } from '~reusable/sharePage'

import { tracks } from '~data/assets'

describe('select track files', () => {
  tracks.forEach((track, index) => {
    describe(`track #${index}`, () => {
      it('throws no error', function () {
        return selectFile.call(this, track.file)
      })
      it('share form appears', function () {
        return shareFormExists.call(this)
      })
      after(async function () {
        await cancelShareForm.call(this)
        await shareDropZoneExists.call(this)
      })
    })
  })
})
/* eslint-env mocha */
import { cancelShareForm, shareDropZoneExists, selectFile } from '~reusable/sharePage'

import { tracks } from '~data/assets'
import validateFieldByTrack from '~reusable/sharePage/validateFieldsByTrack'

describe('validate fileds by tracks', () => {
  tracks.forEach((track, index) => {
    describe(`track #${index}`, () => {
      before(function () {
        return selectFile.call(this, track.file)
      })

      describe('validate form fields', function () {
        return validateFieldByTrack(track)
      })

      after(async function () {
        await cancelShareForm.call(this)
        await shareDropZoneExists.call(this)
      })
    })
  })
})

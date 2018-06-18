import validateFieldsByTrack from '~reusable/sharePage/validateFieldsByTrack'
import {
  cancelShareForm,
  shareDropZoneExists,
  selectFile
} from '~reusable/sharePage'

import { tracks } from '~data/assets'

describe('check form values', () => {
  tracks.forEach((track, index) => {
    describe(`track #${index}`, () => {
      before(function () {
        return selectFile.call(this, track.file)
      })

      describe('validate form fields', function () {
        return validateFieldsByTrack(track)
      })

      after(async function () {
        await cancelShareForm.call(this)
        await shareDropZoneExists.call(this)
      })
    })
  })
})

import validateFieldsByTrack from '~reusable/sharePage/validateFieldsByTrack'
import {
  cancelShareForm,
  shareDropZoneExists,
  shareDropZoneSelect
} from '~reusable/sharePage'

import { tracks } from '~data/assets'

describe('check form values', () => {
  tracks.forEach((track, index) => {
    describe(`track #${index}`, () => {
      before(function () {
        return shareDropZoneSelect.call(this, track.file)
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

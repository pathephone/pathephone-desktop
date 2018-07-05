import {
  shareCancelForm,
  shareWaitForDropZoneExists,
  shareDropZoneSelect,
  shareWaitForFormExists
} from '~reusable/sharePage'

import { tracks } from '~data/assets'

describe('select track files', () => {
  tracks.forEach((track, index) => {
    describe(`track #${index}`, () => {
      it('throws no error', function () {
        return shareDropZoneSelect.call(this, track.file)
      })
      it('share form appears', function () {
        return shareWaitForFormExists.call(this)
      })
      after(async function () {
        await shareCancelForm.call(this)
        await shareWaitForDropZoneExists.call(this)
      })
    })
  })
})

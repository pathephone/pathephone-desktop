/* eslint-env mocha */
import { expect } from 'chai'

import { cancelShareForm, shareDropZoneExists, selectFile } from '~reusable/sharePage'

import { tracks } from '~data/assets'
import validateFieldByTrack from '~reusable/sharePage/validateFieldsByTrack'
import { shareFormAddTrack, getShareFormTracksLength } from '~reusable/sharePage/shareForm'

describe('select track and validate field', () => {
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

describe('add tracks', () => {
  before(function () {
    return selectFile.call(this, tracks[0].file)
  })

  tracks.forEach((track, index) => {
    describe(`add track #${index}`, () => {
      it('throws no error', function () {
        return shareFormAddTrack.call(this, track.file)
      })
      it(`tracks length should be ${index + 2}`, async function () {
        const tracksCount = await getShareFormTracksLength.call(this)
        expect(tracksCount).equal(index + 2)
      })
    })
  })

  after(async function () {
    await cancelShareForm.call(this)
    await shareDropZoneExists.call(this)
  })
})

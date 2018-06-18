/* eslint-env mocha */

import {
  E2E_SHARE_FORM_TRACKLIST_ID,
  E2E_SHARE_FORM_COVER_LABEL_ID,
  E2E_SHARE_FORM_ARTIST_INPUT_ID,
  E2E_SHARE_FORM_TITLE_INPUT_ID
} from '~data/e2eConstants'

function validateFormByTrack (track) {
  it('has no album cover preview', async function () {
    const { app } = this
    const tracklist = await app.client.$$(`${E2E_SHARE_FORM_COVER_LABEL_ID} img`)
    expect(tracklist.length).equal(0)
  })
  it('album artist value matches', async function () {
    const { app } = this
    const value = await app.client
      .$(E2E_SHARE_FORM_ARTIST_INPUT_ID)
      .getValue()
    expect(value).equal(track.artist)
  })
  it('album title value matches', async function () {
    const { app } = this
    const value = await app.client
      .$(E2E_SHARE_FORM_TITLE_INPUT_ID)
      .getValue()
    expect(value).equal(track.album)
  })
  it('tracklist has 1 item length', async function () {
    const { app } = this
    const tracklist = await app.client.$$(`${E2E_SHARE_FORM_TRACKLIST_ID} > *`)
    expect(tracklist.length).equal(1)
  })
  describe('validate track fields', function () {
    it('title value matches', async function () {
      const { app } = this
      const titleValue = await app.client
        .getValue(`${E2E_SHARE_FORM_TRACKLIST_ID} > *:last-child input[name="tracks.0.title"]`)
      expect(titleValue).equal(track.title)
    })
    it('artist value matches', async function () {
      const { app } = this
      const artistValue = await app.client
        .getValue(`${E2E_SHARE_FORM_TRACKLIST_ID} > *:last-child input[name="tracks.0.artist"]`)
      expect(artistValue).equal(track.artist)
    })
  })
}

export default validateFormByTrack

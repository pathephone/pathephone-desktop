/* eslint-env mocha */
import { expect } from 'chai'

import {
  E2E_SHARE_FORM_TRACKLIST_ID,
  E2E_SHARE_FORM_COVER_PREVIEW_ID,
  E2E_SHARE_FORM_ARTIST_INPUT_ID,
  E2E_SHARE_FORM_TITLE_INPUT_ID
} from '~data/e2eConstants'

import {
  flacTrack
} from '~data/assets'

describe('validate form', function () {
  it('tracklist has 1 item length', async function () {
    const { app } = this
    const tracklist = await app.client.$$(`${E2E_SHARE_FORM_TRACKLIST_ID} > *`)
    expect(tracklist.length).equal(1)
  })
  it('has no cover preview', async function () {
    const { app } = this
    const tracklist = await app.client.$$(`${E2E_SHARE_FORM_COVER_PREVIEW_ID} img`)
    expect(tracklist.length).equal(0)
  })
  it('has artist field filled', async function () {
    const { app } = this
    const value = await app.client
      .$(E2E_SHARE_FORM_ARTIST_INPUT_ID)
      .getValue()
    expect(value).equal(flacTrack.meta.artistName)
  })
  it('has title field filled', async function () {
    const { app } = this
    const value = await app.client
      .$(E2E_SHARE_FORM_TITLE_INPUT_ID)
      .getValue()
    expect(value).equal(flacTrack.meta.albumTitle)
  })
})

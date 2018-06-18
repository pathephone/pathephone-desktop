/* eslint-env mocha */

import {
  E2E_SHARE_FORM_ADD_TRACK_INPUT_ID,
  E2E_SHARE_FORM_TRACKLIST_ID,
  E2E_SHARE_FORM_MOVE_TRACK_UP,
  E2E_SHARE_FORM_MOVE_TRACK_DOWN,
  E2E_SHARE_FORM_REMOVE_TRACK,
  E2E_SHARE_FORM_SAVE_BUTTON_ID,
  E2E_SHARE_FORM_RESET_BUTTON_ID,
  E2E_SHARE_FORM_COVER_LABEL_ID,
  E2E_SHARE_FORM_COVER_INPUT_ID
} from '~data/e2eConstants'

export function shareFormAddTrack (file) {
  const { app } = this
  return app.client.chooseFile(E2E_SHARE_FORM_ADD_TRACK_INPUT_ID, file)
}

export function shareFormReset () {
  const { app } = this
  return app.client.click(E2E_SHARE_FORM_RESET_BUTTON_ID)
}

export function shareFormSubmit () {
  const { app } = this
  return app.client.click(E2E_SHARE_FORM_SAVE_BUTTON_ID)
}

export function coverPreviewHasIamge () {
  const { app } = this
  return app.client.isExisting(`${E2E_SHARE_FORM_COVER_LABEL_ID} img`)
}

export function shareFormSelectCover (file) {
  return this.app.client.chooseFile(E2E_SHARE_FORM_COVER_INPUT_ID, file)
}

export async function getShareFormTracksLength () {
  const { app } = this
  const elements = await app.client.$$(`${E2E_SHARE_FORM_TRACKLIST_ID} > *`)
  return elements.length
}

export async function removeTrack (index) {
  return this.app.client.click(
    `${
      E2E_SHARE_FORM_TRACKLIST_ID
    } > *:nth-child(${index}) button[data-e2e="${
      E2E_SHARE_FORM_REMOVE_TRACK
    }"]:not(:disabled)`
  )
}

export async function moveTrackUp (index) {
  return this.app.client.click(
    `${
      E2E_SHARE_FORM_TRACKLIST_ID
    } > *:nth-child(${index}) button[data-e2e="${
      E2E_SHARE_FORM_MOVE_TRACK_UP
    }"]:not(:disabled)`
  )
}

export function moveTrackDown (index) {
  return this.app.client.click(
    `${
      E2E_SHARE_FORM_TRACKLIST_ID
    } > *:nth-child(${index}) button[data-e2e="${
      E2E_SHARE_FORM_MOVE_TRACK_DOWN
    }"]:not(:disabled)`
  )
}

export async function validateTrackArtistField (index, track) {
  const { app } = this
  const artistValue = await app.client
    .getValue(`${E2E_SHARE_FORM_TRACKLIST_ID} > *:nth-child(${index}) input[name="tracks.${index - 1}.artist"]`)
  expect(artistValue).equal(track.artist)
}

export async function validateTrackTitleField (index, track) {
  const { app } = this
  const titleValue = await app.client
    .getValue(`${E2E_SHARE_FORM_TRACKLIST_ID} > *:nth-child(${index}) input[name="tracks.${index - 1}.title"]`)
  expect(titleValue).equal(track.title)
}

export function validateTrackFields (index, track) {
  return Promise.all([
    validateTrackArtistField.call(this, index, track),
    validateTrackTitleField.call(this, index, track)
  ])
}

/* eslint-env mocha */

import { ids } from '~data';

export function shareCancelForm() {
  const { app } = this;
  return app.client.click(ids.SHARE_FORM_CANCEL_BUTTON_ID);
}

export function shareWaitForFormExists() {
  return this.app.client.waitForExist(ids.SHARE_FORM_ID);
}

export function shareFormAddTrack(file) {
  const { app } = this;
  return app.client.chooseFile(ids.SHARE_FORM_ADD_TRACK_INPUT_ID, file);
}

export function shareFormReset() {
  const { app } = this;
  return app.client.click(ids.SHARE_FORM_RESET_BUTTON_ID);
}

export function shareFormSubmit() {
  const { app } = this;
  return app.client.click(ids.SHARE_FORM_SAVE_BUTTON_ID);
}

export function coverPreviewHasIamge() {
  const { app } = this;
  return app.client.isExisting(`${ids.SHARE_FORM_COVER_LABEL_ID} img`);
}

export function shareFormSelectCover(file) {
  return this.app.client.chooseFile(ids.SHARE_FORM_COVER_INPUT_ID, file);
}

export async function getShareFormTracksLength() {
  const { app } = this;
  const elements = await app.client.$$(`${ids.SHARE_FORM_TRACKLIST_ID} > *`);
  return elements.length;
}

export async function removeTrack(index) {
  return this.app.client.click(
    `${
      ids.SHARE_FORM_TRACKLIST_ID
    } > *:nth-child(${index}) button[data-e2e="${
      ids.SHARE_FORM_REMOVE_TRACK
    }"]:not(:disabled)`,
  );
}

export async function moveTrackUp(index) {
  return this.app.client.click(
    `${
      ids.SHARE_FORM_TRACKLIST_ID
    } > *:nth-child(${index}) button[data-e2e="${
      ids.SHARE_FORM_MOVE_TRACK_UP
    }"]:not(:disabled)`,
  );
}

export function moveTrackDown(index) {
  return this.app.client.click(
    `${
      ids.SHARE_FORM_TRACKLIST_ID
    } > *:nth-child(${index}) button[data-e2e="${
      ids.SHARE_FORM_MOVE_TRACK_DOWN
    }"]:not(:disabled)`,
  );
}

export async function validateTrackArtistField(index, value) {
  const { app } = this;
  const artistValue = await app.client
    .getValue(`${ids.SHARE_FORM_TRACKLIST_ID} > *:nth-child(${index}) input[name="tracks.${index - 1}.artist"]`);
  expect(artistValue).equal(value);
}

export async function validateTrackTitleField(index, value) {
  const { app } = this;
  const titleValue = await app.client
    .getValue(`${ids.SHARE_FORM_TRACKLIST_ID} > *:nth-child(${index}) input[name="tracks.${index - 1}.title"]`);
  expect(titleValue).equal(value);
}

export function validateTrackFields(index, track) {
  return Promise.all([
    validateTrackArtistField.call(this, index, track.artist),
    validateTrackTitleField.call(this, index, track.title),
  ]);
}

export async function shareFormTracklistLengthEquals(expectedLength) {
  const tracklist = await this.app.client.$$(`${ids.SHARE_FORM_TRACKLIST_ID} > *`);
  expect(tracklist.length).equal(expectedLength);
}

export function shareFormSetAlbumTitle(title) {
  return this.app.client.setValue(ids.SHARE_FORM_TITLE_INPUT_ID, title);
}

export function shareFormSetAlbumArtist(title) {
  return this.app.client.setValue(ids.SHARE_FORM_ARTIST_INPUT_ID, title);
}

import {
  E2E_SHARE_FORM_ADD_TRACK_INPUT_ID,
  E2E_SHARE_FORM_TRACKLIST_ID
} from '~data/e2eConstants'

export function shareFormAddTrack (file) {
  const { app } = this
  return app.client.chooseFile(E2E_SHARE_FORM_ADD_TRACK_INPUT_ID, file)
}

export async function getShareFormTracksLength () {
  const { app } = this
  const elements = await app.client.$$(`${E2E_SHARE_FORM_TRACKLIST_ID} > *`)
  return elements.length
}

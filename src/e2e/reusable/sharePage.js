import {
  E2E_SHARE_PAGE_ID,
  E2E_NAV_SHARE_LINK_ID,
  E2E_SHARE_FORM_CANCEL_BUTTON_ID,
  E2E_SHARE_DROP_ZONE_ID,
  E2E_SHARE_FORM_ID
} from '~data/e2eConstants'

export async function openSharePage () {
  const { app } = this
  await app.client.waitForExist(E2E_NAV_SHARE_LINK_ID)
  await app.client.click(E2E_NAV_SHARE_LINK_ID)
  return app.client.waitForExist(E2E_SHARE_PAGE_ID)
}

export function cancelShareForm () {
  const { app } = this
  return app.client.click(E2E_SHARE_FORM_CANCEL_BUTTON_ID)
}

export function shareDropZoneExists () {
  const { app } = this
  return app.client.waitForExist(E2E_SHARE_DROP_ZONE_ID)
}

export function shareFormExists () {
  const { app } = this
  return app.client.waitForExist(E2E_SHARE_FORM_ID)
}

export function selectFile (filePath) {
  const { app } = this
  return app.client.chooseFile(E2E_SHARE_DROP_ZONE_ID, filePath)
}

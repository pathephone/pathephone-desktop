import {
  E2E_SHARE_DROP_ZONE_ID
} from '~data/e2eConstants'

export function shareDropZoneExists () {
  const { app } = this
  return app.client.waitForExist(E2E_SHARE_DROP_ZONE_ID)
}

export function shareDropZoneSelect (filePath) {
  const { app } = this
  return app.client.chooseFile(E2E_SHARE_DROP_ZONE_ID, filePath)
}

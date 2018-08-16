import { ids } from '~data';

export function shareWaitForDropZoneExists() {
  const { app } = this;
  return app.client.waitForExist(ids.SHARE_DROP_ZONE_ID);
}

export function shareDropZoneSelect(filePath) {
  const { app } = this;
  return app.client.chooseFile(ids.SHARE_DROP_ZONE_ID, filePath);
}

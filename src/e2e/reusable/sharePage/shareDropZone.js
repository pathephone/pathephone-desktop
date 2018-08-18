import e2e from '~data/e2e';

export function shareWaitForDropZoneExists() {
  const { app } = this;
  return app.client.waitForExist(e2e.SHARE_DROP_ZONE_ID);
}

export function shareDropZoneSelect(filePath) {
  const { app } = this;
  return app.client.chooseFile(e2e.SHARE_DROP_ZONE_ID, filePath);
}

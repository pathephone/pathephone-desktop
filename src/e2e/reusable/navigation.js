import e2e from '~shared/data/e2e';

export async function openSharePage() {
  const { app } = this;
  await app.client.waitForExist(e2e.NAV_SHARE_LINK_ID);
  await app.client.click(e2e.NAV_SHARE_LINK_ID);
  return app.client.waitForExist(e2e.SHARE_PAGE_ID);
}

export async function openDiscoverPage() {
  const { app } = this;
  await app.client.click(e2e.NAV_DISCOVER_LINK_ID);
  await app.client.waitForExist(e2e.DISCOVER_PAGE_ID);
}

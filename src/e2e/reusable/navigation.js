import { ids } from '~data';

export async function openSharePage() {
  const { app } = this;
  await app.client.waitForExist(ids.NAV_SHARE_LINK_ID);
  await app.client.click(ids.NAV_SHARE_LINK_ID);
  return app.client.waitForExist(ids.SHARE_PAGE_ID);
}

export async function openDiscoverPage() {
  const { app } = this;
  await app.client.click(ids.NAV_DISCOVER_LINK_ID);
  await app.client.waitForExist(ids.DISCOVER_PAGE_ID);
}

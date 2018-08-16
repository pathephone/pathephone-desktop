import {
  E2E_NAV_DISCOVER_LINK_ID,
  E2E_DISCOVER_PAGE_ID,
  E2E_SHARE_PAGE_ID,
  E2E_NAV_SHARE_LINK_ID,
} from '~data/e2eConstants';

export async function openSharePage() {
  const { app } = this;
  await app.client.waitForExist(E2E_NAV_SHARE_LINK_ID);
  await app.client.click(E2E_NAV_SHARE_LINK_ID);
  return app.client.waitForExist(E2E_SHARE_PAGE_ID);
}

export async function openDiscoverPage() {
  const { app } = this;
  await app.client.click(E2E_NAV_DISCOVER_LINK_ID);
  await app.client.waitForExist(E2E_DISCOVER_PAGE_ID);
}

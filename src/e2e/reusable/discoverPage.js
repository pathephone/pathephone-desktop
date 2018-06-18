
import {
  E2E_NAV_DISCOVER_LINK_ID,
  E2E_DISCOVER_PAGE_ID,
  E2E_DISCOVER_FEED_ID
} from '~data/e2eConstants'

export async function openDiscoverPage () {
  const { app } = this
  await app.client.click(E2E_NAV_DISCOVER_LINK_ID)
  await app.client.waitForExist(E2E_DISCOVER_PAGE_ID)
}

export async function discoverFeedDoesNotExist () {
  const { app } = this
  const isFeedExists = await app.client.isExisting(E2E_DISCOVER_FEED_ID)
  expect(isFeedExists).equal(false)
}

export async function discoverFeedLengthIs (number) {
  const { app } = this
  const feedItems = await app.client.$$(E2E_DISCOVER_FEED_ID)
  expect(feedItems.length).equal(number)
}

export async function discoverFeedExists () {
  const { app } = this
  const isFeedExists = await app.client.isExisting(E2E_DISCOVER_FEED_ID)
  expect(isFeedExists).equal(true)
}

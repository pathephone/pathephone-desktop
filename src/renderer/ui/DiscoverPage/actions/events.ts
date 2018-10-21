import { createStandardAction } from "typesafe-actions";
import { IDiscoverPageAlbum } from "~renderer/ui/DiscoverPage/types";
import { ICollectionStat } from "~renderer/types/api";

const discoverPageDomain = (action: string): string => `@discoverPage/${action}`;

export const uiAlbumPlayed = createStandardAction(
  discoverPageDomain('ALBUM_PLAYED')
)();
export const uiAlbumQueued = createStandardAction(
  discoverPageDomain('ALBUM_ADDED_TO_PLAYLIST')
)();
export const uiAlbumDeleted = createStandardAction(
  discoverPageDomain('ALBUMS_DELETED')
)();

export const uiDiscoverSearchPerformed = createStandardAction(
  discoverPageDomain('DISCOVER_SEARCH_PERFORMED')
)();
export const uiDiscoverSearchValueChanged = createStandardAction(
  discoverPageDomain('DISCOVER_SEARCH_VALUE_CHANGED')
)();
export const uiDiscoverSearchCleared = createStandardAction(
  discoverPageDomain('DISCOVER_SEARCH_CLEARED')
)();

export const uiDiscoverAlbumSelected = createStandardAction(
  discoverPageDomain('ALBUM_SELECTED')
)();
export const uiDiscoverAlbumDeselected = createStandardAction(
  discoverPageDomain('ALBUM_DESELECTED')
)();

export const uiDiscoverPageClosed = createStandardAction(
  discoverPageDomain('DISCOVER_PAGE_CLOSED')
)();
export const uiDiscoverSelectedQueued = createStandardAction(
  discoverPageDomain('DISCOVER_SELECTED_QUEUED')
)();
export const uiDiscoverSelectedPlayed = createStandardAction(
  discoverPageDomain('DISCOVER_SELECTED_PLAYED')
)();
export const uiDiscoverSelectedDeleted = createStandardAction(
  discoverPageDomain('DISCOVER_SELECTED_DELETED')
)();
export const uiDiscoverSelectedCanceled = createStandardAction(
  discoverPageDomain('FEED_SELECTION_CANCELED')
)();

export const systemDiscoverAlbumsFetch = createStandardAction(
  discoverPageDomain('DISCOVER_FETCH_SUCCEED')
)<IDiscoverPageAlbum[]>();
export const systemDiscoverAlbumsFetchSucceed = createStandardAction(
  discoverPageDomain('DISCOVER_LATEST_FETCH_SUCCEED')
)<IDiscoverPageAlbum[]>();
export const systemDiscoverAlbumsFetchFailed = createStandardAction(
  discoverPageDomain('DISCOVER_LATEST_FETCH_FAILED')
)();

export const systemDiscoverSelectedActionSucceed = createStandardAction(
  discoverPageDomain('DISCOVER_SELECTED_ACTION_SUCCEED')
)<ICollectionStat>();
export const systemDiscoverSelectedActionFailed = createStandardAction(
  discoverPageDomain('DISCOVER_SELECTED_ACTION_FAILED')
)<string>();

export const systemAlbumDeleteSucceed = createStandardAction(
  discoverPageDomain('ALBUMS_DELETE_SUCCEED')
)();
export const systemAlbumDeleteFailed = createStandardAction(
  discoverPageDomain('ALBUMS_DELETE_FAILED')
)();

import { uiAction, systemAction } from "~renderer/utils/actions";

const discoverPageDomain = (action: string): string => `@discoverPage/${action}`;

export const uiAlbumPlayed = uiAction(
  discoverPageDomain('ALBUM_PLAYED')
);
export const uiAlbumQueued = uiAction(
  discoverPageDomain('ALBUM_ADDED_TO_PLAYLIST')
);
export const uiAlbumDeleted = uiAction(
  discoverPageDomain('ALBUMS_DELETED')
);

export const uiDiscoverSearchPerformed = uiAction(
  discoverPageDomain('DISCOVER_SEARCH_PERFORMED')
);
export const uiDiscoverSearchValueChanged = uiAction(
  discoverPageDomain('DISCOVER_SEARCH_VALUE_CHANGED')
);
export const uiDiscoverSearchCleared = uiAction(
  discoverPageDomain('DISCOVER_SEARCH_CLEARED')
);

export const uiDiscoverAlbumSelected = uiAction(
  discoverPageDomain('ALBUM_SELECTED')
);
export const uiDiscoverAlbumDeselected = uiAction(
  discoverPageDomain('ALBUM_DESELECTED')
);

export const uiDiscoverPageClosed = uiAction(
  discoverPageDomain('DISCOVER_PAGE_CLOSED')
);
export const uiDiscoverSelectedQueued = uiAction(
  discoverPageDomain('DISCOVER_SELECTED_QUEUED')
);
export const uiDiscoverSelectedPlayed = uiAction(
  discoverPageDomain('DISCOVER_SELECTED_PLAYED')
);
export const uiDiscoverSelectedDeleted = uiAction(
  discoverPageDomain('DISCOVER_SELECTED_DELETED')
);
export const uiDiscoverSelectedCanceled = uiAction(
  discoverPageDomain('FEED_SELECTION_CANCELED')
);

export const systemDiscoverAlbumsFetch = systemAction(
  discoverPageDomain('DISCOVER_FETCH_SUCCEED')
);
export const systemDiscoverAlbumsFetchSucceed = systemAction(
  discoverPageDomain('DISCOVER_LATEST_FETCH_SUCCEED')
);
export const systemDiscoverAlbumsFetchFailed = systemAction(
  discoverPageDomain('DISCOVER_LATEST_FETCH_FAILED')
);

export const systemDiscoverSelectedActionSucceed = systemAction(
  discoverPageDomain('DISCOVER_SELECTED_ACTION_SUCCEED')
);
export const systemDiscoverSelectedActionFailed = systemAction(
  discoverPageDomain('DISCOVER_SELECTED_ACTION_FAILED')
);

export const systemAlbumDeleteSucceed = systemAction(
  discoverPageDomain('ALBUMS_DELETE_SUCCEED')
);
export const systemAlbumDeleteFailed = systemAction(
  discoverPageDomain('ALBUMS_DELETE_FAILED')
);

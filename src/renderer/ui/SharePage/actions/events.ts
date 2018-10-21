import { uiAction } from '~renderer/utils/actions';

const sharePageDomain = (action: string): string => `@playlist/${action}`;

export const uiShareItemsSelected = uiAction(
  sharePageDomain('SHARE_ITEMS_SELECTED')
);
export const uiShareFormSubmited = uiAction(
  sharePageDomain('SHARE_FORM_SUBMITED')
);
export const uiShareFormCanceled = uiAction(
  sharePageDomain('SHARE_FORM_CANCELED')
);
export const uiShareFormChanged = uiAction(
  sharePageDomain('SHARE_FORM_CHANGED')
);
export const uiShareFormReseted = uiAction(
  sharePageDomain('SHARE_FORM_RESETED')
);
export const uiShareFormTrackAdded = uiAction(
  sharePageDomain('SHARE_FORM_TRACK_ADDED')
);
export const uiShareFormTrackRemoved = uiAction(
  sharePageDomain('SHARE_FORM_TRACK_REMOVED')
);
export const uiShareFormTrackMovedUp = uiAction(
  sharePageDomain('SHARE_FORM_TRACK_MOVED_UP')
);
export const uiShareFormTrackMovedDown = uiAction(
  sharePageDomain('SHARE_FORM_TRACK_MOVED_DOWN')
);

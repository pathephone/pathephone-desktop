import { createStandardAction } from 'typesafe-actions';

const sharePageDomain = (action: string): string => `@playlist/${action}`;

export const uiShareItemsSelected = createStandardAction(
  sharePageDomain('SHARE_ITEMS_SELECTED')
)();
export const uiShareFormSubmited = createStandardAction(
  sharePageDomain('SHARE_FORM_SUBMITED')
)();
export const uiShareFormCanceled = createStandardAction(
  sharePageDomain('SHARE_FORM_CANCELED')
)();
export const uiShareFormChanged = createStandardAction(
  sharePageDomain('SHARE_FORM_CHANGED')
)();
export const uiShareFormReseted = createStandardAction(
  sharePageDomain('SHARE_FORM_RESETED')
)();
export const uiShareFormTrackAdded = createStandardAction(
  sharePageDomain('SHARE_FORM_TRACK_ADDED')
)();
export const uiShareFormTrackRemoved = createStandardAction(
  sharePageDomain('SHARE_FORM_TRACK_REMOVED')
)();
export const uiShareFormTrackMovedUp = createStandardAction(
  sharePageDomain('SHARE_FORM_TRACK_MOVED_UP')
)();
export const uiShareFormTrackMovedDown = createStandardAction(
  sharePageDomain('SHARE_FORM_TRACK_MOVED_DOWN')
)();

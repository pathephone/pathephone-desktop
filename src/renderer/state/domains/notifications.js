import actions from '#actions';
import printRenderer from '~shared/utils/printRenderer';

const DOMAIN = 'notifications';

const initialState = [];

export const getNotifications = state => state[DOMAIN];

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.systemNotificationRecieved.toString():
      return [...state, payload];
    case actions.systemNotificationExpired.toString():
    case actions.uiNotificationToastRemoved.toString():
      printRenderer.log(payload);
      return state.filter(n => n.id !== payload);
    default:
      return state;
  }
};

export default reducer;

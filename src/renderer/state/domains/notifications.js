import actions from '#actions';

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
      console.log(payload);
      return state.filter(n => n.id !== payload);
    default:
      return state;
  }
};

export default reducer;

import { combineReducers } from 'redux';

import { notificationsReducer } from '~renderer/ui/Notifications';
import { startScreenReducer } from '~renderer/ui/StartScreen';
import * as reducers from './state/reducers';

const rootReducer = combineReducers({
  ...reducers,
  notifications: notificationsReducer,
  startScreen: startScreenReducer,
});

export default rootReducer;

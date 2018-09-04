import { combineReducers } from 'redux';

import * as reducers from './state/reducers';
import { startScreenReducer } from './ui/StartScreen';

const rootReducer = combineReducers({
  ...reducers,
  startScreen: startScreenReducer,
});

export default rootReducer;

import * as startScreenActions from './actions';
import * as startScreenEvents from './events';
import StartScreen from './smart/StartScreen';
import { startScreenReducer } from './state';

export {
  startScreenReducer,
  startScreenEvents,
  startScreenActions,
};

export default StartScreen;

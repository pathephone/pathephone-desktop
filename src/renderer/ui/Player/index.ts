// tslint:disable no-relative-imports

import * as playerEvents from './actions/events';
import * as playerSelectors from './state/selectors';

import './styles/styles.css';

export {
  playerEvents,
  playerSelectors
};

export { Player as default }  from './view/Player';

// tslint:disable no-relative-imports

import * as notificationsEvents from './actions/events';
import * as notificationsSelectors from './state/selectors';
import * as notificationsSetters from './state/setters';
import * as notificationsStyles from './styles/styles';
import './styles/styles.scss';

export {
  notificationsEvents,
  notificationsSelectors,
  notificationsStyles,
  notificationsSetters
};

export { NotificationsWidget as default }  from './view/widget';

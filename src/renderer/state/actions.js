import * as systemActions from './actions/system';
import * as uiActions from './actions/ui';

const actions = {
  ...systemActions,
  ...uiActions,
};

export default actions;

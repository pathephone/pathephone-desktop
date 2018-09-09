import * as systemActions from './actions/system';
import * as uiActions from './actions/ui';

export { systemActions, uiActions };

const actions = {
  ...systemActions,
  ...uiActions,
};

export default actions;

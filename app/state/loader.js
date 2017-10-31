// @flow
import createPoint from '../utils/recallPoint';

type loaderState = {
  on: boolean
};

const state : loaderState = {
  on: false
};

const actions = {
  TOOGLE() {
    state.on = !state.on;
  }
};

const point = createPoint(
  (ACTION, ...params) => {
    if (ACTION) {
      actions[ACTION](...params);
    }
    return state;
  }
);

export default point;

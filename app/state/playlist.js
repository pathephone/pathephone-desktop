// @flow
import createPoint from '../utils/recallPoint';

const state = [];

const point = createPoint(
  (ACTION, ...params) => {
    if (ACTION === 'ADD_TRACKS') {
      state.push(...params);
    }
    return state;
  }
);

export default point;

import { systemNewRelaseDetected } from '~actions/system';

const DOMAIN = 'newRelease';

const initialState = null;

export const getNewRelease = state => state[DOMAIN];

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case systemNewRelaseDetected.toString():
      return payload.release;
    default:
      return state;
  }
};

export default reducer;

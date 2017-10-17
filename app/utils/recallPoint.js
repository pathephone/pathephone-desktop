const createBucket = require('recall-bucket');

const recallAction = (action) => {
  const actionIsFn = typeof action === 'function';
  if (!actionIsFn) {
    throw new Error('Action must be a function.');
  }
  const bucket = createBucket();
  const api = (...params) => {
    const firstParamType = typeof params[0];
    if (firstParamType === 'function') {
      params[0](action(), true);
      return bucket(params[0]);
    }
    bucket(action(...params));
  };
  return api;
};

module.exports = recallAction;

// @flow

const asyncTimeout = (delay: number): Promise<any> => (
  new Promise(resolve => setTimeout(resolve, delay))
);

export default asyncTimeout;

import { IS_PRODUCTION } from '../config';

const getPrinter = handler => (...args) => {
  if (!IS_PRODUCTION) {
    handler(...args);
  }
};

const printRenderer = {
  log: getPrinter(console.log),
  error: getPrinter(console.error),
};

export default printRenderer;

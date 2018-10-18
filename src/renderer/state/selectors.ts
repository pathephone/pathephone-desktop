
import * as derived from './selectors/derived';
import * as simple from './selectors/simple';

const selectors = {
  ...derived,
  ...simple,
};

export default selectors;

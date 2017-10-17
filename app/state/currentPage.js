// @flow
import createPoint from '../utils/recallPoint';

type currentPage = {
  name: string,
  props: {}
};

const data : currentPage = {
  name: 'albums',
  props: {}
};

const point = createPoint(
  (ACTION, ...params) => {
    if (ACTION === 'CHANGE') {
      const [name, props] = params;
      data.name = name;
      data.props = props;
    }
    return data;
  }
);

export default point;

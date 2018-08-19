import { channel } from 'redux-saga';

const getSagaChannelsMap = async (names) => {
  const handleMap = () => channel();
  const channelsSet = await Promise.all(
    names.map(handleMap),
  );
  const handleReduce = (aggr, name, index) => {
    aggr[name] = channelsSet[index]; // eslint-disable-line no-param-reassign
    return aggr;
  };
  return names.reduce(handleReduce, {});
};

export default getSagaChannelsMap;

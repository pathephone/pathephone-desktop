import createWorkerController from '~utils/createWorkerController';
import ipc from '~data/ipc';

import DbApiWorker from './getStorageApi/dbApi.worker';
import getAlbumsCollectionApi from './getStorageApi/getAlbumsCollectionApi';

const getStorageApi = async () => {
  const worker = createWorkerController(DbApiWorker);
  await worker.call({ type: ipc.START_DB });
  return getAlbumsCollectionApi(worker);
};

export default getStorageApi;

import createWorkerController from '~shared/utils/createWorkerController';
import ipc from '~shared/data/ipc';

import DbApiWorker from './getStorageApi/dbApi.worker';
import getAlbumsCollectionApi from './getStorageApi/getAlbumsCollectionApi';

const getStorageApi = async () => {
  const worker = createWorkerController(DbApiWorker);
  await worker.call({ type: ipc.START_DB });
  return getAlbumsCollectionApi(worker);
};

export default getStorageApi;

import createWorkerController from '~utils/createWorkerController'
import { IPC_START_DB } from '~data/ipcTypes'

import DbApiWorker from './getStorageApi/dbApi.worker'
import getCollectionsApis from './getStorageApi/getAlbumsCollectionApi'

const getStorageApi = async () => {
  const worker = createWorkerController(DbApiWorker)
  await worker.call({ type: IPC_START_DB })
  return getCollectionsApis(worker)
}

export default getStorageApi

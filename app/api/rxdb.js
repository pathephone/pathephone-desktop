import RxDB from 'rxdb'
import IDBadapter from 'pouchdb-adapter-idb'

RxDB.plugin(IDBadapter)

let db

export const createDb = async (options) => {
  db = await RxDB.create(options)
  window.RxDb = db
}

export const getDb = () => db

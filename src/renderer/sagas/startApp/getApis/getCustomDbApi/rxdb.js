import RxDB from 'rxdb'
import IDBadapter from 'pouchdb-adapter-idb'

const options = {
  name: 'pathephone',
  adapter: 'idb'
}

RxDB.plugin(IDBadapter)

const getRxDBApi = () => RxDB.create(options)

export default getRxDBApi

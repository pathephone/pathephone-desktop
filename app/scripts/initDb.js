import schemas from '../schemas';
import { getIpfs } from '../api/ipfs';
import { getDb, createDb } from '../api/rxdb';
import getCidString from '../utils/getCidString';

const dagParams = { format: 'dag-cbor', hashAlg: 'sha3-512' };

export const start = async () => {
  const IPFSnode = getIpfs();
  await createDb({
    name: 'pathephone',
    adapter: 'idb'
  });
  const db = getDb();
  const promises = schemas.map(
    async ({ collectionName, schemaObj, schemaCid }, index) => {
      if (!schemaCid) {
        const cidObj = await IPFSnode.dag.put(schemaObj, dagParams);
        schemaCid = cidObj.toBaseEncodedString();
        schemas[index].schemaCid = schemaCid;
      }
      const collection = await db.collection({
        name: collectionName,
        schema: schemaObj
      });
      await IPFSnode.pubsub.subscribe(
        schemaCid,
        async (message) => {
          try {
            const { data } = message;
            const cidString = getCidString(data);
            console.log(`Album candidate received: ${cidString}`);
            const { value } = await IPFSnode.dag.get(cidString);
            collection.insert(value);
          } catch (e) {
            console.log(e);
          }
        }
      );
    }
  );
  return Promise.all(promises);
};

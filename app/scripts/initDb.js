import rxdbAlbumSchema from '../schemas/rxdb/album';
import metabinAlbumSchema from '../schemas/metabin/album';
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
  const promises = [rxdbAlbumSchema].map(
    async (schema) => {
      const { collectionName, schemaObj } = schema;
      const collection = await db.collection({
        name: collectionName,
        schema: schemaObj
      });
      if (!metabinAlbumSchema.schemaCid) {
        const cidObj = await IPFSnode.dag.put(metabinAlbumSchema.schemaObj, dagParams);
        metabinAlbumSchema.schemaCid = cidObj.toBaseEncodedString();
      }
      await IPFSnode.pubsub.subscribe(
        metabinAlbumSchema.schemaCid,
        async (message) => {
          try {
            const { data } = message;
            const cidString = getCidString(data);
            console.log(`Album candidate received: ${cidString}`);
            const { value } = await IPFSnode.dag.get(cidString);
            collection.insert({ cid: cidString, data: value });
          } catch (e) {
            console.log(e);
          }
        }
      );
    }
  );
  return Promise.all(promises);
};

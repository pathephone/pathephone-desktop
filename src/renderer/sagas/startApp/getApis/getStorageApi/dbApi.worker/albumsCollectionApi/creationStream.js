import { IPC_ALBUM_CREATED } from '~data/ipcTypes';

const sendMessage = () => {
  postMessage({
    type: IPC_ALBUM_CREATED,
  });
};

let closeStream = null;

export const openAlbumsCreationStream = async (dbApis) => {
  if (closeStream) {
    closeStream();
  }
  const handleHook = (args) => {
    args[2].on('complete', sendMessage);
  };
  dbApis.albumsCollection.hook('creating', handleHook);
  closeStream = () => {
    dbApis.albumsCollection.hook('creating').unsubscribe(handleHook);
  };
};

export const closeAlbumsCreationStream = () => {

};

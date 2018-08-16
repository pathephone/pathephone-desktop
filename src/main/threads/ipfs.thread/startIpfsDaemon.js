import IPFSFactory from 'ipfsd-ctl';

const startIpfsDaemon = ({ createParams, spawnParams, startFlags }) => (
  new Promise((resolve, reject) => {
    const onError = reject;
    const onSuccess = resolve;

    const startIpfsNode = (node) => {
      const startCallback = (err) => {
        if (err) {
          onError(err);
        } else {
          onSuccess(node);
          console.log(`
  ipfs api running on ${node.apiAddr}
  ipfs gateway running on ${node.gatewayAddr}
  `);
        }
      };
      node.start(startFlags, startCallback);
    };
    const initIpfsNode = (node) => {
      const initCallback = (err) => {
        if (err) {
          onError(err);
        } else {
          startIpfsNode(node);
        }
      };
      node.init(initCallback);
    };
    const spawnCallback = (err, node) => {
      if (err) {
        onError(err);
      } else if (node.disposable) {
        onSuccess(node);
      } else
      if (node.initialized) {
        startIpfsNode(node);
      } else {
        initIpfsNode(node);
      }
    };

    IPFSFactory
      .create(createParams)
      .spawn(spawnParams, spawnCallback);
  })
);

export default startIpfsDaemon;

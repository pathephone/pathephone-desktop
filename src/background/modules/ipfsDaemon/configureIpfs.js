const util = require('util')
require('util.promisify').shim()
const exec = util.promisify(require('child_process').exec)

export default async (options, ipfsPath) => {
  if (options.port) {
    await exec(`${ipfsPath} config --json Addresses.Swarm "[\\"/ip4/0.0.0.0/tcp/${options.port}\\", \\"/ip6/::/tcp/${options.port}\\"]"`, options)
  }
  if (options.portApi) {
    await exec(`${ipfsPath} config Addresses.API "/ip4/127.0.0.1/tcp/${options.portApi}"`, options)
  }
  if (options.portGateway) {
    await exec(`${ipfsPath} config Addresses.Gateway "/ip4/127.0.0.1/tcp/${options.portGateway}"`, options)
  }
}

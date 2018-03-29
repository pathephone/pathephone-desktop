import ipfsDaemon from '~app/api/ipfsDaemon'

const beforeUnload = async () => {
  await ipfsDaemon.stop()
}

export default beforeUnload

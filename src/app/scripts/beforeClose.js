import ipfsDaemon from '~/api/ipfsDaemon'

const beforeUnload = async () => {
  await ipfsDaemon.stop()
}

export default beforeUnload

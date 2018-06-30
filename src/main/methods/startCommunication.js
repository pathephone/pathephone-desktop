import startFsBridge from './startCommunication/startFsBridge'
import startIpfsBridge from './startCommunication/startIpfsBridge'
import startMetabinBridge from './startCommunication/startMetabinBridge'
import startIpfsProcess from './startCommunication/startIpfsProcess'

const startCommunication = () => {
  const ipfsProcessPromise = startIpfsProcess()

  const stopFsBridge = startFsBridge()
  const stopIpfsBridge = startIpfsBridge({ ipfsProcessPromise })
  const stopMetabinBridge = startMetabinBridge({ ipfsProcessPromise })
  return async () => {
    stopFsBridge()
    stopIpfsBridge()
    stopMetabinBridge()
    const ipfsProcess = await ipfsProcessPromise
    ipfsProcess.disconnect()
  }
}

export default startCommunication

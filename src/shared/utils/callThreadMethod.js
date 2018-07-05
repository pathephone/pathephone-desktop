import { fork } from 'child_process'
import path from 'path'

export const callThreadMethod = (name, payload) => {
  return new Promise((resolve, reject) => {
    const process = fork(path.resolve(__dirname, `threads/${name}.thread.js`))
    const handleMessage = ({ errorMessage, payload }) => {
      process.removeListener('message', handleMessage)
      process.disconnect()
      if (errorMessage) {
        reject(new Error(errorMessage))
      } else {
        resolve(payload)
      }
    }
    process.on('message', handleMessage)
    process.send({ payload })
  })
}

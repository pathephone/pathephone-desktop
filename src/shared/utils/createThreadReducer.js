
const createThreadReducer = handler => {
  const handleMessage = async data => {
    const { requestId, ...restParams } = data
    if (requestId) {
      const responseId = requestId
      try {
        const output = await handler(restParams)
        process.send({ responseId, payload: output })
      } catch (error) {
        console.error(error)
        process.send({ responseId, errorMessage: error.message })
      }
    }
  }
  process.on('message', handleMessage)
}

export default createThreadReducer

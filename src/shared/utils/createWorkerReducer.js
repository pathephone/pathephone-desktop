
const createWorkerReducer = (handler) => {
  onmessage = async ({ data }) => {
    const { requestId, ...restParams } = data
    if (requestId) {
      const responseId = requestId
      try {
        const output = await handler(restParams)
        postMessage({ responseId, payload: output })
      } catch (e) {
        postMessage({ responseId, errorMessage: e.message })
      }
    }
  }
}

export default createWorkerReducer

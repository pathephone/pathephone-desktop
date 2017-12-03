const fetch = require('node-fetch')

export default (endpoint) => {
  const dagGetEndpoint = `${endpoint}/dag/get`
  return async (cidString) => {
    if (typeof cidString !== 'string') {
      throw new Error('Custom dag.get recieves only string cids.')
    }
    const res = await fetch(`${dagGetEndpoint}?arg=${cidString}`)
    if (res.status !== 200) {
      throw new Error(res.statusText)
    }
    const value = await res.json()
    return { value }
  }
}
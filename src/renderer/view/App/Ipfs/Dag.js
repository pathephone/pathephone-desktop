import React from 'react'
import getIpfs from 'api/ipfsApi'

class IpfsGet extends React.Component {
  state = {}
  async componentWillMount () {
    try {
      let { cid } = this.props
      const ipfsNode = await getIpfs()
      const dagsPromises = []
      if (typeof cid !== 'undefined') {
        if (!Array.isArray(cid)) {
          cid = [cid]
        }
        cid.forEach((aCid) => {
          dagsPromises.push(ipfsNode.dag.get(aCid))
        })
      }
      const data = await Promise.all(dagsPromises)
      this.setState({
        data: cid.length === 1 ? data[0] : data
      })
    } catch (error) {
      this.setState({ error })
    }
  }
  render () {
    const { data, error } = this.state
    if (data || error) {
      return (
        <this.props.view {...this.state} />
      )
    }
    return null
  }
}

export default IpfsGet

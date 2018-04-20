import React from 'react'
import Async from './Async'
import multihashToUrl from '~/scripts/multihashToUrl'

class GetIpfsImage extends React.Component {
  shouldComponentUpdate (nextProps) {
    return nextProps.hash !== this.props.hash
  }
  render () {
    const { view, hash } = this.props
    return (
      <Async
        call={() => multihashToUrl(hash)}
        view={view}
      />
    )
  }
}

export default GetIpfsImage

import React from 'react'
import propTypes from 'prop-types'

// import ShareFormConnected from './SharePage/ShareFormConnected'
import ShareDNDConnected from './SharePage/ShareDNDConnected'
// import Tips from './SharePage/Tips.jsx'

const SharePage = (props) => {
  const { onDNDRecieve } = props
  return (
    <React.Fragment>
      <ShareDNDConnected
        onRecieve={onDNDRecieve}
      />
    </React.Fragment>
  )
}

SharePage.propTypes = {
  onDNDRecieve: propTypes.func.isRequired
}

export default SharePage

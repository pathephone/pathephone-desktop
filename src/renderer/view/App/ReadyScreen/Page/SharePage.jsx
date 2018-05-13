import React from 'react'
import propTypes from 'prop-types'

import ShareProcessingScreen from './SharePage/ShareProcessingScreen.jsx'
import ShareDropZone from './SharePage/ShareDropZone.jsx'

const SharePage = (props) => {
  const { hasProcessingScreen, ...restProps } = props
  return (
    <React.Fragment>
      {
        hasProcessingScreen ? (
          <ShareProcessingScreen />
        ) : (
          <ShareDropZone {...restProps} />
        )
      }
    </React.Fragment>
  )
}

SharePage.propTypes = {
  hasProcessingScreen: propTypes.bool.isRequired
}

export default SharePage

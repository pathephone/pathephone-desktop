import React from 'react'
import propTypes from 'prop-types'

import ShareProcessingScreen from './SharePage/ShareProcessingScreen.jsx'
import ShareDropZone from './SharePage/ShareDropZone.jsx'
import ShareFormConnected from './SharePage/ShareFormConnected'

const SharePage = (props) => {
  const { hasProcessingScreen, hasEditForm, ...restProps } = props
  return (
    <React.Fragment>
      {
        hasProcessingScreen ? (
          <ShareProcessingScreen />
        ) : hasEditForm ? (
          <ShareFormConnected />
        ) : (
          <ShareDropZone {...restProps} />
        )
      }
    </React.Fragment>
  )
}

SharePage.propTypes = {
  hasProcessingScreen: propTypes.bool.isRequired,
  hasEditForm: propTypes.bool.isRequired
}

export default SharePage

import React from 'react'
import propTypes from 'prop-types'

import { E2E_SHARE_PAGE_ID } from '~data/e2eConstants'

import PageContainer from '~components/PageContainer.jsx'
import ProcessingScreen from '~components/ProcessingScreen.jsx'

import ShareDropZone from './SharePage/ShareDropZone.jsx'
import ShareFormConnected from './SharePage/ShareFormConnected'

const SharePage = (props) => {
  const { hasProcessingScreen, hasEditForm, ...restProps } = props
  return (
    <PageContainer id={E2E_SHARE_PAGE_ID}>
      {
        hasProcessingScreen ? (
          <ProcessingScreen />
        ) : hasEditForm ? (
          <ShareFormConnected />
        ) : (
          <ShareDropZone {...restProps} />
        )
      }
    </PageContainer>
  )
}

SharePage.propTypes = {
  hasProcessingScreen: propTypes.bool.isRequired,
  hasEditForm: propTypes.bool.isRequired
}

export default SharePage

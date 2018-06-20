import React from 'react'
import { E2E_SHARE_PROCESSING_SCREEN_ID } from '~data/e2eConstants'

const ShareProcessingScreen = () => {
  return (
    <div
      id={E2E_SHARE_PROCESSING_SCREEN_ID}
      className='izi-fill izi-y izi-middle share-processing-screen'
    >
      <label className='izi-uppercase' >processing...</label>
    </div>
  )
}

export default ShareProcessingScreen

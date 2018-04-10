import React from 'react'
import propTypes from 'prop-types'

import ErrorView from '@/ErrorView'

const CloseScreen = ({ errorMessage }) => (
  <div className='izi-fill izi-middle'>
    <h4 className='izi-gray izi-uppercase'>closing app</h4>
    {
      errorMessage && (
        <ErrorView />
      )
    }
  </div>
)

CloseScreen.propTypes = {
  errorMessage: propTypes.string.isRequired
}

export default CloseScreen

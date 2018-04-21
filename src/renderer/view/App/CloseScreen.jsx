import React from 'react'
import propTypes from 'prop-types'

import ErrorMessage from '~components/ErrorMessage.jsx'

const CloseScreen = ({ errorMessage }) => (
  <div className='izi-fill izi-middle'>
    <h4 className='izi-gray izi-uppercase'>closing app</h4>
    {
      errorMessage && (
        <ErrorMessage message={errorMessage} />
      )
    }
  </div>
)

CloseScreen.propTypes = {
  errorMessage: propTypes.string.isRequired
}

export default CloseScreen

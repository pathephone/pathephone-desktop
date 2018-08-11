import React from 'react'
import propTypes from 'prop-types'

import './ErrorMessage.css'

const ErrorMessage = ({ message }) => {
  return <h4 className='errorMessage'>{message}</h4>
}

ErrorMessage.propTypes = {
  message: propTypes.string.isRequired
}

export default ErrorMessage

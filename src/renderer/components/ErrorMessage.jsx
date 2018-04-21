import React from 'react'
import propTypes from 'prop-types'

const ErrorView = ({ message }) => {
  return <h4 className='izi-red izi-uppercase izi-text-center'>{message}</h4>
}

ErrorView.propTypes = {
  message: propTypes.string.isRequired
}

export default ErrorView

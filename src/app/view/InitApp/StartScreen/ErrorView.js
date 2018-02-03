import React from 'react'

const ErrorView = ({ error }) => {
  return <h4 className='izi-red izi-uppercase'>{error.message}</h4>
}

export default ErrorView

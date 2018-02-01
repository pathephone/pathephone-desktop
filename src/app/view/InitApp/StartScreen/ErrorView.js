import React from 'react'

const ErrorView = ({ error }) => {
  console.error(error)
  return <h1>{error.message}</h1>
}

export default ErrorView

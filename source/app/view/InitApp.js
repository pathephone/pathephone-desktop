import React from 'react'
import Async from './_/Async.js'
import initDb from '~/scripts/initDb'
import initIpfs from '~/scripts/initIpfs'

import App from './App'

const ErrorView = ({ error }) => {
  console.error(error)
  return <h1>{error.message}</h1>
}

const InitIpfs = () => {
  return (
    <Async
      call={initIpfs}
      readyView={App}
      errorView={ErrorView}
      waitView={() => <h1>Initialising ipfs.</h1>}
    />
  )
}

const InitDb = () => {
  return (
    <Async
      call={initDb}
      readyView={InitIpfs}
      errorView={ErrorView}
      waitView={() => <h1>Initialising database.</h1>}
    />
  )
}

export default InitDb

import React, {Component} from 'react'
import Async from './_/Async.js'
import initDb from '../scripts/initDb'
import initIpfs from '../scripts/initIpfs'

import App from './App'

const { ipcRenderer, remote } = require('electron');

const ErrorView = ({ error }) => {
  console.error(error)
  return <h1>{error.message}</h1>
}

class InitIpfs extends Component
{
  constructor(props) {
    super(props)
    this.state = {
      ipfsLoaded: remote.getGlobal('ipfsLoaded')
    }
  }
  componentDidMount()
  {
    ipcRenderer.on('ipfs-ready', (event, message) => {
        this.setState({ipfsLoaded: message})
    });
  }
  render()
  {
    return (
      this.state.ipfsLoaded
      ?
      <Async
        call={initIpfs}
        readyView={App}
        errorView={ErrorView}
        waitView={() => <h1>Initialising ipfs.</h1>}
      />
      :
      <h1>Waiting for ipfs start</h1>
    )
  }
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

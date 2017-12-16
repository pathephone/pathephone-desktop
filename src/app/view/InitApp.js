import React, {Component} from 'react'
import Async from './_/Async.js'
import initDb from '../scripts/initDb'
import initIpfs from '../scripts/initIpfs'

import App from './App'

// const { ipcRenderer, remote } = require('electron')

const ErrorView = ({ error }) => {
  console.error(error)
  return <h1>{error.message}</h1>
}

class InitIpfs extends Component {
  state = {
    isLoaded: true
  }
  componentDidMount () {
    // имеет смысл слушать только ошибки и закрытия ipfs (старт всегда)
    /*
    const globalState = remote.getGlobal('state')
    console.log(globalState)
    this.listener = globalState.ipfsDaemonState(({ started }) => {
      this.setState({ isLoaded: started })
      if (started) {
        this.listener.done()
      }
    })
    */
  }
  render () {
    return (
      this.state.isLoaded
        ? <Async
          call={initIpfs}
          readyView={App}
          errorView={ErrorView}
          waitView={() => <h1>Initialising ipfs.</h1>}
        />
        : <h1>Waiting for ipfs start</h1>
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

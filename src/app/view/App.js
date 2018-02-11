// @flow
import React from 'react'
import Navigation from './Navigation'
import Playlist from './Playlist'
import Player from './Player'
import Page from './Page'

import './App.css'

import { ipcRenderer, remote } from 'electron'

import beforeClose from '~/scripts/beforeClose'

class BeforeUnloadContainer extends React.Component {
  state = {
    closing: false
  }
  destroyWindow () {
    remote.getCurrentWindow().destroy() // 'remote' being electron.remote here
  }
  handleCustomClosing = () => {
    this.setState({ closing: true })
    beforeClose()
      .then(this.destroyWindow)
    // prevent the window from closing immediately
  }
  componentWillMount () {
    ipcRenderer.on('prepare-for-close', this.handleCustomClosing)
  }
  render () {
    const { closing } = this.state
    if (closing) {
      return (
        <div className='izi-fill izi-middle'>
          <h4 className='izi-gray izi-uppercase'>closing app</h4>
        </div>
      )
    } else {
      return <App />
    }
  }
}

const App = () => (
  <div id='app' className='izi-fill izi-ys'>
    <Navigation />
    <Page />
    <Playlist />
    <Player />
  </div>
)

export default BeforeUnloadContainer

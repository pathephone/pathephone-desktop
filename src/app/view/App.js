// @flow
import React from 'react'
import Navigation from './Navigation'
import Playlist from './Playlist'
import Player from './Player/Player'
import Page from './Page'

const App = () => (
  <div id='app' className='izi-fill izi-ys'>
    <div className='browser izi-xs izi-fill'>
      <Navigation />
      <Page />
      <Playlist />
    </div>
    <Player />
    <style jsx>{`
.browser {
  max-height: 100%;
  flex-shrink: 1;
}
    `}</style>
  </div>
)

export default App

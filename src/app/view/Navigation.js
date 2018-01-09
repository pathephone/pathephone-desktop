import React, { Component } from 'react'
import pageState from '../state/page'
import bind from '../utils/recallReact'
import AddAlbum from './AddAlbum'

class Navigation extends Component {
  render () {
    return (
      <nav className='navigation izi-ys izi-padding'>
        <AddAlbum />
        <style jsx>{`
.navigation {
  width: 15em;
  flex-shrink: 0;
  background-color: darkslategrey;
  height: 100%;
  overflow-y: auto;
}
        `}</style>
      </nav>
    )
  }
}

export default bind({ page: pageState }, Navigation)

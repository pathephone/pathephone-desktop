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
  background-color: darkslategrey;
}
        `}</style>
      </nav>
    )
  }
}

export default bind({ page: pageState }, Navigation)

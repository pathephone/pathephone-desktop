import React, { Component } from 'react'
import pageState from '../state/page'
import bind from '../utils/recallReact'
import AddAlbum from './AddAlbum'
import Donate from './Donate'
import './Navigation.css'

class Navigation extends Component {
  render () {
    return (
      <nav className='navigation izi-ys'>
        <div className='navigation__buttons izi-ys'>
          <AddAlbum />
          <Donate />
        </div>
      </nav>
    )
  }
}

export default bind({ page: pageState }, Navigation)

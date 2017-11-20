import React, { Component } from 'react'
import pageState from '../state/page'
import bind from '../utils/recallReact'
import pagesMap from './pagesMap'
import ModalAddAlbum from './ModalAddAlbum'

class Navigation extends Component {
  render () {
    const { page } = this.props
    return (
      <nav className='navigation izi-ys'>
        {
          pagesMap.map(({ name, title }) => (
            <button
              key={name}
              className={`navigation_item ${name === page.name ? 'active' : ''}`}
              onClick={
                () => pageState('CHANGE', name)
              }
            >
              {title}
            </button>
          ))
        }
        <ModalAddAlbum />
      </nav>
    )
  }
}

export default bind({ page: pageState }, Navigation)

import React from 'react'
import MdDrop from 'react-icons/lib/md/arrow-downward'
import DNDarea from '~components/DNDarea.jsx'

import './ShareDND.css'

class ShareDND extends React.Component {
  render () {
    const {
      hasProcessingScreen,
      hasActiveScreen,
      onDndChange
    } = this.state
    return (
      <div
        className='izi-padding izi-ys izi-fill-width'
      >
        <div className='dnd-album izi-padding izi-y izi-center izi-gray'>
          {
            hasProcessingScreen ? (
              <React.Fragment>
                <MdDrop className='sync-icon rotating' />
                <label className='izi-uppercase' >processing...</label>
              </React.Fragment>
            ) : hasActiveScreen ? (
              <DNDarea
                multiple
                onChange={onDndChange}
              >
                <MdDrop className='dnd-icon animated infinite bounce' />
                <label className='izi-uppercase'>drop here</label>
              </DNDarea>
            ) : (
              <label>You can just <b>drag and drop</b> album files here. All fields will be filled automatically if possible.</label>
            )
          }
        </div>
      </div>
    )
  }
}

export default ShareDND

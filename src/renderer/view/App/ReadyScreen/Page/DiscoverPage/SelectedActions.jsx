import React from 'react'
import propTypes from 'prop-types'

import MdPlay from 'react-icons/lib/md/play-arrow'
import MdAdd from 'react-icons/lib/md/playlist-add'
import MdDelete from 'react-icons/lib/md/delete'
import MdClear from 'react-icons/lib/md/clear'

import './SelectedActions.css'

class SelectedActions extends React.PureComponent {
  render () {
    const {
      selectedAlbumsCount,
      onPlaySelected,
      onAddSelected,
      onDeleteSelected,
      onCancelSelection
    } = this.props
    return (
      <div className='selected-actions izi-fill-width izi--gap izi-x'>
        <label
          className='selected-actions__count'
        >
          {
            `${selectedAlbumsCount} album${selectedAlbumsCount > 1 ? 's' : ''} selected`
          }
        </label>
        <button
          className='selected-actions__play square-button'
          onClick={onPlaySelected}
        >
          <MdPlay />
          <small>play</small>
        </button>
        <button
          className='selected-actions__add square-button'
          onClick={onAddSelected}
        >
          <MdAdd />
          <small>add to playlist</small>
        </button>
        <button
          className='selected-actions__delete square-button'
          onClick={onDeleteSelected}
        >
          <MdDelete />
          <small>delete</small>
        </button>
        <button
          className='selected-actions__cancel square-button'
          onClick={onCancelSelection}
        >
          <MdClear />
        </button>
      </div>
    )
  }
}

SelectedActions.propTypes = {
  selectedAlbumsCount: propTypes.number.isRequired,
  onPlaySelected: propTypes.func.isRequired,
  onAddSelected: propTypes.func.isRequired,
  onDeleteSelected: propTypes.func.isRequired,
  onCancelSelection: propTypes.func.isRequired
}

export default SelectedActions

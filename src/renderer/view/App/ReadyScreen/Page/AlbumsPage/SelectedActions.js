import React from 'react'
import MdPlay from 'react-icons/lib/md/play-arrow'
import MdAdd from 'react-icons/lib/md/playlist-add'
import MdDelete from 'react-icons/lib/md/delete'
import MdClear from 'react-icons/lib/md/clear'

import './SelectedActions.css'

const SelectedActions = ({ selectedNum, onPlay, onAdd, onDelete, onClear }) => {
  return (
    <div className='selected-actions izi-fill-width izi--gap izi-x'>
      <label
        className='selected-actions__count'
      >
        {
          `${selectedNum} album${selectedNum > 1 ? 's' : ''} selected`
        }
      </label>
      <button
        className='selected-actions__play square-button'
        onClick={onPlay}
      >
        <MdPlay />
        <small>play</small>
      </button>
      <button
        className='selected-actions__add square-button'
        onClick={onAdd}
      >
        <MdAdd />
        <small>add to playlist</small>
      </button>
      <button
        className='selected-actions__delete square-button'
        onClick={onDelete}
      >
        <MdDelete />
        <small>delete</small>
      </button>
      <button
        className='selected-actions__cancel square-button'
        onClick={onClear}
      >
        <MdClear />
      </button>
    </div>
  )
}

export default SelectedActions

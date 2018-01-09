import React from 'react'
import MdPlay from 'react-icons/lib/md/play-arrow'
import MdAdd from 'react-icons/lib/md/playlist-add'
import MdDelete from 'react-icons/lib/md/delete'
import MdClear from 'react-icons/lib/md/clear'

const SelectedActions = ({ selectedNum, onPlay, onAdd, onDelete, onClear }) => {
  return (
    <div className='selected-actions__bar izi-fill-width izi--gap izi-x'>
      <label
        className='selected-actions__count'
      >
        {
          `${selectedNum} album${selectedNum > 1 ? 's' : ''} selected`
        }
      </label>
      <button
        className='selected-actions__play'
        onClick={onPlay}
      >
        <MdPlay />
        <small>play</small>
      </button>
      <button
        className='selected-actions__add'
        onClick={onAdd}
      >
        <MdAdd />
        <small>add to playlist</small>
      </button>
      <button
        className='selected-actions__delete'
        onClick={onDelete}
      >
        <MdDelete />
        <small>delete</small>
      </button>
      <button
        className='cancel-button'
        onClick={onClear}
      >
        <MdClear />
      </button>
      <style jsx>{`
.cancel-button {
  margin-left: auto;
}
button > *:not(:first-child) {
  margin-left: 0.25em;
}
      `}</style>
    </div>
  )
}

export default SelectedActions

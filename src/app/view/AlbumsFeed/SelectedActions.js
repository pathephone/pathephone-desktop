import React from 'react'
import MdPlay from 'react-icons/lib/md/play-arrow'
import MdAdd from 'react-icons/lib/md/playlist-add'
import MdDelete from 'react-icons/lib/md/delete'
import MdClear from 'react-icons/lib/md/clear'

const SelectedActions = ({ selectedNum, onPlay, onAdd, onDelete, onClear }) => {
  return (
    <div className='izi-fill-width izi--gap izi-x'>
      <label>
        {
          `${selectedNum} album${selectedNum > 1 ? 's' : ''} selected`
        }
      </label>
      <button onClick={onPlay}>
        <MdPlay />
        <small>play</small>
      </button>
      <button onClick={onAdd}>
        <MdAdd />
        <small>add</small>
      </button>
      <button
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

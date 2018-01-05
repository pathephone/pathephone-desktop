import React from 'react'

const SelectedActions = ({ selectedNum, onPlay, onAdd, onDelete, onClear }) => {
  return (
    <div className='izi-fill-width izi--gap izi-x'>
      <label>
        {
          `${selectedNum} selected`
        }
      </label>
      <button onClick={onPlay}>
        play
      </button>
      <button onClick={onAdd}>
        add
      </button>
      <button onClick={onDelete}>
        delete
      </button>
      <button
        className='izi-margin-left-auto'
        onClick={onClear}
      >
        cancel
      </button>
    </div>
  )
}

export default SelectedActions

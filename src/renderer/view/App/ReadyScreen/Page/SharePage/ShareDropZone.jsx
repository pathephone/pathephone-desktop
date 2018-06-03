import React from 'react'
import propTypes from 'prop-types'

import MdDrop from 'react-icons/lib/md/arrow-downward'
import DNDarea from '~components/DNDarea.jsx'

const ShareDropZone = ({ onFilesSelect }) => {
  return (
    <DNDarea multiple onChange={onFilesSelect}>
      <div className='izi-fill izi-y izi-middle share-drop-zone'>
        <MdDrop className='dnd-icon animated infinite bounce' />
        <br />
        <label className='izi-uppercase izi-text-center'>select or drag and drop<br /> your album files</label>
      </div>
    </DNDarea>
  )
}

ShareDropZone.propTypes = {
  onFilesSelect: propTypes.func.isRequired
}

export default ShareDropZone

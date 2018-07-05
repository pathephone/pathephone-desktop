import React from 'react'
import propTypes from 'prop-types'
import MdDrop from 'react-icons/lib/md/arrow-downward'

import { E2E_SHARE_DROP_ZONE_ID } from '~data/e2eConstants'
import { LOCAL_SELECT_OR_DND } from '~data/i18nConstants'

import DNDarea from '~components/DNDarea.jsx'

import './ShareDropZone.css'

const ShareDropZone = ({ onFilesSelect }) => {
  return (
    <DNDarea id={E2E_SHARE_DROP_ZONE_ID} multiple onChange={onFilesSelect}>
      <div className='izi-fill izi-y izi-middle share-drop-zone'>
        <MdDrop className='dnd-icon animated infinite bounce' />
        <br />
        <label className='selectOrDND'>{LOCAL_SELECT_OR_DND}</label>
      </div>
    </DNDarea>
  )
}

ShareDropZone.propTypes = {
  onFilesSelect: propTypes.func.isRequired
}

export default ShareDropZone

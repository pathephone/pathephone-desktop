import React from 'react'
import propTypes from 'prop-types'

import DiskIcon from '~components/DiskIcon.jsx'

import './CoverPreview.css'

const CoverPreview = ({ coverSrc }) => {
  return (
    <div className='coverPreviewContainer'>
      {
        coverSrc ? (
          <img className='coverPreviewImage' src={coverSrc} />
        ) : (
          <DiskIcon />
        )
      }
    </div>
  )
}

CoverPreview.propTypes = {
  coverSrc: propTypes.string
}

export default CoverPreview

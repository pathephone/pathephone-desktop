import React from 'react'
import propTypes from 'prop-types'

import TrackControls from './TrackControls.jsx'

const TrackInput = ({ index, fileName, ...restProps }) => {
  return (
    <React.Fragment>
      <div className='izi-xs '>
        <div className='izi-ys izi-fill-width'>
          <input
            name={`tracks.${index}.artist`}
            placeholder='artist'
          />
          <input
            name={`tracks.${index}.title`}
            placeholder='title'
          />
          <label>
            {fileName}
          </label>
        </div>
        <TrackControls
          {...restProps}
        />
      </div>
      <hr key='separator' />
    </React.Fragment>
  )
}

TrackInput.propTypes = {
  index: propTypes.number.isRequired,
  fileName: propTypes.string.isRequired
}

export default TrackInput

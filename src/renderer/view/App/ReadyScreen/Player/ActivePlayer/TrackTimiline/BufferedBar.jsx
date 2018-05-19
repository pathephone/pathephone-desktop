import React from 'react'
import propTypes from 'prop-types'

const handleMapBuffer = ([ start, end ]) => {
  const style = {
    width: end - start + '%',
    left: start + '%'
  }
  return <div className='timeline__buffered-piece' style={style} key={start + '-' + end} />
}

const BufferedBar = ({ bufferedMap }) => (
  <div className='timeline__buffered-container'>
    {
      bufferedMap.map(handleMapBuffer)
    }
  </div>
)

BufferedBar.propTypes = {
  bufferedMap: propTypes.array.isRequired
}

export default BufferedBar

import React from 'react'
import propTypes from 'prop-types'

import AboutFieldset from './FormAlbum/AboutFieldset.jsx'
import TracklistFieldset from './FormAlbum/TracklistFieldset.jsx'

const FormAlbum = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <AboutFieldset />
      <TracklistFieldset />
      <button>save</button>
    </form>
  )
}

FormAlbum.propTypes = {
  handleSubmit: propTypes.func.isRequired
}

export default FormAlbum

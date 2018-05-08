import React from 'react'
import propTypes from 'prop-types'

import AboutFieldset from './FormAlbum/AboutFieldset.jsx'
import TracklistFieldset from './FormAlbum/TracklistFieldset.jsx'

const FormAlbum = ({ handleSubmit, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <AboutFieldset isDisabled={submitting} />
      <TracklistFieldset isDisabled={submitting} />
      <button
        disabled={submitting}
      >
        save
      </button>
    </form>
  )
}

FormAlbum.propTypes = {
  handleSubmit: propTypes.func.isRequired,
  submitting: propTypes.bool.isRequired
}

export default FormAlbum

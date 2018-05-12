import React from 'react'
import propTypes from 'prop-types'

import AboutFieldset from './ShareForm/AboutFieldset.jsx'
import TracklistFieldset from './ShareForm/TracklistFieldset.jsx'

const ShareForm = ({ handleSubmit, submitting }) => {
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

ShareForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
  submitting: propTypes.bool.isRequired
}

export default ShareForm

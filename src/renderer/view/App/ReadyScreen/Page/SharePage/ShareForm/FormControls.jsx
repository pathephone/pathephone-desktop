import React from 'react'
import propTypes from 'prop-types'

const FormControls = ({ isDisabled, onCancel }) => (
  <div className='shareFormControls'>
    <button
      className='shareFormSubmit'
      disabled={isDisabled}
    >
      save
    </button>
    <button
      type='button'
      className='shareFormCancel'
      disabled={isDisabled}
      onClick={onCancel}
    >
      cancel
    </button>
  </div>
)

FormControls.propTypes = {
  isDisabled: propTypes.bool.isRequired,
  onCancel: propTypes.func.isRequired
}

export default FormControls

import React from 'react'
import propTypes from 'prop-types'

const FormControls = ({ isDisabled, onCancelClick, onSubmitClick }) => (
  <div className='shareFormControls'>
    <button
      type='button'
      className='shareFormSubmit'
      disabled={isDisabled}
      onClick={onSubmitClick}
    >
      save
    </button>
    <button
      type='button'
      className='shareFormCancel'
      disabled={isDisabled}
      onClick={onCancelClick}
    >
      cancel
    </button>
  </div>
)

FormControls.propTypes = {
  isDisabled: propTypes.bool.isRequired,
  onCancelClick: propTypes.func.isRequired,
  onSubmitClick: propTypes.func.isRequired
}

export default FormControls

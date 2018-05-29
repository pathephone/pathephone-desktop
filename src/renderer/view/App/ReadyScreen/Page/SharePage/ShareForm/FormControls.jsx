import React from 'react'
import propTypes from 'prop-types'

import MdSave from 'react-icons/lib/md/save'
import MdCancel from 'react-icons/lib/md/cancel'

import CustomButton from '~components/CustomButton.jsx'

const FormControls = ({ isDisabled, onCancelClick, onSubmitClick }) => (
  <React.Fragment>
    <CustomButton
      type='button'
      className='shareFormSubmit'
      disabled={isDisabled}
      onClick={onSubmitClick}
    >
      <span>
        <MdSave /> <small>save</small>
      </span>
    </CustomButton>
    <CustomButton
      type='button'
      className='shareFormCancel'
      disabled={isDisabled}
      onClick={onCancelClick}
    >
      <MdCancel /> <small>cancel</small>
    </CustomButton>
  </React.Fragment>
)

FormControls.propTypes = {
  isDisabled: propTypes.bool.isRequired,
  onCancelClick: propTypes.func.isRequired,
  onSubmitClick: propTypes.func.isRequired
}

export default FormControls

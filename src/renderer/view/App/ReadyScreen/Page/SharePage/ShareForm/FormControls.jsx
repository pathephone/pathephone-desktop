import React from 'react';
import propTypes from 'prop-types';

import MdSave from 'react-icons/lib/md/save';
import MdCancel from 'react-icons/lib/md/cancel';
import MdReset from 'react-icons/lib/md/autorenew';

import CustomButton from '~components/CustomButton';

import i18n from '~shared/data/i18n';
import e2e from '~shared/data/e2e';

const FormControls = ({ isDisabled, onCancelClick, onResetClick }) => (
  <React.Fragment>
    <CustomButton
      className="shareFormSubmit"
      id={e2e.SHARE_FORM_SAVE_BUTTON_ID}
      disabled={isDisabled}
    >
      <span>
        <MdSave />
        {' '}
        <small>
          {i18n.SAVE}
        </small>
      </span>
    </CustomButton>
    <CustomButton
      type="button"
      id={e2e.SHARE_FORM_CANCEL_BUTTON_ID}
      className="shareFormCancel"
      disabled={isDisabled}
      onClick={onCancelClick}
    >
      <MdCancel />
      {' '}
      <small>
        {i18n.CANCEL}
      </small>
    </CustomButton>
    <CustomButton
      type="button"
      id={e2e.SHARE_FORM_RESET_BUTTON_ID}
      className="shareFormReset"
      disabled={isDisabled}
      onClick={onResetClick}
    >
      <MdReset />
      {' '}
      <small>
        {i18n.RESET}
      </small>
    </CustomButton>
  </React.Fragment>
);

FormControls.propTypes = {
  isDisabled: propTypes.bool.isRequired,
  onCancelClick: propTypes.func.isRequired,
  onResetClick: propTypes.func.isRequired,
};

export default FormControls;

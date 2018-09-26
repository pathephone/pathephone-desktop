import React from 'react';

import MdReset from 'react-icons/lib/md/autorenew';
import MdCancel from 'react-icons/lib/md/cancel';
import MdSave from 'react-icons/lib/md/save';

import CustomButton from '~components/CustomButton';
import e2e from '~shared/data/e2e';
import i18n from '~shared/data/i18n';

interface IProps {
  isDisabled: boolean;
  onCancelClick(): void;
  onResetClick(): void;
}

export const FormControls: React.SFC<IProps> = (
  props: IProps
): React.ReactElement<IProps> => (
  <React.Fragment>
    <CustomButton
      className='shareFormSubmit'
      id={e2e.SHARE_FORM_SAVE_BUTTON_ID}
      disabled={props.isDisabled}
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
      type='button'
      id={e2e.SHARE_FORM_CANCEL_BUTTON_ID}
      className='shareFormCancel'
      disabled={props.isDisabled}
      onClick={props.onCancelClick}
    >
      <MdCancel />
      {' '}
      <small>
        {i18n.CANCEL}
      </small>
    </CustomButton>
    <CustomButton
      type='button'
      id={e2e.SHARE_FORM_RESET_BUTTON_ID}
      className='shareFormReset'
      disabled={props.isDisabled}
      onClick={props.onResetClick}
    >
      <MdReset />
      {' '}
      <small>
        {i18n.RESET}
      </small>
    </CustomButton>
  </React.Fragment>
);

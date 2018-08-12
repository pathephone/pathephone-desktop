import React from 'react';
import propTypes from 'prop-types';

import CustomTextInput from '~components/CustomTextInput';

const CustomTextInputRedux = ({ input }) => (
  <CustomTextInput {...input} />
);

CustomTextInputRedux.propTypes = {
  input: propTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default CustomTextInputRedux;

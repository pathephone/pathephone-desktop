import React from 'react'
import propTypes from 'prop-types'

import CustomTextInput from '~components/CustomTextInput.jsx'

const CustomTextInputRedux = ({ input }) => (
  <CustomTextInput {...input} />
)

CustomTextInputRedux.propTypes = {
  input: propTypes.object.isRequired
}

export default CustomTextInputRedux

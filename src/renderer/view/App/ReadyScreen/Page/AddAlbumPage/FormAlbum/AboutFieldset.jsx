import React from 'react'
import propTypes from 'prop-types'
import { Field } from 'redux-form'

import CoverInput from './AboutFieldset/CoverInput.jsx'

const AboutFieldset = ({ isDisabled }) => (
  <fieldset disabled={isDisabled}>
    <legend>About album</legend>
    <div className='izi-xu'>
      <div className='izi-ys izi-fill-width izi-margin-top'>
        <Field
          name='title'
          placeholder='Album title'
          type='text'
          component='input'
        />
        <br />
        <Field
          name='artist'
          placeholder='Album artist'
          type='text'
          component='input'
        />
      </div>
      <Field
        name='cover'
        component={CoverInput}
      />
    </div>
  </fieldset>
)

AboutFieldset.propTypes = {
  isDisabled: propTypes.bool.isRequired
}

export default AboutFieldset

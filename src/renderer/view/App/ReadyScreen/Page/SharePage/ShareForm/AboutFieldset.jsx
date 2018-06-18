import React from 'react'
import propTypes from 'prop-types'

import CoverPreview from '~components/CoverPreview.jsx'
import CustomTextInput from '~components/CustomTextInput.jsx'

import './AboutFieldset.css'
import { E2E_SHARE_FORM_COVER_PREVIEW_ID, E2E_SHARE_FORM_TITLE_INPUT_ID, E2E_SHARE_FORM_ARTIST_INPUT_ID, E2E_SHARE_FORM_COVER_INPUT_ID, E2E_SHARE_FORM_COVER_LABEL_ID } from '~data/e2eConstants'

class AboutFieldset extends React.PureComponent {
  render () {
    const { isDisabled, coverSrc } = this.props
    return (
      <fieldset disabled={isDisabled} className='fieldset shareFormAbout'>
        <div className='izi-x'>
          <div className='aboutTextInputs'>
            <label>Title<br />
              <CustomTextInput
                id={E2E_SHARE_FORM_TITLE_INPUT_ID}
                type='text'
                placeholder='Album title'
                name='title'
              />
            </label>
            <br />
            <label>Artist<br />
              <CustomTextInput
                id={E2E_SHARE_FORM_ARTIST_INPUT_ID}
                type='text'
                placeholder='Album artist'
                name='artist'
              />
            </label>
          </div>
          <input
            id={E2E_SHARE_FORM_COVER_INPUT_ID}
            className='coverInput hiddenButReachable'
            name='cover'
            type='file'
            accept='image/*'
          />
          <label
            id={E2E_SHARE_FORM_COVER_LABEL_ID}
            htmlFor={E2E_SHARE_FORM_COVER_INPUT_ID}
            className='coverLabel'
          >
            <CoverPreview
              id={E2E_SHARE_FORM_COVER_PREVIEW_ID}
              coverSrc={coverSrc}
            />
          </label>
        </div>
      </fieldset>
    )
  }
}

AboutFieldset.propTypes = {
  isDisabled: propTypes.bool.isRequired,
  coverSrc: propTypes.string
}

export default AboutFieldset

import React from 'react'
import propTypes from 'prop-types'

import CoverPreview from '~components/CoverPreview.jsx'
import CustomTextInput from '~components/CustomTextInput.jsx'

import {
  E2E_SHARE_FORM_COVER_LABEL_ID,
  E2E_SHARE_FORM_TITLE_INPUT_ID,
  E2E_SHARE_FORM_ARTIST_INPUT_ID,
  E2E_SHARE_FORM_COVER_INPUT_ID
} from '~data/e2eConstants'
import {
  LOCAL_TITLE,
  LOCAL_ARTIST,
  LOCAL_ALBUM_ARTIST,
  LOCAL_ALBUM_TITLE
} from '~data/i18nConstants'

import './AboutFieldset.css'

class AboutFieldset extends React.PureComponent {
  render () {
    const { isDisabled, coverSrc } = this.props
    return (
      <fieldset disabled={isDisabled} className='fieldset shareFormAbout'>
        <div className='izi-x'>
          <div className='aboutTextInputs'>
            <label>{LOCAL_TITLE}<br />
              <CustomTextInput
                id={E2E_SHARE_FORM_TITLE_INPUT_ID}
                type='text'
                placeholder={LOCAL_ALBUM_TITLE}
                name='title'
              />
            </label>
            <br />
            <label>{LOCAL_ARTIST}<br />
              <CustomTextInput
                id={E2E_SHARE_FORM_ARTIST_INPUT_ID}
                type='text'
                placeholder={LOCAL_ALBUM_ARTIST}
                name='artist'
              />
            </label>
          </div>
          <input
            id={E2E_SHARE_FORM_COVER_INPUT_ID}
            className='coverInput hiddenButReachable'
            name='cover.image'
            type='file'
            accept='image/*'
          />
          <label
            id={E2E_SHARE_FORM_COVER_LABEL_ID}
            htmlFor={E2E_SHARE_FORM_COVER_INPUT_ID}
            className='coverLabel'
          >
            <CoverPreview
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

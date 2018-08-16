import React from 'react';
import propTypes from 'prop-types';

import CoverPreview from '~components/CoverPreview';
import CustomTextInput from '~components/CustomTextInput';

import {
  ids
} from '~data';
import {
  LOCAL_TITLE,
  LOCAL_ARTIST,
  LOCAL_ALBUM_ARTIST,
  LOCAL_ALBUM_TITLE,
} from '~data/i18nConstants';

import './AboutFieldset.css';

class AboutFieldset extends React.PureComponent {
  render() {
    const { isDisabled, coverSrc } = this.props;
    return (
      <fieldset disabled={isDisabled} className="shareFormAboutFieldset">
        <div className="shareFormAboutFieldsetInline">
          <div className="aboutTextInputs">
            <label htmlFor={ids.SHARE_FORM_TITLE_INPUT_ID}>
              {LOCAL_TITLE}
              <br />
              <CustomTextInput
                id={ids.SHARE_FORM_TITLE_INPUT_ID}
                type="text"
                placeholder={LOCAL_ALBUM_TITLE}
                name="title"
              />
            </label>
            <br />
            <label htmlFor={ids.SHARE_FORM_ARTIST_INPUT_ID}>
              {LOCAL_ARTIST}
              <br />
              <CustomTextInput
                id={ids.SHARE_FORM_ARTIST_INPUT_ID}
                type="text"
                placeholder={LOCAL_ALBUM_ARTIST}
                name="artist"
              />
            </label>
          </div>
          <div className="coverInputContainer">
            <input
              id={ids.SHARE_FORM_COVER_INPUT_ID}
              className="coverInput"
              name="cover.image"
              type="file"
              accept="image/*"
            />
            <label
              id={ids.SHARE_FORM_COVER_LABEL_ID}
              htmlFor={ids.SHARE_FORM_COVER_INPUT_ID}
              className="coverLabel"
            >
              <CoverPreview
                coverSrc={coverSrc}
              />
            </label>
          </div>
        </div>
      </fieldset>
    );
  }
}

AboutFieldset.defaultProps = {
  coverSrc: null,
};

AboutFieldset.propTypes = {
  isDisabled: propTypes.bool.isRequired,
  coverSrc: propTypes.string,
};

export default AboutFieldset;

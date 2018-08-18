import React from 'react';
import propTypes from 'prop-types';

import CoverPreview from '~components/CoverPreview';
import CustomTextInput from '~components/CustomTextInput';

import i18n from '~shared/data/i18n';
import e2e from '~shared/data/e2e';

import './AboutFieldset.css';

class AboutFieldset extends React.PureComponent {
  render() {
    const { isDisabled, coverSrc } = this.props;
    return (
      <fieldset disabled={isDisabled} className="shareFormAboutFieldset">
        <div className="shareFormAboutFieldsetInline">
          <div className="aboutTextInputs">
            <label htmlFor={e2e.SHARE_FORM_TITLE_INPUT_ID}>
              {i18n.TITLE}
              <br />
              <CustomTextInput
                id={e2e.SHARE_FORM_TITLE_INPUT_ID}
                type="text"
                placeholder={i18n.ALBUM_TITLE}
                name="title"
              />
            </label>
            <br />
            <label htmlFor={e2e.SHARE_FORM_ARTIST_INPUT_ID}>
              {i18n.ARTIST}
              <br />
              <CustomTextInput
                id={e2e.SHARE_FORM_ARTIST_INPUT_ID}
                type="text"
                placeholder={i18n.ALBUM_ARTIST}
                name="artist"
              />
            </label>
          </div>
          <div className="coverInputContainer">
            <input
              id={e2e.SHARE_FORM_COVER_INPUT_ID}
              className="coverInput"
              name="cover.image"
              type="file"
              accept="image/*"
            />
            <label
              id={e2e.SHARE_FORM_COVER_LABEL_ID}
              htmlFor={e2e.SHARE_FORM_COVER_INPUT_ID}
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

import React from 'react'
import propTypes from 'prop-types'

import CoverPreview from '~components/CoverPreview.jsx'
import CustomTextInput from '~components/CustomTextInput.jsx'

import withIpfsGateway from '~utils/withIpfsGateway'

import './AboutFieldset.css'

class AboutFieldset extends React.PureComponent {
  state = {
    fileCoverSrc: null,
    ipfsCoverSrc: null
  }
  static getDerivedStateFromProps ({ cover }) {
    let fileCoverSrc = null
    let ipfsCoverSrc = null
    if (cover instanceof File) {
      fileCoverSrc = URL.createObjectURL(cover)
    }
    if (typeof cover === 'string') {
      ipfsCoverSrc = withIpfsGateway(cover)
    }
    return { fileCoverSrc, ipfsCoverSrc }
  }
  componentWillUnmount () {
    if (this.state.fileCoverSrc) {
      URL.revokeObjectURL(this.state.fileCoverSrc)
    }
  }
  render () {
    const { isDisabled } = this.props
    return (
      <fieldset disabled={isDisabled} className='fieldset shareFormAbout'>
        <div className='izi-x'>
          <div className='aboutTextInputs'>
            <label>Title<br />
              <CustomTextInput
                type='text'
                placeholder='Album title'
                name='title'
              />
            </label>
            <br />
            <label>Artist<br />
              <CustomTextInput
                type='text'
                placeholder='Album artist'
                name='artist'
              />
            </label>
          </div>
          <input
            id='share-form__input-cover'
            className='coverInput hiddenButReachable'
            name='cover'
            type='file'
            accept='image/*'
          />
          <label htmlFor='share-form__input-cover' className='coverLabel'>
            <CoverPreview coverSrc={this.state.fileCoverSrc || this.state.ipfsCoverSrc} />
          </label>
        </div>
      </fieldset>
    )
  }
}

AboutFieldset.propTypes = {
  isDisabled: propTypes.bool.isRequired
  // cover: propTypes.oneOfType([
  //   propTypes.string,
  //   propTypes.object
  // ])
}

export default AboutFieldset

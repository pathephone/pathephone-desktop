import React from 'react'
import propTypes from 'prop-types'

import CoverPreview from '~components/CoverPreview.jsx'

import './AboutFieldset.css'
import withIpfsGateway from '~utils/withIpfsGateway'

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
      <fieldset disabled={isDisabled}>
        <legend>About album</legend>
        <div className='izi-xu'>
          <div className='izi-ys izi-fill-width izi-margin-top'>
            <label>Title</label>
            <input
              type='text'
              placeholder='Album title'
              name='title'
            />
            <br />
            <label>Artist</label>
            <input
              type='text'
              placeholder='Album title'
              name='artist'
            />
          </div>
          <label className='coverLabel'>
            <CoverPreview coverSrc={this.state.fileCoverSrc || this.state.ipfsCoverSrc} />
            <input
              hidden
              name='cover'
              type='file'
              accept='image/*'
            />
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

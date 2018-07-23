import React from 'react'
import propTypes from 'prop-types'
import NoCover from '~components/DiskIcon.jsx'

import './CoverImage.css'

class CoverImage extends React.PureComponent {
  state = {
    isLoaded: false
  }
  handleImageLoadEnd = () => {
    this.setState({ isLoaded: false })
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.src !== this.props.src) {
      this.setState({ isLoaded: false })
    }
  }
  render () {
    const { src } = this.props
    const { isLoaded } = this.state
    return (
      <React.Fragment>
        <img
          className='album__cover-image'
          src={src}
          onLoad={this.handleImageLoad}
        />
        {
          !isLoaded && (
            <NoCover />
          )
        }
      </React.Fragment>
    )
  }
}

CoverImage.propTypes = {
  src: propTypes.string.isRequired
}

export default CoverImage

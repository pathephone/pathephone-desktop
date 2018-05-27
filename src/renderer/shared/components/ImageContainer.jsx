import React from 'react'

const ImageContainer = ({ image, ...rest }) => (
  <div
    {...rest}
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  />
)

export default ImageContainer

import React from 'react'

class CustomAudio extends React.Component {
  audio = new Audio()
  componentWillMount () {
    const { src } = this.props
    this.audio.src = src
  }
}

export default CustomAudio

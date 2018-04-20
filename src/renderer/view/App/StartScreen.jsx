import React from 'react'
import propTypes from 'prop-types'

import ProgressBar from './StartScreen/ProgressBar'
import ErrorView from './StartScreen/ErrorView'

import './StartScreen.css'

const StartScreen = ({ errorMessage, infoMessage, progress }) => (
  <div className='start-screen izi-fill izi-middle izi-y'>
    <ProgressBar message={infoMessage} percent={progress} />
    {
      errorMessage && (
        <ErrorView message={errorMessage} />
      )
    }
  </div>
)

StartScreen.propTypes = {
  errorMessage: propTypes.string.isRequired,
  progress: propTypes.number.isRequired,
  infoMessage: propTypes.string
}

export default StartScreen

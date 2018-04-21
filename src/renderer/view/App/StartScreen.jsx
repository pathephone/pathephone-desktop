import React from 'react'
import propTypes from 'prop-types'

import ErrorMessage from '~components/ErrorMessage.jsx'

import ProgressBar from './StartScreen/ProgressBar.jsx'

import './StartScreen.css'

const StartScreen = ({ errorMessage, infoMessage, progress }) => (
  <div className='start-screen izi-fill izi-middle izi-y'>
    <ProgressBar message={infoMessage} percent={progress} />
    {
      errorMessage && (
        <ErrorMessage message={errorMessage} />
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

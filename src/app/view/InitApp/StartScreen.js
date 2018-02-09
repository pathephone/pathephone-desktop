import React from 'react'

import ProgressBar from './StartScreen/ProgressBar'
import ErrorView from './StartScreen/ErrorView'

import './StartScreen/StartScreen.css'

const StartScreen = ({ stage, message, error }) => {
  const finalStage = 2
  const progress = stage / finalStage * 100
  return (
    <div className='start-screen izi-fill izi-middle izi-y'>
      <ProgressBar progress={progress} message={message} />
      {
        error && (
          <ErrorView error={error} />
        )
      }
    </div>
  )
}

export default StartScreen

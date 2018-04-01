import React from 'react'

import ProgressBar from './StartScreen/ProgressBar'
import ErrorView from './StartScreen/ErrorView'

import './StartScreen/StartScreen.css'

const StartScreen = ({ ready, message, error }) => {
  return (
    <div className='start-screen izi-fill izi-middle izi-y'>
      <ProgressBar progress={ready} message={message} />
      {
        error && (
          <ErrorView error={error} />
        )
      }
    </div>
  )
}

export default StartScreen

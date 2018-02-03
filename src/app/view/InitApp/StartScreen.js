import React from 'react'

import ProgressBar from './StartScreen/ProgressBar'
import ErrorView from './StartScreen/ErrorView'

import './StartScreen/StartScreen.css'

const StartScreen = ({ stage, payload }) => {
  const finalStage = 2
  const progress = stage / finalStage * 100
  return (
    <div className='start-screen izi-fill izi-middle izi-y'>
      <ProgressBar progress={progress} message={payload && payload.message} />
      {
        payload && payload.error && (
          <ErrorView error={payload.error} />
        )
      }
    </div>
  )
}

export default StartScreen

import React from 'react'
import { render } from 'react-dom'
import RootConnected from './view/Root'
import './css/izi.css'
import './css/global.css'
import './css/animate.css'

render(
  <RootConnected />,
  document.getElementById('mount-point')
)

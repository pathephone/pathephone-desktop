import React from 'react'
import { render } from 'react-dom'
import Root from './view/Root'
import './css/izi/index.global.scss'
import './css/index.global.scss'

render(
  <Root />,
  document.getElementById('mount-point')
)

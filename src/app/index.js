import './css/izi.css'
import './css/global.css'
import './css/palette.css'
import './css/animate.css'

import React from 'react'
import { render } from 'react-dom'
import Root from './view/Root'

render(
  <Root />,
  document.getElementById('mount-point')
)

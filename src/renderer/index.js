import './view/css/izi.css'
import './view/css/global.css'
import './view/css/palette.css'
import './view/css/animate.css'

import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './utils/store'

import AppConnected from './view/AppConnected'

render(
  <Provider store={store}>
    <HashRouter>
      <AppConnected />
    </HashRouter>
  </Provider>,
  document.getElementById('mount-point')
)

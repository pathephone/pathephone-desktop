import './css/izi.css'
import './css/global.css'
import './css/palette.css'
import './css/animate.css'

import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import history from './history'

import AppConnected from './view/AppConnected'

render(
  <Provider store={store}>
    <Router history={history}>
      <AppConnected />
    </Router>
  </Provider>,
  document.getElementById('mount-point')
)

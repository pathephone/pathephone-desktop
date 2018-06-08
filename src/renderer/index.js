import './css/izi.css'
import './css/global.css'
import './css/palette.css'
import './css/animate.css'

import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import AppConnected from './view/AppConnected'

import store, { persistor } from './store'

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <AppConnected />
      </HashRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('mount-point')
)

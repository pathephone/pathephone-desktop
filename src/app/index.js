import './css/izi.css'
import './css/global.css'
import './css/palette.css'
import './css/animate.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import Root from './view/Root'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('mount-point')
)

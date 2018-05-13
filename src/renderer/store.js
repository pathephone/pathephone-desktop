import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reduxLogger from 'redux-logger'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, reduxLogger)
)

sagaMiddleware.run(rootSaga)

export default store

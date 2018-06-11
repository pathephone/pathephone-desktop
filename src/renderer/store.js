import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reduxLogger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { ENV_DEVELOPMENT } from '~data/constants'
import { ENVIRONMENT } from '#config'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [ 'volume', 'playlist' ]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

if (ENVIRONMENT === ENV_DEVELOPMENT) {
  middlewares.push(reduxLogger)
}

const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
)

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export default store

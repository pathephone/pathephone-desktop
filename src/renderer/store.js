import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reduxLogger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

import { IS_DEVELOPMENT } from '#config'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [ 'volume', 'playlist', 'legalAgreement' ]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

if (IS_DEVELOPMENT) {
  middlewares.push(reduxLogger)
}

const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
)

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export default store

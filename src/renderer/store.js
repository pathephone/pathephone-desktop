import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reduxLogger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [ 'volume', 'playlist' ]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware, reduxLogger)
)

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export default store

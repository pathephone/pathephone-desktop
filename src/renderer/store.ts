import { applyMiddleware, createStore, Store } from 'redux';
import reduxLogger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

import { rootReducer } from '~renderer/rootReducer';
import { rootSaga } from '~renderer/rootSaga';
import { IS_DEVELOPMENT } from '~shared/config';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['volume', 'playlist', 'legalAgreement']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware: SagaMiddleware<{}> = createSagaMiddleware();

let middlewares;

if (IS_DEVELOPMENT) {
  middlewares = [
    sagaMiddleware,
    reduxLogger
  ]
} else {
  middlewares = [
    sagaMiddleware
  ]
}

const store: Store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;

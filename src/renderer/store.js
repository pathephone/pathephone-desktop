import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reduxLogger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { IS_DEVELOPMENT } from '~shared/config';
import { rootReducer } from '~renderer/rootReducer';
import { rootSaga } from '~renderer/rootSaga';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['volume', 'playlist', 'legalAgreement'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (IS_DEVELOPMENT) {
  middlewares.push(reduxLogger);
}

const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares),
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;

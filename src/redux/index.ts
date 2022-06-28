import { configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core';
import {reducers} from './reducers';
import rootSaga from './sagas';

const SagaMiddleware=createSagaMiddleware()
  const store = configureStore({
    reducer: reducers,
    middleware: [ SagaMiddleware]
   });
 SagaMiddleware.run(rootSaga)

export default store

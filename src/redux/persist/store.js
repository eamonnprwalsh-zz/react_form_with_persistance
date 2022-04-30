import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import reduxExpire from './reduxExpire';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import formReducer from '../../components/forms/formSlice';

const key = ['primary'];

const persistConfig = {
  key,
  storage,
  transforms: [
    reduxExpire('form', {
      persistedAtKey: 'form_cache',
      expireMs: 5000,
      expiredState: { value: {} },
    }),
  ],
};

const reducers = combineReducers({ form: formReducer });
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(thunk));

export default store;

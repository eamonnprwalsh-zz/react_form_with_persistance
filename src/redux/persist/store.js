import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import reduxExpire from './reduxExpire';
import thunk from 'redux-thunk';
import { CookieStorage } from 'redux-persist-cookie-storage'
import Cookies from 'cookies-js'

import applicationFormReducer from '../../components/forms/applicationFormSlice';

const key = ['primary'];


const persistConfig = {
  key,
  storage: new CookieStorage(Cookies/*, options */),
  transforms: [
    reduxExpire('applicationForm', {
      persistedAtKey: 'applicationForm_cache',
      expireMs: 5000,
      expiredState: { value: {} },
    }),
  ],
};

const reducers = combineReducers({ applicationForm: applicationFormReducer });
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(thunk));

export default store;

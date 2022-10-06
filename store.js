import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import user from './reducers/user';
import hashTags from './reducers/hashTags';

const persistorConfig = {
  key: 'hack-a-tweet',
  storage,
};

const reducers = {
  user,
  hashTags,
};

export const store = configureStore({
  reducer: persistReducer(persistorConfig, combineReducers(reducers)),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

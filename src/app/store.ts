import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import personReducer from '../features/personSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, personReducer);

export const store = configureStore({
  reducer: {
    person: persistedReducer,
  },
});

export const persistor = persistStore(store);

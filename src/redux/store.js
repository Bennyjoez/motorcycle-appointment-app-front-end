import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';

const persistConfig = { key: 'motorcycleApp', storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({ reducer: { state: persistedReducer } });
const persistor = persistStore(store);
export { store, persistor };

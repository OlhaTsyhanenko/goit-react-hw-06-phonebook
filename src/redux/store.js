// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
// import reducer from './contacts/contacts-reducer';
import storage from 'redux-persist/lib/storage';
import contactsReducer from "./contacts/contacts-reducer";
import { persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';

// const store = createStore(rootReducer, composeWithDevTools());

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
}

const store = configureStore({
    reducer: {
        contacts: persistReducer(contactsPersistConfig, contactsReducer),
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(logger),
    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default {store, persistor};


import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { todos as todosService } from '~/services/services.js';

import { reducer as todosReducer } from './todos/todos.js';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, todosReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: {
        extraArgument: {
          todosService,
        },
      },
      serializableCheck: false,
    });
  },
});

const persistor = persistStore(store);

export { persistor, store };

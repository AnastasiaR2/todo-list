import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { todos as todosService } from '~/services/services.js';
import { reducer as todosReducer } from './todos/todos.js';

const persistConfig = {
  key: 'root',
  storage,
}

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
    })
  },
});

const persistor = persistStore(store);

export { store, persistor };


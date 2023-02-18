import { configureStore } from '@reduxjs/toolkit';

import { booksApi } from './features/books-slice';
import {rootReducer} from './reducers/root-reducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


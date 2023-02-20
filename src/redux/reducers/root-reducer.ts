import { combineReducers } from '@reduxjs/toolkit';

import { booksApi } from '../features/books-slice';

import { interfaceReducer } from './reducer-interface';


export const rootReducer = combineReducers({
  interface: interfaceReducer,
  [booksApi.reducerPath]: booksApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;


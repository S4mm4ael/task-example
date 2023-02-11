import { combineReducers } from '@reduxjs/toolkit';

import { interfaceReducer } from './reducer-interface';


export const rootReducer = combineReducers({
  interfaceReducer
});

export type RootState = ReturnType<typeof rootReducer>;


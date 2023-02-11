/* eslint-disable no-param-reassign */
import { createAction, createReducer } from '@reduxjs/toolkit';

import { initialState } from '../initial-state';

const isBurgerOpen = createAction<boolean>('IS_BURGER_OPEN');
const isGenreMenuOpen = createAction<boolean>('IS_GENRE_MENU_OPEN');

export const interfaceReducer = createReducer(initialState, (builder) => {
  builder.addCase(isBurgerOpen, (state, action) => {
      state.isBurgerOpen = action.payload
});
  builder.addCase(isGenreMenuOpen, (state, action) => {
    if (action.payload != null) {state.isGenreMenuOpen = action.payload;}
    else if ( state.isGenreMenuOpen) {
      state.isGenreMenuOpen = false;
    } else {
      state.isGenreMenuOpen = true;
    }

  });

});


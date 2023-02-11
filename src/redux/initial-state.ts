interface CounterState {
  isBurgerOpen: boolean;
  isGenreMenuOpen: boolean;
}

export const initialState: CounterState = {
  isBurgerOpen: false,
  isGenreMenuOpen: false,
};

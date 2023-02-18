import { Book } from '../shared/types.books';

interface CounterState {
  isBurgerOpen: boolean;
  isGenreMenuOpen: boolean;
  isFetchError: boolean;
  isLoading: boolean;
  booksData: Book[];
}

export const initialState: CounterState = {
  isBurgerOpen: false,
  isGenreMenuOpen: false,
  isFetchError: false,
  isLoading:true,
  booksData: [],
};

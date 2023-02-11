import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { AppDispatch } from '../../../redux/store';

import styles from '../navigation-list.module.css';

type CategoryProps = {
  genreEng: string;
  genre: string;
  count: number;
};

export function CategoryItem({ genreEng, genre, count }: CategoryProps) {
  const location = useLocation();
  const dispatch: AppDispatch = useDispatch();

  return (
    <React.Fragment>
      <pre
        className={`${styles.NavigationList__booksItem} ${
          location.pathname === `/books/:${genreEng}` && `${styles.NavigationList__booksItem_active}`
        }`}
      >
        <Link onClick={() => dispatch({ type: 'IS_BURGER_OPEN', payload: false })} to={`/books/:${genreEng}`}>
          {genre}
        </Link>
      </pre>
      <span
        className={`${styles.NavigationList__booksItemCount}
    ${
      genreEng === 'humor'
        ? styles.NavigationList__booksItemCount_lower
        : styles.NavigationList__booksItemCount_standart
    }
    ${
      genreEng === 'nonfiction'
        ? styles.NavigationList__booksItemCount_lower
        : styles.NavigationList__booksItemCount_standart
    }`}
      >
        {count}
      </span>
    </React.Fragment>
  );
}

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import strokeDown from '../../assets/svg/stroke-down.svg';
import strokeUp from '../../assets/svg/stroke-up.svg';
import { AppDispatch, RootState } from '../../redux/store';

import { categories } from './categories';
import { CategoryItem } from './category-item';

import styles from './navigation-list.module.css';

export function NavigationList() {
  const dispatch: AppDispatch = useDispatch();
  const location = useLocation();
  const isBurgerOpen: boolean = useSelector((state: RootState) => state.interfaceReducer.isBurgerOpen);
  const isMenuOpen: boolean = useSelector((state: RootState) => state.interfaceReducer.isGenreMenuOpen);
  const isLoading: boolean = useSelector((state: RootState) => state.interfaceReducer.isLoading);
  const [isDesktopSize, setDesktopSize] = useState(window.innerWidth > 945);

  useEffect(() => {
    const updateMedia = () => {
      setDesktopSize(window.innerWidth > 945);
    };

    window.addEventListener('resize', updateMedia);

    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <div
      data-test-id='burger-navigation'
      className={classNames(
        styles.NavigationList,
        { [styles.NavigationList_active]: isBurgerOpen },
        { [styles.NavigationList_short]: isMenuOpen },
      )}
    >
      <ul className={styles.NavigationList__list}>
        <li className={styles.NavigationList__item}>
          <div
            className={`${styles.NavigationList__subtitle} ${location.pathname === '/books' && `${styles.NavigationList__title_active}`
              }`}
          >
            {' '}
            <Link
              data-test-id={isDesktopSize ? 'navigation-showcase' : 'burger-showcase'}
              to='/books'
              onClick={() => {
                dispatch({ type: 'IS_GENRE_MENU_OPEN' });
              }}
            >
              Витрина книг
            </Link>
            <button
              onClick={() => dispatch({ type: 'IS_GENRE_MENU_OPEN' })}
              type='button'
              className={styles.NavigationList__stroke}
            >
              <img src={isMenuOpen ? strokeUp : strokeDown} alt='stroke' />
            </button>
          </div>
        </li>
        <li className={styles.NavigationList__item}>
          <ul
            className={classNames(styles.NavigationList__booksList, {
              [styles.NavigationList__booksList_hidden]: isMenuOpen || isLoading,
            })}
          >
            <Link
              to='/books'
              data-test-id={isDesktopSize ? 'navigation-books' : 'burger-books'}
              onClick={() => dispatch({ type: 'IS_BURGER_OPEN', payload: false })}
              className={`${styles.NavigationList__subtitle} ${location.pathname === '/books' && `${styles.NavigationList__booksItem_active}`
                }`}
            >
              Все книги
            </Link>

            {categories.map((el) => (
              <li key={el.genreEng + el.count}>
                <CategoryItem genreEng={el.genreEng} genre={el.genre} count={el.count} />
              </li>
            ))}
          </ul>
        </li>
        <li className={styles.NavigationList__item}>
          <Link
            data-test-id={isDesktopSize ? 'navigation-terms' : 'burger-terms'}
            to='/terms'
            onClick={() => {
              dispatch({ type: 'IS_BURGER_OPEN', payload: false });
              dispatch({ type: 'IS_GENRE_MENU_OPEN', payload: true });
            }}
            className={`${styles.NavigationList__subtitle} ${location.pathname === '/terms' && `${styles.NavigationList__title_active}`
              }`}
          >
            Правила пользования
          </Link>
        </li>
        <li className={styles.NavigationList__item}>
          <Link
            data-test-id={isDesktopSize ? 'navigation-contract' : 'burger-contract'}
            to='/contract'
            onClick={() => {
              dispatch({ type: 'IS_BURGER_OPEN', payload: false });
              dispatch({ type: 'IS_GENRE_MENU_OPEN', payload: true });
            }}
            className={`${styles.NavigationList__subtitle} ${location.pathname === '/contract' && `${styles.NavigationList__title_active}`
              }`}
          >
            Договор оферты
          </Link>
        </li>
        <li className={`${styles.NavigationList__item} ${styles.NavigationList__item_empty}`} />
        <li className={styles.NavigationList__item}>
          <Link
            to='/Profile'
            onClick={() => {
              dispatch({ type: 'IS_BURGER_OPEN', payload: false });
              dispatch({ type: 'IS_GENRE_MENU_OPEN', payload: false });
            }}
            className={`${styles.NavigationList__subtitle} ${location.pathname === '/profile' && `${styles.NavigationList__title_active}`
              }`}
          >
            Профиль
          </Link>
        </li>
        <li className={styles.NavigationList__item}>
          <Link
            to='/exit'
            onClick={() => {
              dispatch({ type: 'IS_BURGER_OPEN', payload: false });
              dispatch({ type: 'IS_GENRE_MENU_OPEN', payload: false });
            }}
            className={styles.NavigationList__subtitle}
          >
            Выход
          </Link>
        </li>
      </ul>
    </div>
  );
}

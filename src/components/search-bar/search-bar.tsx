import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import cross from '../../assets/svg/cross.svg';
import search from '../../assets/svg/search.svg';
import sort from '../../assets/svg/sort.svg';
import { SearchBarProps } from '../../shared/types.interface';

import styles from './search-bar.module.css';

export function SearchBar({ isSearching, changeView }: SearchBarProps) {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 660);
  const updateMedia = () => {
    setDesktop(window.innerWidth > 660);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);

    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <div className={classNames(styles.SearchBar, { [styles.SearchBar_active]: isSearching })}>
      {!isDesktop && (
        <React.Fragment>
          <button
            className={classNames(
              styles.SearchBar__button,
              { [styles.SearchBar__button_active]: isSearching },
              { [styles.SearchBar__input_hidden]: isSearching }
            )}
            data-test-id='button-search-open'
            type='button'
            onClick={() => changeView(true)}
          >
            <img className={styles.SearchBar__icon} src={search} alt='search-icon' />
          </button>

          <div className={styles.SearchBar__wrapper}>
            <input
              data-test-id='input-search'
              className={classNames(styles.SearchBar__input, { [styles.SearchBar__input_hidden]: !isSearching })}
              type='text'
              placeholder='Поиск книги или автора…'
            />
            <button
              onClick={() => changeView(false)}
              data-test-id='button-search-close'
              type='button'
              className={classNames(styles.SearchBar__inputImg, { [styles.SearchBar__input_hidden]: !isSearching })}
            >
              <img src={cross} alt='close' />
            </button>
          </div>
        </React.Fragment>
      )}
      {isDesktop && (
        <React.Fragment>
          <img data-test-id='button-search-open' className={styles.SearchBar__icon} src={search} alt='search-icon' />
          <input
            data-test-id='input-search'
            className={styles.SearchBar__input}
            type='text'
            placeholder={isDesktop ? 'Поиск книги или автора…' : ''}
          />
        </React.Fragment>
      )}
      {!isSearching && (
        <div className={styles.SearchBar__sortWrapper}>
          <img className={styles.SearchBar__iconSort} src={sort} alt='sort-icon' />
          <select className={styles.SearchBar__sort} name='sorting' id='sorting'>
            {!isDesktop && <option value=''> </option>}
            <option value='rating'>По рейтингу</option>
          </select>
        </div>
      )}
    </div>
  );
}

import React, { useState } from 'react';
import classNames from 'classnames';

import { SearchProps } from '../../shared/types.interface';
import { ButtonList } from '../button-menu-view-list';
import { ButtonWindow } from '../button-menu-view-window';
import { SearchBar } from '../search-bar/search-bar';

import styles from './search.module.css';

export function Search({ isList, changeView }: SearchProps) {
  const [isSearching, setIsSearching] = useState<boolean>(false);

  return (
    <div className={classNames(styles.Search, { [styles.SearchBar_active]: isSearching })}>
      {isSearching ? (
        <SearchBar isSearching={isSearching} changeView={setIsSearching} />
      ) : (
        <React.Fragment>
          {' '}
          <SearchBar isSearching={isSearching} changeView={setIsSearching} />
          <div className={styles.Search__buttons}>
            <ButtonWindow isList={isList} changeView={changeView} />
            <ButtonList isList={isList} changeView={changeView} />
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

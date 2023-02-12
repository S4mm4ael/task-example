import { useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { Card } from '../../components/card';
import { NavigationList } from '../../components/navigation-list';
import { Search } from '../../components/search';
import { RootState } from '../../redux/store';
import data from '../../utils/data.json';

import styles from './main-page.module.css';

export function MainPage() {
  const [isListView, setIsList] = useState<boolean>(false);
  const isBurgerOpen: boolean = useSelector((state: RootState) => state.interfaceReducer.isBurgerOpen);

  const renderBooks = () =>
    data.books.map((book) => (
      <Card
        key={book.id}
        id={book.id}
        image={book.image}
        author={book.author}
        title={book.title}
        rating={book.rating}
        year={book.year}
        isBooked={book.isBooked}
        bookedTill={book.bookedTill}
        isListView={isListView}
      />
    ));

  return (
    <section className={classNames(styles.MainPage, { [styles.MainPage_noScroll]: isBurgerOpen })}>
      <div className={styles.MainPage__left}>
        <NavigationList />
      </div>
      <div className={styles.MainPage__right}>
        <Search isListView={isListView} changeView={setIsList} />
        <div
          className={
            isListView ? `${styles.MainPage__books} ${styles.MainPage__books_list}` : `${styles.MainPage__books}`
          }
        >
          {renderBooks()}
        </div>
      </div>
    </section>
  );
}

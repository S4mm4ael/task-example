import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { Card } from '../../components/card';
import { NavigationList } from '../../components/navigation-list';
import { Search } from '../../components/search';
import { useGetAllBooksQuery } from '../../redux/features/books-slice';
import { AppDispatch, RootState } from '../../redux/store';
import { Books } from '../../shared/types.books';
import dataMock from '../../utils/data.json';

import styles from './main-page.module.css';

export function MainPage() {
  const dispatch: AppDispatch = useDispatch();

  const [isListView, setIsList] = useState<boolean>(false);
  const isBurgerOpen: boolean = useSelector((state: RootState) => state.interface.isBurgerOpen);

  const { data, error, isLoading } = useGetAllBooksQuery('');

  useEffect(() => {
    if (!isLoading) {
      dispatch({ type: 'IS_LOADING', payload: false });
    }
    if (isLoading) {
      dispatch({ type: 'IS_LOADING', payload: true });
    }
    if (error) {
      dispatch({ type: 'IS_FETCH_ERROR', payload: true });
      // eslint-disable-next-line no-console
      console.log(error);
    }
  });

  const renderBooks = () =>
    dataMock.books.map((book) => (
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

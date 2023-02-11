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
  const [isList, setIsList] = useState<boolean>(false);
  const isBurgerOpen: boolean = useSelector((state: RootState) => state.interfaceReducer.isBurgerOpen);

  function renderBooksCards() {
    const array = data.books;

    return array.map((el) => (
      <Card
        key={Math.random()}
        id={el.id}
        image={el.image}
        author={el.author}
        title={el.title}
        rating={el.rating}
        year={el.year}
        isBooked={el.isBooked}
        bookedTill={el.bookedTill}
        isList={isList}
      />
    ));
  }

  return (
    <section className={classNames(styles.MainPage, { [styles.MainPage_noScroll]: isBurgerOpen })}>
      <div className={styles.MainPage__left}>
        <NavigationList />
      </div>
      <div className={styles.MainPage__right}>
        <Search isList={isList} changeView={setIsList} />
        <div
          className={isList ? `${styles.MainPage__books} ${styles.MainPage__books_list}` : `${styles.MainPage__books}`}
        >
          {renderBooksCards()}
        </div>
      </div>
    </section>
  );
}

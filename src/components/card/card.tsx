import { Link } from 'react-router-dom';

import empty from '../../assets/img/book-cover-none.jpg';
import emptyList from '../../assets/img/book-cover-none-list.jpg';
import { renderStars } from '../../shared/render-stars';
import { BookCard } from '../../shared/types.books';

import styles from './card.module.css';

export function Card(props: BookCard) {
  const { id, image, authors, title, issueYear, rating, booking, categories } = props.bookItem;
  const genre = categories[0];

  function Truncate(string: string, amount: number) {
    return string.length > amount ? `${string.substring(0, amount - 3)}...` : string;
  }

  if (props.isListView) {
    return (
      <Link to={`/books/${genre}/${id}`}>
        {' '}
        <div id={id} className={`${styles.Card} ${styles.Card_list}`} data-test-id='card'>
          {image && <img src={`https://strapi.cleverland.by${image.url}`} alt='book-cover' width='120px' />}
          {!image && <img src={emptyList} alt='book-cover' height='170px' />}
          <div className={`${styles.Card__wrapper} ${styles.Card__wrapperList}`}>
            <div className={`${styles.Card__content} ${styles.Card__content_list}`}>
              <h5 className={`${styles.Card__title} ${styles.Card__title_list}`}>{Truncate(title, 85)}</h5>
              <p className={`${styles.Card__authors_list} ${styles.Card__authors}`}>
                {authors.map((author) => `${author}`)}
                <span className={styles.Card__year}>, {issueYear}</span>
              </p>
              <div className={`${styles.Card__wrapper} ${styles.Card__wrapper_list} ${styles.Card__wrapper_rating}`}>
                <div className={`${styles.Card__rating} ${styles.Card__rating_list}`}>
                  {rating ? renderStars(rating) : 'ещё нет оценок'}
                </div>
                {!booking && (
                  <button type='button' className={`${styles.Card__bookIt} ${styles.Card__bookIt_list}`}>
                    Забронировать
                  </button>
                )}
                {booking?.order && !booking.dateOrder && (
                  <button type='button' className={`${styles.Card__bookIt} ${styles.Card__bookIt_bookedList}`}>
                    Забронирована
                  </button>
                )}
                {booking && booking.dateOrder && (
                  <button type='button' className={`${styles.Card__bookIt} ${styles.Card__bookIt_unavailable}`}>
                    Занята до {booking.dateOrder.slice(8, 10)}.{booking.dateOrder.slice(5, 7)}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/books/${genre}/${id}`}>
      {' '}
      <div id={id} className={styles.Card} data-test-id='card'>
        <div className={styles.Card__image}>
          {image && <img src={`https://strapi.cleverland.by${image.url}`} alt='book-cover' height='174px' />}
          {!image && <img src={empty} alt='book-cover' />}
        </div>
        <div className={styles.Card__rating}>{rating ? renderStars(rating) : 'ещё нет оценок'}</div>
        <div className={styles.Card__content}>
          <h5 className={styles.Card__title}>{Truncate(title, 41)}</h5>
          <p className={styles.Card__authors}>
            {authors.map((author) => `${author}`)}, <span className={styles.Card__year}>{issueYear}</span>
          </p>
        </div>
        {!booking && (
          <button type='button' className={styles.Card__bookIt}>
            Забронировать
          </button>
        )}
        {booking?.order && !booking.dateOrder && (
          <button type='button' className={`${styles.Card__bookIt} ${styles.Card__bookIt_booked}`}>
            Забронирована
          </button>
        )}
        {booking && booking.dateOrder && (
          <button type='button' className={`${styles.Card__bookIt} ${styles.Card__bookIt_unavailable}`}>
            Занята до {booking.dateOrder.slice(8, 10)}.{booking.dateOrder.slice(5, 7)}
          </button>
        )}
      </div>
    </Link>
  );
}

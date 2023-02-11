import { Link } from 'react-router-dom';

import empty from '../../assets/img/book-cover-none.jpg';
import emptyList from '../../assets/img/book-cover-none-list.jpg';
import cover from '../../assets/img/book-cover-small.jpg';
import coverList from '../../assets/img/book-cover-small-list.jpg';
import { renderStars } from '../../shared/render-stars';
import { CardProps } from '../../shared/types.data';

import styles from './card.module.css';

export function Card(props: CardProps) {
  if (props.isList) {
    return (
      <Link to={`/books/business/${props.image.toString()}`}>
        {' '}
        <div id={props.id} className={`${styles.Card} ${styles.Card_list}`} data-test-id='card'>
          <img src={props.image !== 0 ? coverList : emptyList} alt='book-cover' height='170px' />
          <div className={`${styles.Card__wrapper} ${styles.Card__wrapperList}`}>
            <div className={`${styles.Card__content} ${styles.Card__content_list}`}>
              <h5 className={`${styles.Card__title} ${styles.Card__title_list}`}>{props.title}</h5>
              <p className={`${styles.Card__authors_list} ${styles.Card__authors}`}>
                {props.author !== '' ? `${props.author} ,` : ''}
                <span className={styles.Card__year}>{props.year}</span>
              </p>
              <div className={`${styles.Card__wrapper} ${styles.Card__wrapper_list} ${styles.Card__wrapper_rating}`}>
                <div className={`${styles.Card__rating} ${styles.Card__rating_list}`}>
                  {props.rating !== 0 && renderStars(props.rating)}
                  {props.rating === 0 && 'ещё нет оценок'}
                </div>
                {!props.isBooked && (
                  <button type='button' className={`${styles.Card__bookIt} ${styles.Card__bookIt_list}`}>
                    Забронировать
                  </button>
                )}
                {props.bookedTill === '0' && (
                  <button type='button' className={`${styles.Card__bookIt} ${styles.Card__bookIt_bookedList}`}>
                    Забронирована
                  </button>
                )}
                {props.isBooked && props.bookedTill !== '0' && (
                  <button type='button' className={`${styles.Card__bookIt} ${styles.Card__bookIt_unavailable}`}>
                    Занята до {props.bookedTill}
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
    <Link to={`/books/business/${props.image.toString()}`}>
      {' '}
      <div id={props.id} className={styles.Card} data-test-id='card'>
        <div className={styles.Card__image}>
          <img src={props.image ? cover : empty} alt='book-cover' />
        </div>
        <div className={styles.Card__rating}>
          {props.rating !== 0 && renderStars(props.rating)}
          {props.rating === 0 && 'ещё нет оценок'}
        </div>
        <div className={styles.Card__content}>
          <h5 className={styles.Card__title}>{props.title}</h5>
          <p className={styles.Card__authors}>
            {props.author}, <span className={styles.Card__year}>{props.year}</span>
          </p>
        </div>
        {!props.isBooked && (
          <button type='button' className={styles.Card__bookIt}>
            Забронировать
          </button>
        )}
        {props.bookedTill === '0' && (
          <button type='button' className={`${styles.Card__bookIt} ${styles.Card__bookIt_booked}`}>
            Забронирована
          </button>
        )}
        {props.isBooked && props.bookedTill !== '0' && (
          <button type='button' className={`${styles.Card__bookIt} ${styles.Card__bookIt_unavailable}`}>
            Занята до {props.bookedTill}
          </button>
        )}
      </div>
    </Link>
  );
}

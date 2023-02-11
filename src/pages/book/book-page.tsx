import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import strokeDown from '../../assets/svg/stroke-down-black.svg';
import strokeUp from '../../assets/svg/stroke-up-black.svg';
import { Comment } from '../../components/comment/comment';
import { NavigationList } from '../../components/navigation-list';
import { SliderBook } from '../../components/slider-book';
import { RootState } from '../../redux/store';
import { renderStars } from '../../shared/render-stars';
import data from '../../utils/comments.json';

import styles from './book-page.module.css';

export function BookPage() {
  const [isDesktopSize, setDesktopSize] = useState(window.innerWidth > 768);
  const [imageCount, setImageCount] = useState(4);
  const isBurgerOpen: boolean = useSelector((state: RootState) => state.interfaceReducer.isBurgerOpen);
  const location = useLocation();
  const updateMedia = () => {
    setDesktopSize(window.innerWidth > 768);
  };

  const [isCommentsOpen, setIsCommentsOpen] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener('resize', updateMedia);

    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  useEffect(() => {
    if (location.pathname === '/books/business/0') {
      setImageCount(0);
    }
    if (location.pathname === '/books/business/1') {
      setImageCount(1);
    }
    if (location.pathname === '/books/business/4') {
      setImageCount(4);
    }
  }, [location.pathname]);

  function renderComments() {
    const array = data.comments;

    return array.map((el) => (
      <Comment key={Math.random()} avatar={undefined} name={el.name} rating={el.rating} date={el.date} text={el.text} />
    ));
  }

  return (
    <section className={styles.BookPage}>
      {isBurgerOpen && <NavigationList />}
      <div className={styles.BookPage__route}>
        {isDesktopSize ? (
          <React.Fragment>
            <Link to='/'>
              <span>Бизнес книги</span>
            </Link>{' '}
            /<span>Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих</span>
          </React.Fragment>
        ) : (
          <div className={styles.BookPage__route_tablet}>
            <Link to='/'>
              <span>Бизнес книги</span>
            </Link>{' '}
            / Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих
          </div>
        )}
      </div>
      <div className={styles.BookPage__book}>
        {isDesktopSize ? (
          <div className={styles.BookPage__bookWrapper}>
            <div className={styles.BookPage__slider}>
              <SliderBook isDesktopSize={isDesktopSize} imageCount={imageCount} />
            </div>
            <div className={styles.BookPage__text}>
              <h1 className={styles.BookPage__title}>
                Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих
              </h1>
              <div className={styles.BookPage__authors}>
                <p>Адитья Бхаргава,</p>
                <span>2019</span>
              </div>
              <button type='button' className={`${styles.BookPage__bookIt}`}>
                Забронировать
              </button>
              <div className={styles.BookPage__about}>
                <h5>О книге</h5>
                <article className={styles.BookPage__article}>
                  <p>
                    Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были
                    кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию
                    гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли
                    вы тратить на это свое время?
                  </p>
                  <p>
                    Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А
                    грокать алгоритмы — это веселое и увлекательное занятие.
                  </p>
                </article>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.BookPage__bookWrapper}>
            <div className={styles.BookPage__bookWrapper_tablet}>
              <div className={styles.BookPage__slider}>
                <SliderBook isDesktopSize={isDesktopSize} imageCount={imageCount} />
              </div>
              <div className={styles.BookPage__bookWrapperRight_tablet}>
                <h1 className={styles.BookPage__title}>
                  Грокаем алгоритмы. <br /> Иллюстрированное пособие для программистов и <br />
                  любопытствующих
                </h1>
                <div className={styles.BookPage__authors}>
                  <p>Адитья Бхаргава,</p>
                  <span>2019</span>
                </div>
                <button type='button' className={`${styles.BookPage__bookIt}`}>
                  Забронировать
                </button>
              </div>
            </div>
            <div className={styles.BookPage__text}>
              <div className={styles.BookPage__about}>
                <h5>О книге</h5>
                <article className={styles.BookPage__article}>
                  <p>
                    Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были
                    кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию
                    гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли
                    вы тратить на это свое время?
                  </p>
                  <p>
                    Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А
                    грокать алгоритмы — это веселое и увлекательное занятие.
                  </p>
                </article>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.BookPage__properties}>
        <div className={styles.BookPage__rating}>
          <h5>Рейтинг</h5>
          <div className={styles.BookPage__ratingStars}>
            {renderStars(4)} <span>4.3</span>
          </div>
        </div>
        <div className={styles.BookPage__details}>
          <h5>Подробная информация</h5>
          <div className={styles.BookPage__detailsBook}>
            <div className={styles.BookPage__detailsLeft}>
              <ul className={styles.BookPage__detailsList}>
                <li className={styles.BookPage__listItem}>
                  <span className={styles.BookPage__listItemProperty}>Издательство</span>
                  <span className={styles.BookPage__listItemPValue}>Питер</span>
                </li>
                <li className={styles.BookPage__listItem}>
                  <span className={styles.BookPage__listItemProperty}>Год издания</span>
                  <span className={styles.BookPage__listItemPValue}>2019</span>
                </li>
                <li className={styles.BookPage__listItem}>
                  <span className={styles.BookPage__listItemProperty}>Страниц</span>
                  <span className={styles.BookPage__listItemPValue}>288</span>
                </li>
                <li className={styles.BookPage__listItem}>
                  <span className={styles.BookPage__listItemProperty}>Переплёт</span>
                  <span className={styles.BookPage__listItemPValue}>Мягкая обложка</span>
                </li>
                <li className={styles.BookPage__listItem}>
                  <span className={styles.BookPage__listItemProperty}>Формат</span>
                  <span className={styles.BookPage__listItemPValue}>70х100</span>
                </li>
              </ul>
            </div>
            <div className={styles.BookPage__detailsRight}>
              <ul className={styles.BookPage__detailsList}>
                <li className={styles.BookPage__listItem}>
                  <span className={styles.BookPage__listItemProperty}>Жанр</span>
                  <span className={styles.BookPage__listItemPValue}>Компьютерная литература</span>
                </li>
                <li className={styles.BookPage__listItem}>
                  <span className={styles.BookPage__listItemProperty}>Вес</span>
                  <span className={styles.BookPage__listItemPValue}>370 г</span>
                </li>
                <li className={styles.BookPage__listItem}>
                  <span className={styles.BookPage__listItemProperty}>ISBN</span>
                  <span className={styles.BookPage__listItemPValue}>978-5-4461-0923-4</span>
                </li>
                <li className={styles.BookPage__listItem}>
                  <span className={styles.BookPage__listItemProperty}>Изготовитель</span>
                  <span className={styles.BookPage__listItemPValue}>
                    ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.BookPage__comments}>
          <div className={styles.BookPage__commentsHeader}>
            <h5>
              Отзывы <span className={styles.BookPage__commentsCount}>{data.comments.length}</span>
            </h5>
            <button
              data-test-id='button-hide-reviews'
              onClick={() => (isCommentsOpen ? setIsCommentsOpen(false) : setIsCommentsOpen(true))}
              type='button'
              className={styles.BookPage__stroke}
            >
              <img src={isCommentsOpen ? strokeUp : strokeDown} alt='stroke' />
            </button>
          </div>
          <div className={styles.BookPage__commentSection}>
            <ul className={styles.BookPage__commentList}>{isCommentsOpen && renderComments()}</ul>
            <button data-test-id='button-rating' type='button' className={`${styles.BookPage__bookIt}`}>
              Оценить книгу
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

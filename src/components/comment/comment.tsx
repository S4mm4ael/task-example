import avatarDefault from '../../assets/png/avatar-comments.png';
import { renderStars } from '../../shared/render-stars';
import { CommentProps } from '../../shared/types.interface';

import styles from './comment.module.css';

export function Comment({ avatar, name, rating, date, text }: CommentProps) {
  return (
    <li className={styles.Comment__commentItem}>
      <div className={styles.Comment__user}>
        <img src={avatar ? `${avatar}` : avatarDefault} alt='avatar' />
        <div className={styles.Comment__userInfo}>
          <span>{name}</span>
          <span>{date.slice(0, 10)}</span>
        </div>
      </div>
      <div className={styles.Comment__ratingStars}>{renderStars(rating)}</div>
      <p className={styles.Comment__commentText}>{text}</p>
    </li>
  );
}

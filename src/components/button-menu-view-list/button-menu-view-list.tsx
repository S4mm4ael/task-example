import icon from '../../assets/svg/list-icon.svg';
import iconInactive from '../../assets/svg/list-icon-inactive.svg';
import { SearchProps } from '../../shared/types.interface';

import styles from './button-menu-view-list.module.css';

export function ButtonList({ isList, changeView }: SearchProps) {
  return (
    <div className={styles.ButtonList} data-test-id='button-menu-view-list'>
      <button
        className={styles.ButtonList__button}
        type='button'
        onClick={() => {
          changeView(true);
        }}
      >
        <img className={styles.ButtonList__img} src={isList ? icon : iconInactive} alt='icon' />
      </button>
    </div>
  );
}

import icon from '../../assets/svg/window-icon.svg';
import iconInactive from '../../assets/svg/window-icon-inactive.svg';
import { SearchProps } from '../../shared/types.interface';

import styles from './button-menu-view-window.module.css';

export function ButtonWindow({ isList, changeView }: SearchProps) {
  return (
    <div className={styles.ButtonWindow} data-test-id='button-menu-view-window'>
      <button
        className={styles.ButtonWindow__button}
        type='button'
        onClick={() => {
          changeView(false);
        }}
      >
        <img className={styles.ButtonWindow__img} src={isList ? iconInactive : icon} alt='icon' />
      </button>
    </div>
  );
}

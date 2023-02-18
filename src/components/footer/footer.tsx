import { useSelector } from 'react-redux';
import classNames from 'classnames';

import facebook from '../../assets/svg/social/facebook.svg';
import linked from '../../assets/svg/social/in.svg';
import instagram from '../../assets/svg/social/instagram.svg';
import vk from '../../assets/svg/social/vk.svg';
import { RootState } from '../../redux/store';

import styles from './footer.module.css';

export function Footer() {
  const isBurgerOpen: boolean = useSelector((state: RootState) => state.interface.isBurgerOpen);

  return (
    <div className={classNames(styles.Footer, { [styles.Footer_noScroll]: isBurgerOpen })}>
      <div className={styles.Footer__credits}>
        <p className={styles.Footer__text}>© 2020-2023 Cleverland. Все права защищены.</p>
      </div>
      <div className={styles.Footer__social}>
        <ul className={styles.Footer__socialList}>
          <li className={styles.Footer__socialListItem}>
            <img src={facebook} alt='fb' />
          </li>
          <li className={styles.Footer__socialListItem}>
            <img src={instagram} alt='inst' />
          </li>
          <li className={styles.Footer__socialListItem}>
            <img src={vk} alt='vk' />
          </li>
          <li className={styles.Footer__socialListItem}>
            <img src={linked} alt='in' />
          </li>
        </ul>
      </div>
    </div>
  );
}

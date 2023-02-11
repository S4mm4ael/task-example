import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { AppDispatch, RootState } from '../../redux/store';

import styles from './burger.module.css';

export function Burger() {
  const dispatch: AppDispatch = useDispatch();
  const isBurgerOpen: boolean = useSelector((state: RootState) => state.interfaceReducer.isBurgerOpen);

  const handleClick = () => {
    if (!isBurgerOpen) {
      dispatch({ type: 'IS_BURGER_OPEN', payload: true });
    }
    if (isBurgerOpen) {
      dispatch({ type: 'IS_BURGER_OPEN', payload: false });
    }
  };

  return (
    <button
      type='button'
      id='burger-button'
      data-test-id='button-burger'
      className={classNames(styles.Burger, { [styles.Burger_open]: isBurgerOpen })}
      onClick={() => handleClick()}
    >
      <span className={styles.Burger__line} />
      <span className={styles.Burger__line} />
      <span className={styles.Burger__line} />
    </button>
  );
}

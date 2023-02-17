
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../redux/store';

import styles from './burger-shadow.module.css';

export function BurgerShadow() {

  const dispatch: AppDispatch = useDispatch();

  return (
    <div
      role='presentation'
      className={styles.BurgerShadow}
      onClick={() => dispatch({ type: 'IS_BURGER_OPEN', payload: false })}
    />
  )

}

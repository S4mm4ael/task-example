import cross from '../../assets/svg/cross-black.svg';
import warning from '../../assets/svg/warning-circle.svg';

import styles from './modal-error.module.css';

export function ModalError() {
  return (
    <div className={styles.ModalError} data-test-id='error'>
      <img src={warning} alt='warning' />
      <p>Что-то пошло не так. Обновите страницу через некоторое время.</p>
      <button className={styles.ModalError__close} type='button'>
        {' '}
        <img src={cross} alt='close' />
      </button>
    </div>
  );
}

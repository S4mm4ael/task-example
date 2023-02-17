

import styles from './loading-screen.module.css';

export function LoadingScreen() {

  return (
    <div
      role='presentation'
      className={styles.LoadingScreen}
      onClick={() => console.log(1)}
    />
  )

}

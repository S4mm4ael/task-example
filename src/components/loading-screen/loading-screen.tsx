// eslint-disable-next-line import/no-extraneous-dependencies
import Lottie from 'lottie-react';

import loader from './loader.json';

import styles from './loading-screen.module.css';

export function LoadingScreen() {


  return (
    <div role='presentation' className={styles.LoadingScreen} data-test-id='loader'>
      <div>
        <Lottie animationData={loader} height={69} width={69} />
      </div>
    </div>
  );
}


import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames';

import { RootState } from '../../redux/store';
import { BurgerShadow } from '../burger-shadow';
import { Footer } from '../footer';
import { Header } from '../header';
import { LoadingScreen } from '../loading-screen';
import { ModalError } from '../modal-error';

export function Layout() {
  const isBurgerOpen: boolean = useSelector((state: RootState) => state.interfaceReducer.isBurgerOpen);
  const isFetchError: boolean = useSelector((state: RootState) => state.interfaceReducer.isFetchError);
  const isLoading: boolean = useSelector((state: RootState) => state.interfaceReducer.isLoading);

  return (
    <div className='layout'>
      {isBurgerOpen && <BurgerShadow />}
      {isFetchError && <ModalError />}
      {isLoading && <LoadingScreen />}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

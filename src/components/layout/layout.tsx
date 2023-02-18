import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { RootState } from '../../redux/store';
import { BurgerShadow } from '../burger-shadow';
import { Footer } from '../footer';
import { Header } from '../header';
import { LoadingScreen } from '../loading-screen';
import { ModalError } from '../modal-error';

export function Layout() {
  const isBurgerOpen: boolean = useSelector((state: RootState) => state.interface.isBurgerOpen);
  const isFetchError: boolean = useSelector((state: RootState) => state.interface.isFetchError);
  const isLoading: boolean = useSelector((state: RootState) => state.interface.isLoading);

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

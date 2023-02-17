
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { RootState } from '../../redux/store';
import { BurgerShadow } from '../burger-shadow';
import { Footer } from '../footer';
import { Header } from '../header';
import { ModalError } from '../modal-error';

export function Layout() {
  const isBurgerOpen: boolean = useSelector((state: RootState) => state.interfaceReducer.isBurgerOpen);

  return (
    <div className='layout'>
      {isBurgerOpen && <BurgerShadow />}
      <ModalError />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

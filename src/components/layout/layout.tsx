import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { AppDispatch, RootState } from '../../redux/store';
import { Footer } from '../footer';
import { Header } from '../header';

export function Layout() {
  const dispatch: AppDispatch = useDispatch();
  const isBurgerOpen: boolean = useSelector((state: RootState) => state.interfaceReducer.isBurgerOpen);

  return (
    <div className='layout'>
      {isBurgerOpen && <div role="presentation" className="Layout__shadowed" onClick={() => dispatch({ type: 'IS_BURGER_OPEN', payload: false })} > </div>}
      <Header />
      <Outlet />
      <Footer />

      {
        !isBurgerOpen &&
        <React.Fragment>
          <Header />
          <Outlet />
          <Footer />
        </React.Fragment>
      }
    </div >)

}


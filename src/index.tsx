import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './components/layout';
import { LayoutMainPage } from './components/layout-main-page';
import { ScrollToTop } from './hooks/scroll-to-top';
import { BookPage } from './pages/book';
import { MainPage } from './pages/main';
import { ProfilePage } from './pages/profile';
import { TermsPage } from './pages/terms';
import { store } from './redux/store';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<LayoutMainPage />}>
              <Route path='/' element={<Navigate to='/books' />} />
              <Route path='/books' element={<MainPage />} />
              <Route path='/books/:category' element={<MainPage />} />
              <Route path='/terms' element={<TermsPage contentView='terms' />} />
              <Route path='/contract' element={<TermsPage contentView='contract' />} />
            </Route>
            <Route path='/books/:category/:bookId' element={<BookPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Route>
        </Routes>
      </Provider>
    </HashRouter>
  </React.StrictMode>
);

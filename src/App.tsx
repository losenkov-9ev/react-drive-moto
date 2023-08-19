import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { MainLayout } from './layouts/MainLayout';

import './css/normalize.css';
import './css/fonts.css';
import './css/style.css';
import './css/media.css';
import 'swiper/css';

import { fetchCategories } from './redux/categories/asyncActions';
import { useAppDispatch } from './redux/store';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const getCategories = async () => {
    dispatch(fetchCategories());
  };

  React.useEffect(() => {
    getCategories();
  }, []);

  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
      </Route>
    </Routes>
  );
};

export default App;

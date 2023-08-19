import React from 'react';

import { PopularProducts } from '../components/PopularProducts';
import { Banner } from '../components/Banner';
import { Sale } from '../components/Sale';
import { Search } from '../components/Search';
import { Categories } from '../components/Categories';
import { BuyWithProduct } from '../components/BuyWithProduct';

export const Home: React.FC = () => {
  return (
    <>
      <Sale />
      <Search />
      <Categories />
      <PopularProducts />
      <Banner />
      <BuyWithProduct />
    </>
  );
};

import React from 'react';
import { TProduct } from './Product';
import { ProductsSlider } from './ProductsSlider';
import axios from 'axios';

export const BuyWithProduct: React.FC = () => {
  const [buyWithProducts, setBuyWithProducts] = React.useState<TProduct[]>([]);

  React.useEffect(() => {
    axios
      .get(
        'https://068d2234e821ae6e.mokky.dev/jet_ski?page=1&limit=5&_select=availability,name,price,image',
      )
      .then(({ data }) => {
        setBuyWithProducts(data.items);
      });
  }, []);

  return (
    <section className="products">
      <div className="container">
        <div className="products__inner">
          <h3 className="prouct__title">С этим товаром покупают</h3>
          <div className="tabs-container products__container">
            <div
              id="popular-tab-1"
              className="tabs-content products__content tabs tabs-content--active">
              <div className="productSlider">
                <ProductsSlider products={buyWithProducts} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

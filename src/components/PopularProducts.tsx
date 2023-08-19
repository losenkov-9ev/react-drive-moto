import React from 'react';

import { TProduct } from './Product';
import { ProductsSlider } from './ProductsSlider';
import { fetchProducts } from '../utils/api';
import { TCategoryItem } from './CategoryItem';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCategories } from '../redux/categories/slelectors';
import { ECategoriesStatus } from '../redux/categories/types';
import { CategoryLoader } from './loaders/CategoryLoader';

export const PopularProducts: React.FC = () => {
  const [products, setProducts] = React.useState<TProduct[]>([]);
  const { categories, status } = useSelector(selectCategories);

  const [activeCategoryId, setActiveCategoryId] = React.useState<string>('2');
  const [activeCategory, setActiveCategory] = React.useState<string>('jet_ski');

  React.useEffect(() => {
    async function fetchData() {
      const productsResponse = await fetchProducts(activeCategory, {
        page: 1,
        limit: 5,
        _select: 'availability,name,image,id,price',
      });
      setProducts(productsResponse);
    }
    fetchData();
  }, [activeCategory]);

  const onCategoryTabClick = (e: React.MouseEvent<HTMLAnchorElement>, category: TCategoryItem) => {
    e.preventDefault();

    setActiveCategoryId(category.id);
    setActiveCategory(category.category);
  };

  return (
    <section className="products">
      <div className="container">
        <div className="products__inner">
          <h3 className="prouct__title">Популярные товары</h3>
          <div className="tabs-wrapper">
            <div className="tabs products__tabs mobile-overflow">
              {status === ECategoriesStatus.LOADING ? (
                <CategoryLoader count={6}>
                  <a className={classNames('tab', 'products__tab')}>Загрузка...</a>
                </CategoryLoader>
              ) : (
                categories.map((category, index) => (
                  <a
                    key={`${category.name}_${index}`}
                    href="#"
                    className={classNames('tab', 'products__tab', {
                      'tab--active': category.id === activeCategoryId,
                    })}
                    onClick={(e) => onCategoryTabClick(e, category)}>
                    {category.name}
                  </a>
                ))
              )}
            </div>
          </div>
          <div className="tabs-container products__container">
            <div className="tabs-content products__content tabs tabs-content--active">
              <ProductsSlider products={products} />
            </div>
          </div>
        </div>
      </div>
      <div className="product__more">
        <Link className="product__more-link" to="catalog">
          Показать ещё
        </Link>
      </div>
    </section>
  );
};

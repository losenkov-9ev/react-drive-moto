import React from 'react';
import { useSelector } from 'react-redux';
import { CategoryItem } from './CategoryItem';
import { ECategoriesStatus } from '../redux/categories/types';
import { CategorySkeleton } from './skeletons/CategorySkeleton';
import { selectCategories } from '../redux/categories/slelectors';
import { CategoryLoader } from './loaders/CategoryLoader';

export const Categories: React.FC = () => {
  const { categories, status } = useSelector(selectCategories);

  return (
    <section className="categories page-section">
      <div className="container">
        <div className="categories__inner">
          {status === ECategoriesStatus.LOADING ? (
            <CategoryLoader count={6}>
              <CategorySkeleton />
            </CategoryLoader>
          ) : (
            categories.map((category, index) => (
              <CategoryItem key={`${category.image}_${index}`} {...category} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

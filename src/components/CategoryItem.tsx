import React from 'react';
import { Link } from 'react-router-dom';

export type TCategoryItem = {
  id: string;
  image: string;
  name: string;
  category: string;
};

export const CategoryItem: React.FC<TCategoryItem> = ({ image, name, category }) => {
  return (
    <Link className="categories__item" to="catalog">
      <div className="categories__item-info">
        <h4 className="categories__item-title">{name}</h4>
        <p className="categories__item-text">Подробнее</p>
      </div>
      <div className="categories__item-img">
        <img src={image} alt="" />
      </div>
    </Link>
  );
};

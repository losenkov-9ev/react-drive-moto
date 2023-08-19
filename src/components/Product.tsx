import React from 'react';
import cart from '../assets/images/basket-white.svg';

export type TProduct = {
  id: string;
  image: string;
  name: string;
  price: string;
  availability: string;
};

export const Product: React.FC<TProduct> = ({ id, image, name, price, availability }) => {
  return (
    <div className={`productItem__wrapper ${!availability && 'productItem__notAvailable'}`}>
      <button className="productItem__favorite"></button>
      <button className="productItem__basket">
        <img src={cart} alt="" />
      </button>
      <a className="productItem__notifyText_link" href="#">
        <span>Сообщить о поступлении</span>
      </a>
      <a className="productItem " href="#">
        <p className="productItem__hovertext">Посмотреть товар</p>
        <img className="productItem__img" src={image} alt="" />
        <h4 className="productItem__title">{name}</h4>
        <p className="price productItem__price">{price} ₽</p>
        <p className="productItem__notifyText">Нет в наличии</p>
      </a>
    </div>
  );
};

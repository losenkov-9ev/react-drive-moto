import React from 'react';
import saleImage from '../assets/images/contant/sale-1.png';

export const SaleItem: React.FC = () => {
  return (
    <a className="banner-sectionItem sale-item" href="#">
      <div className="sale-item-top">
        <p className="sale-itemInfo">Акция</p>
        <div className="sale-itemPrice">
          <div className="price sale-itemPrice-new">190 000</div>
          <div className="price sale-itemPrice-old">225 000</div>
        </div>
      </div>
      <img className="sale-itemImg" src={saleImage} alt="" />
      <h5 className="sale-item-title">Лодочный мотор Suzuki DF9.9BRS</h5>
      <p className="sale-item-footer">
        Акция действует до
        <span>31.08.2023</span>
      </p>
    </a>
  );
};

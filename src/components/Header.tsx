import React from 'react';
import logo from '../assets/images/logo.svg';
import { UserList } from './UserList';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCategories } from '../redux/categories/slelectors';
import { ECategoriesStatus } from '../redux/categories/types';
import { CategoryLoader } from './loaders/CategoryLoader';

export const Header: React.FC = () => {
  const { categories, status } = useSelector(selectCategories);

  return (
    <header className="header">
      <div className="headerTop">
        <div className="container">
          <div className="headerTopInner">
            <nav className="menu">
              <button className="menu__btn">
                <div className="menu__btn-line"></div>
                <div className="menu__btn-line"></div>
                <div className="menu__btn-line"></div>
              </button>
              <ul className="menuList">
                <li className="menuItem">
                  <a className="menuLink" href="#">
                    Магазин
                  </a>
                </li>
                <li className="menuItem">
                  <a className="menuLink" href="#">
                    Акции
                  </a>
                </li>
                <li className="menuItem">
                  <a className="menuLink" href="#">
                    Доставка и оплата
                  </a>
                </li>
              </ul>
            </nav>
            <Link className="logo" to="/">
              <img className="logoImg" src={logo} alt="" />
            </Link>
            <div className="headerBox">
              <a
                className="headerAdress"
                href="https://www.google.com/maps/place/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3,+%D0%A1%D0%B2%D0%B5%D1%80%D0%B4%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB./@56.8207678,60.54855,11.1z/data=!4m6!3m5!1s0x43c165eaa062db4b:0xd50243d7f7567f20!8m2!3d56.8430993!4d60.6454086!16zL20vMGhrcG4!5m1!1e1?hl=ru-RU"
                target="_blank">
                Екатеринбург, ул. Папанина 3
              </a>
              <UserList />
            </div>
          </div>
        </div>
      </div>
      <ul className="menu-mobile__list">
        <li className="menu-mobile__item">
          <a className="menu-mobile__link" href="#">
            <img className="menu-mobile__img" src="images/user.svg" alt="" />
            <p>Войти</p>
          </a>
        </li>
        <li className="menu-mobile__item">
          <a className="menu-mobile__link" href="#">
            <img className="menu-mobile__img" src="images/user.svg" alt="" />
            <p>Регистрация</p>
          </a>
        </li>
        <li className="menu-mobile__item">
          <a className="menu-mobile__link" href="#">
            <img className="menu-mobile__img" src="images/heart.svg" alt="" />
            <span>Избранное</span>
          </a>
        </li>
        <li className="menu-mobile__item">
          <a className="menu-mobile__link" href="#">
            <img className="menu-mobile__img" src="images/basket.svg" alt="" />
            <p>Корзина</p>
          </a>
        </li>
        <li className="menu-mobile__item">
          <a className="menu-mobile__link" href="#">
            <img className="menu-mobile__img" src="images/house.svg" alt="" />
            <p>Магазины</p>
          </a>
        </li>
        <li className="menu-mobile__item">
          <a className="menu-mobile__link" href="#">
            <img className="menu-mobile__img" src="images/procent.svg" alt="" />
            <p>Акции</p>
          </a>
        </li>
        <li className="menu-mobile__item">
          <a className="menu-mobile__link" href="#">
            <img className="menu-mobile__img" src="images/box.svg" alt="" />
            <p>Доставка и оплата</p>
          </a>
        </li>
        {categories.map((category, index) => (
          <li className="menu-mobile__item" key={`${category.name}_${index}`}>
            <a className="menu-mobile__link" href="#">
              <p>{category.name}</p>
            </a>
          </li>
        ))}
      </ul>
      <div className="menu__mobile-linewrapper">
        <ul className="menu__mobile-line">
          <li className="menuItem">
            <a className="menuLink" href="#">
              Магазин
            </a>
          </li>
          <li className="menuItem">
            <a className="menuLink" href="#">
              Акции
            </a>
          </li>
          <li className="menuItem">
            <a className="menuLink" href="#">
              Доставка и оплата
            </a>
          </li>
        </ul>
      </div>
      <div className="headerBottom">
        <div className="container">
          <ul className="menu-categories">
            {status === ECategoriesStatus.LOADING ? (
              <CategoryLoader count={6}>
                <li className="menu-categoriesItem">
                  <a className="menu-categoriesLink">Загрузка...</a>
                </li>
              </CategoryLoader>
            ) : (
              categories.map((category, index) => (
                <li className="menu-categoriesItem" key={`${category.name}_${index}`}>
                  <Link className="menu-categoriesLink" to="catalog">
                    {category.name}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

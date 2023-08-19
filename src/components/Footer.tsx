import React from 'react';
import { Social } from './Social';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__top-inner">
            <div className="footer__top-item footer__top-newslatter">
              <h6 className="footer__top-title">
                Подпишитесь на нашу рассылку и узнавайте о акция быстрее
              </h6>
              <form className="footer-form">
                <input
                  className="footer-form__input"
                  type="text"
                  placeholder="Введите Ваш e-mail:"
                />
                <button className="footer-form__btn" type="submit">
                  Отправить
                </button>
              </form>
            </div>
            <div className="footer__top-item footer__top-social">
              <h6 className="footer__top-title footer__topdrop">Информация</h6>
              <ul className="footer-list">
                <li className="footer-list__item">
                  <a href="#"></a>О компании
                </li>
                <li className="footer-list__item">
                  <a href="#"></a>Магазины
                </li>
                <li className="footer-list__item">
                  <a href="#"></a>Акции
                </li>
                <li className="footer-list__item">
                  <a href="#"></a>Контакты
                </li>
              </ul>
            </div>
            <div className="footer__top-item footer__top-itemdrop">
              <h6 className="footer__top-title footer__topdrop">Интернет-магазин</h6>
              <ul className="footer-list">
                <li className="footer-list__item">
                  <a href="#"></a>Доставка и самовывоз
                </li>
                <li className="footer-list__item">
                  <a href="#"></a>Оплата
                </li>
                <li className="footer-list__item">
                  <a href="#"></a>Возврат-обмен
                </li>
                <li className="footer-list__item">
                  <a href="#"></a>Новости
                </li>
              </ul>
            </div>
            <div className="footer__top-item">
              <Social />
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <a
            className="footer__bottom-link"
            href="https://ru.wikipedia.org/wiki/%D0%9E%D1%84%D0%B5%D1%80%D1%82%D0%B0">
            Договор оферты
          </a>
          <a className="footer__bottom-link" href="#">
            Политика обработки персональных данных{' '}
          </a>
        </div>
      </div>
    </footer>
  );
};

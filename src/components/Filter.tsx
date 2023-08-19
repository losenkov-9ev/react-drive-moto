import React from 'react';

export const Filter: React.FC = () => {
  return (
    <aside className="catalog__inner-aside aside-filter">
      <div className="tabs-wrapper tabs-wrapper--no-scroll">
        <div className="tabs aside-filter__tabs">
          <a className="tab aside-filter__tab tab--active" href="#filter-1">
            <span>Параметры</span>
          </a>
          <a className="tab aside-filter__tab tab" href="#filter-2">
            <span>По марке</span>
          </a>
        </div>
      </div>
      <div className="tabs-container">
        <div id="filter-1" className="tabs-content aside-filter__tabs-contant tabs-content--active">
          <form className="aside-filter__form">
            <ul className="aside-filter__list">
              <li className="aside-filter__item-drop">
                <p className="aside-filter__item-title filter__item-drop filter__item-drop--active">
                  Наличие
                </p>
                <div className="aside-filter__content">
                  <div className="aside-filter__content-box">
                    <label className="aside-filter__content-label">
                      <input className="filter-style" type="checkbox" />В наличии
                    </label>
                  </div>
                  <div className="aside-filter__content-box">
                    <label className="aside-filter__content-label">
                      <input className="filter-style" type="checkbox" />
                      Под заказ
                    </label>
                  </div>
                </div>
              </li>
              <li className="aside-filter__item-drop">
                <p className="aside-filter__item-title filter__item-drop filter__item-drop--active">
                  Новинки
                </p>
                <div className="aside-filter__content aside-filter__content-radio">
                  <div className="aside-filter__content-box">
                    <label className="aside-filter__content-label">
                      <input className="filter-style" name="radio" type="radio" />
                      Все
                    </label>
                  </div>
                  <div className="aside-filter__content-box">
                    <label className="aside-filter__content-label">
                      <input className="filter-style" name="radio" type="radio" />
                      Новинки
                    </label>
                  </div>
                  <div className="aside-filter__content-box">
                    <label className="aside-filter__content-label">
                      <input className="filter-style" name="radio" type="radio" />
                      Акции
                    </label>
                  </div>
                </div>
              </li>
              <li className="aside-filter__item-drop">
                <p className="aside-filter__item-title filter__item-drop filter__item-drop--active">
                  Цена
                </p>
                <div className="aside-filter__content">
                  <input
                    type="text"
                    className="js-range-slider"
                    name="my_range"
                    data-min="100000"
                    data-max="500000"
                    data-from="150000"
                    data-to="275000"
                  />
                </div>
              </li>
              <li className="aside-filter__item-list">
                <div className="filter__item-list">
                  <p className="filter__item-listtitle">Мощность, л.с.</p>
                  <select className="filter-style filter__item-listselect">
                    <option>60</option>
                    <option>90</option>
                    <option>130</option>
                    <option>154</option>
                    <option>230</option>
                    <option>300</option>
                  </select>
                </div>
                <div className="filter__item-list">
                  <p className="filter__item-listtitle">Объём двигателя куб.см</p>
                  <select className="filter-style filter__item-listselect">
                    <option>155</option>
                    <option>230</option>
                    <option>900</option>
                    <option>1049</option>
                    <option>1320</option>
                    <option>1630</option>
                    <option>1812</option>
                  </select>
                </div>
                <div className="filter__item-list">
                  <p className="filter__item-listtitle">Максимальная скорость</p>
                  <select className="filter-style filter__item-listselect">
                    <option>90</option>
                    <option>130</option>
                    <option>154</option>
                    <option>230</option>
                  </select>
                </div>
              </li>

              <li className="aside-filter__item-drop">
                <p className="aside-filter__item-title filter__item-drop filter__item-drop--active">
                  Бренд
                </p>
                <div className="aside-filter__content">
                  <div className="aside-filter__content-box">
                    <label className="aside-filter__content-label">
                      <input className="filter-style" type="checkbox" />
                      BRB
                    </label>
                  </div>
                  <div className="aside-filter__content-box">
                    <label className="aside-filter__content-label">
                      <input className="filter-style" type="checkbox" />
                      Spark 2
                    </label>
                  </div>
                  <div className="aside-filter__content-box">
                    <label className="aside-filter__content-label">
                      <input className="filter-style" type="checkbox" />
                      Spark 3
                    </label>
                  </div>
                  <div className="filter-more">
                    <button className="filter-more__btn">Показать ещё</button>
                  </div>
                </div>
              </li>

              <li className="aside-filter__item-drop">
                <p className="aside-filter__item-title filter__item-drop filter__item-drop--active">
                  Модель
                </p>
                <div className="aside-filter__content">
                  <input className="filter-search" type="text" placeholder="Введите модель" />
                  <div className="aside-filter__content-box">
                    <label className="aside-filter__content-label">
                      <input className="filter-style" type="checkbox" />
                      Sea-doo Spark 2
                    </label>
                  </div>
                  <div className="aside-filter__content-box">
                    <label className="aside-filter__content-label">
                      <input className="filter-style" type="checkbox" />
                      SeaDoo Spark 90
                    </label>
                  </div>
                  <div className="aside-filter__content-box">
                    <label className="aside-filter__content-label">
                      <input className="filter-style" type="checkbox" />
                      SeaDoo GTI 155
                    </label>
                  </div>
                  <div className="aside-filter__content-box">
                    <label className="aside-filter__content-label">
                      <input className="filter-style" type="checkbox" />
                      SeaDoo GTR 230
                    </label>
                  </div>
                  <div className="filter-more">
                    <button className="filter-more__btn">Показать ещё</button>
                  </div>
                </div>
              </li>

              <li className="aside-filter__item-drop btn-checked">
                <p
                  className="aside-filter__item-title filter__item-drop 
                      filter__item-drop--active">
                  Акции
                </p>
                <div className="aside-filter__content">
                  <div className="aside-filter__content-box">
                    <label className="aside-filter__content-label">
                      <input className="filter-style" type="checkbox" />
                      <span className="btn-checked__text">SALE</span>
                    </label>
                  </div>
                  <div className="aside-filter__content-box">
                    <label className="aside-filter__content-label">
                      <input className="filter-style" type="checkbox" />
                      <span className="btn-checked__text">NEW</span>
                    </label>
                  </div>
                  <div className="aside-filter__content-box">
                    <label className="aside-filter__content-label">
                      <input className="filter-style" type="checkbox" />
                      <span className="btn-checked__text">HIT</span>
                    </label>
                  </div>
                  <div className="aside-filter__content-box">
                    <label className="aside-filter__content-label">
                      <input className="filter-style" type="checkbox" />
                      <span className="btn-checked__text">ДИЛЛЕР</span>
                    </label>
                  </div>
                  <div className="filter-more">
                    <button className="filter-more__btn">Показать ещё</button>
                  </div>
                </div>
              </li>

              <li className="aside-filter__item-drop">
                <p className="aside-filter__item-title filter__item-drop filter__item-drop--active">
                  Страны
                </p>
                <div className="aside-filter__content">
                  <div className="aside-filter__content-box">
                    <label className="aside-filter__content-label">
                      <input className="filter-style" type="checkbox" />
                      Россия
                    </label>
                  </div>
                  <div className="aside-filter__content-box">
                    <label className="aside-filter__content-label">
                      <input className="filter-style" type="checkbox" />
                      Германия
                    </label>
                  </div>
                  <div className="aside-filter__content-box">
                    <label className="aside-filter__content-label">
                      <input className="filter-style" type="checkbox" />
                      Китай
                    </label>
                  </div>
                  <div className="aside-filter__content-box">
                    <label className="aside-filter__content-label">
                      <input className="filter-style" type="checkbox" />
                      CША
                    </label>
                  </div>
                  <div className="filter-more">
                    <button className="filter-more__btn">Показать ещё</button>
                  </div>
                </div>
              </li>
              <li className="aside-filter__item-drop aside-filter__item-btn">
                <button className="filter-btn__send filter-btn__send--active" type="submit">
                  Выбрать
                </button>
                <p className="filter__extra">Дополнительные Параметры</p>
                <div className="filter__extra-content">more</div>
                <button className="filter-btn__reset" type="submit">
                  Сбросить фильтр
                </button>
              </li>
            </ul>
          </form>
        </div>
        <div id="filter-2" className="tabs-content aside-filter__tabs-contant">
          content-2
        </div>
      </div>
    </aside>
  );
};

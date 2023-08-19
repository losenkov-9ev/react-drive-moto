import React from 'react';

export const Catalog: React.FC = () => {
  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <div className="breadcrumbs__inner">
            <ul className="breadcrumbs__list mobile-overflow ">
              <li className="breadcrumbs__list-item">
                <a href="index.html">Главная</a>
              </li>
              <li className="breadcrumbs__list-item">
                <span>Гидроциклы</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="catalog">
        <div className="container">
          <h2 className="catalog__title">Гидроциклы</h2>
          <div className="catalog__filter">
            <div className="catalog__filter-itemsinner">
              <div className="catalog__filter-items mobile-overflow">
                <button className="page__active now--active">Полноприводные</button>
                <button className="page__active">От 5000</button>
                <button className="page__active">BRP</button>
                <button className="page__active">Еще</button>
              </div>
            </div>
            <div className="catalog__filter-btn">
              <select className="filter-style select-item">
                <option>По популярности</option>
                <option>По цене</option>
                <option></option>
                <option></option>
              </select>
              <button className="catalog__filter-btngrid catalog__filter-button catalog__filter-button--active">
                <svg
                  width="23"
                  height="21"
                  viewBox="0 0 23 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="21" height="19" stroke="#2F3035" strokeWidth="2" />
                  <rect
                    x="7"
                    y="6"
                    width="2"
                    height="2"
                    fill="#2F3035"
                    stroke="#2F3035"
                    strokeWidth="2"
                  />
                  <rect
                    x="7"
                    y="13"
                    width="2"
                    height="2"
                    fill="#2F3035"
                    stroke="#2F3035"
                    strokeWidth="2"
                  />
                  <rect
                    x="14"
                    y="6"
                    width="2"
                    height="2"
                    fill="#2F3035"
                    stroke="#2F3035"
                    strokeWidth="2"
                  />
                  <rect
                    x="14"
                    y="13"
                    width="2"
                    height="2"
                    fill="#2F3035"
                    stroke="#2F3035"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <button className="catalog__filter-btnline catalog__filter-button">
                <svg
                  width="25"
                  height="19"
                  viewBox="0 0 25 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g opacity="1">
                    <rect x="6" width="19" height="3" rx="1.5" fill="#2F3035" />
                    <rect x="6" y="8" width="19" height="3" rx="1.5" fill="#2F3035" />
                    <rect x="6" y="16" width="19" height="3" rx="1.5" fill="#2F3035" />
                    <rect width="3" height="3" rx="1.5" fill="#2F3035" />
                    <rect y="8" width="3" height="3" rx="1.5" fill="#2F3035" />
                    <rect y="16" width="3" height="3" rx="1.5" fill="#2F3035" />
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="catalog__inner">
            <div className="aside__btn">Фильтр</div>
            {/* <Filter /> */}
            <div className="catalog__inner-list">
              
              <div className="pagination">
                <ul className="pagination-list">
                  <li className="pagination-list__item active">
                    <a href="#">1</a>
                  </li>
                  <li className="pagination-list__item">
                    <a href="#">2</a>
                  </li>
                  <li className="pagination-list__item">
                    <a href="#">3</a>
                  </li>
                  <li className="pagination-list__item">
                    <a href="#">4</a>
                  </li>
                  <li className="pagination-list__item">
                    <a href="#">5</a>
                  </li>
                  <li className="pagination-list__item pagination-list__item">
                    <span>...</span>
                  </li>
                  <li className="pagination-list__item">
                    <a href="#">11</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

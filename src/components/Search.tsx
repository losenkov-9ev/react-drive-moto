import React from 'react';

type TSearchTab = {
  value: string;
  item: string;
};

const tabsValues = ['Поиск по номеру', 'Поиск по марке', 'Поиск по названию товара'];
const tabsItems = ['Введите номер', 'Введите марку', 'Введите название товара'];

const tabs: TSearchTab[] = [
  { value: 'Поиск по номеру', item: 'Введите номер' },
  { value: 'Поиск по марке', item: 'Введите марку' },
  { value: 'Поиск по названию товара', item: 'Введите название товара' },
];

export const Search = () => {
  const [activeTab, setActiveTab] = React.useState<number>(0);

  const onClickTab = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    e.preventDefault();
    setActiveTab(index);
  };

  return (
    <div className="search page-section">
      <div className="container">
        <div className="search__inner">
          <div className="search__tabs tabs-wrapper">
            <div className="mobile-overflow">
              {tabs.map((tab, index) => (
                <a
                  href="#"
                  key={`${tab.value}_${index}`}
                  onClick={(e) => onClickTab(e, index)}
                  className={`tab search__tabs-item ${index === activeTab && 'tab--active'}`}>
                  {tab.value}
                </a>
              ))}
            </div>
          </div>
          <div className="search__content">
            {
              <div className="tabs-content search__content-item tabs-content--active">
                <form className="search__content-form">
                  <input
                    className="search__content-input"
                    type="text"
                    placeholder={tabs[activeTab].item}
                  />
                  <button className="search__content-btn" type="submit">
                    искать
                  </button>
                </form>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

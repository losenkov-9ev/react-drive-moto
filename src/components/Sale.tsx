import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import SaleBannerImage from '../assets/images/banner-slider.jpg';
import { SaleItem } from './SaleItem';

const sliderConfig = {
  modules: [Autoplay],
  spaceBetween: 20,
  autoplay: {
    delay: 1000,
  },
};

export const Sale: React.FC = () => {
  return (
    <section className="banner-section page-section">
      <div className="container">
        <div className="banner-sectionInner">
          <div className="banner-sectionSlider">
            <Swiper {...sliderConfig}>
              {[...new Array(6)].map((_, index) => (
                <SwiperSlide key={index}>
                  <a className="banner-sectionSlider-item" href="#">
                    <img className="banner-sectionSlider-img" src={SaleBannerImage} alt="" />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <SaleItem />
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Product, TProduct } from './Product';
import { Swiper, SwiperSlide } from 'swiper/react';

const sliderConfig = {
  slidesPerView: 3.5,
  spaceBetween: 30,
};

export const ProductsSlider: React.FC<{ products: TProduct[] }> = ({ products }) => {
  return (
    <Swiper {...sliderConfig}>
      {products.map((product, index) => (
        <SwiperSlide key={`${product.image}_${index}`}>
          <Product {...product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

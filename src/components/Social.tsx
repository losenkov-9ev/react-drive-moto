import React from 'react';

import instagram from '../assets/images/instagram.svg';
import vk from '../assets/images/vk.svg';
import facebook from '../assets/images/facebook.svg';
import youtube from '../assets/images/youtube.svg';

export const Social: React.FC = () => {
  return (
    <ul className="social-list">
      <li className="social-list__item">
        <a href="https://www.instagram.com/">
          <img src={instagram} alt="" />
        </a>
      </li>
      <li className="social-list__item">
        <a href="https://vk.com/1">
          <img src={vk} alt="" />
        </a>
      </li>
      <li className="social-list__item">
        <a href="https://www.facebook.com/">
          <img src={facebook} alt="" />
        </a>
      </li>
      <li className="social-list__item">
        <a href="https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8">
          <img src={youtube} alt="" />
        </a>
      </li>
    </ul>
  );
};

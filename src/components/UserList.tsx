import React from 'react';

import likes from '../assets/images/heart.svg';
import user from '../assets/images/user.svg';
import cart from '../assets/images/basket.svg';

export const UserList: React.FC = () => {
  return (
    <ul className="userList">
      <li className="user-listItem">
        <a className="user-listLink" href="#">
          <img src={likes} alt="" />
        </a>
      </li>
      <li className="user-listItem li">
        <a className="user-listLink" href="#">
          <img src={user} alt="" />
        </a>
      </li>
      <li className="user-listItem li">
        <a className="user-listLink basket" href="#">
          <img src={cart} alt="" />
          <p className="basket__num">2</p>
        </a>
      </li>
    </ul>
  );
};
